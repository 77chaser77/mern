const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

const cors = require('cors')
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://77chaser77:ok14159265@77chaser77.veyard5.mongodb.net/mern?retryWrites=true&w=majority')


app.get('/getUsers', (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
             res.json(result)
        }
     })
})
    
app.post('/createUser', async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()   

    res.json(user)
})

app.get('/', (req, res) => {
    res.send('<h1>서비스 준비중입니다 .test</h1>')
})

app.get('/hello', (req, res) => {
    res.json({message: 'Hello world', user: 'me'})
})

app.listen(3001, () => {
    console.log('Server running on port 3001')
})


