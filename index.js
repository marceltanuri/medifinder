const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'src')))
  .get('/', (req, res) => res.render('src/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))