var path = require('path')
const express = require('express')
const APIResponse = require('./meaningCloud.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/api', async function (req, res) {
    const response = await APIResponse(req.query.url)
    res.json(response.body)
    console.log(`subjectivity: ${response.body.subjectivity}`)
    console.log(`agreement: ${response.body.agreement}`)
    
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

