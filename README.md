# MVC-todo-list

## Introduction
Hey there! Here I have built a data persistent todo list, that follows the model-view-controller design pattern, incorporating mySQL as a database. Once the app is launched, a user can add a todo list item, mark it as complete or delete it. 

Please see below under "General Methodology" for a more detailed explanation of how this app works!

## Technologies 
HTML 5<br/>
CSS 3<br/>
JavaScript<br/>
JQuery<br/>
Node.js<br/>
Express<br/>
Handlebars</br>
mySQL<br/>

## General Methodology
Because this app follows the MVC design pattern, I have split up my file structure to reflect code for a database (model), html/css coding (handlebars templating/views), and controller (orm and sql interaction). Firstly, a connection is made to the database, and then the functions that will be performend on the database are contained in an orm or object-relational management file. Each of the user initiated clicks trigger a database function, which when performed triggers an html/css edit and finally a page reload to reflect the new changes.

Please reach out for any questions on this methodology!


## Credits
Google color scheme and design inspiration<br/>
https://brandpalettes.com/google-colors/