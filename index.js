import express from 'express'
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/private/index.html')
})

app.listen(80, () => {
    console.log('App listening on port 80')
})