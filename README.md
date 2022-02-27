# Simple Markdown Blog

👋

A fast, simple markdown blog written in Node.js, feel free to take a copy and begin blogging!
* The description only accepts markdown, everything else (*title & snippet*) do not support markdown.
* As of now, the *image* "default placeholder" does not work. 

## 💻 install & run locally:

- Clone the repo:
```
$ git clone https://github.com/prosodia/MarkdownBlog.git
$ cd markdownblog
```
- Create package.json & install dependancies 
```
$ npm init && npm i dompurify ejs express jsdom lodash marked mongoose morgan slugify
```
- Run project:

```
$ node app.js
```

## 📲 deploy to heroku:

  <a href="https://heroku.com/deploy?template=https://github.com/prosodia/MarkdownBlog">
    <img src="https://img.shields.io/badge/deploy_to-heroku-997FBC.svg?style=for-the-badge&logo=Heroku">
  </a>
  
  
