const express = require('express');
const path = require('path');
const fs = require('fs');
const notesFile = require('./db/db.json');
// const { uuidv4 } = require('uuidv4');
const PORT = 3001;

const app = express();

console.log('__dirname', __dirname);

// Declare uuid utility function
const uuid = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

async function writeToFile(notesFile, parsedData) {
  fs.writeFile(notesFile, parsedData, (err) =>
      err ? console.error(err) : console.info(`\nData written to ${notesFile}`)
    );
}

app.use(express.static('public'));
app.use(express.json());

// HTML routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// API routes
// GET route for all notes
app.get('/api/notes', (req, res) => res.json(notesFile));

// POST route for submitting a new note
app.post('/api/notes', (req, res) => {
  console.log('req.body', req.body);
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;
  if (title && text) {
    // Variable for the object to save
    let newNote = {
      title,
      text,
      id: uuid(),
    };

    const notesFile = './db/db.json';
    fs.readFile(notesFile, 'utf8', async (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(newNote);
        await writeToFile(notesFile, JSON.stringify(parsedData, null, 4));
      }
    });

    const response = {
      status: 'success',
      body: newNote,
    };
    res.json(response);
  } else {
    res.json('Error in posting note');
  }
});

// DELETE Route for a specific tip
app.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;

  if (noteId) {
    const notesFile = './db/db.json';
    fs.readFile(notesFile, 'utf8', async (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        const result = parsedData.filter((note) => note.id !== noteId);
        await writeToFile(notesFile, JSON.stringify(result, null, 4));
      }
    });
    const response = {
      status: 'success',
      id: noteId,
    };
    res.json(response);
  } else {
    res.json('Error in deleting note');
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});