# Note-Taker

## Author
Tony Magrady - Berkeley Full-Stack Web Development Bootcamp student, Fall-Winter Session 2023-2024

## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Description

A Note Taker application that can be used to write and save notes. This application uses an Express.js back end and saves, retrieves, and deletes note data from a JSON file.
Also deploying using Heroku, per the challenge assignmemt.


## Installation

Installed apps include express (web framework for node.js), path (file & directory utilities), and fs (file access).

## Usage

Note-taker is a web application - production URL: https://note-taker-depl-202e8d81c2ed.herokuapp.com
Click "Get Started" to open Notes webpage, rendering all previously created notes.
Here notes can be selected and viewed, new notes created and saved, and existing notes deleted.
To run locally: 
On a bash command line:
    heroku git:clone -a note-taker-depl2
    heroku local web --port 5001
In a browser:  
    http://localhost:5001/
    See user instructions above.

[Webpage Image](./public/webpage.jpg)

## Credits

Not applicable

## License

The MIT License

Copyright (c) (2023) (Tony Magrady)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.