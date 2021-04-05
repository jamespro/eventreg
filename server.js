const express = require('express')
const app = express()
const mongo = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const PORT = 3333
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'eventreg'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} database`)
        db = client.db(dbName)
    })
    .catch(error => console.log(error))

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    // res.render('index.ejs')
    db.collection('events').find().sort({eventid:-1}).toArray()
        .then(data => {
        res.render('index.ejs',{events:data})
        })
    .catch(error => console.error(error))
})

app.get('/admin/event', (req, res) => {
    //TODO: change query, should just get one event
    db.collection('events').find().sort({eventid:-1}).toArray()
        .then(data => {
        res.render('admin/event.ejs',{events:data})
        })
    .catch(error => console.error(error))
})

app.get('/admin/events', (req, res) => {
    //get all events
    db.collection('events').find().sort({eventid:-1}).toArray()
        .then(data => {
        res.render('admin/events.ejs',{events:data})
        })
    .catch(error => console.error(error))
})

app.post('/createEvent', (req, res) => {
    //create an event
    db.collection('events').insertOne({
        eventcode: req.body.eventcode,
        eventname: req.body.eventname,
        eventstartdate: req.body.eventstartdate,
        eventenddate: req.body.eventenddate,
        eventtype: req.body.eventtype,
        eventvenue: req.body.eventvenue,
        eventcity: req.body.eventcity,
        eventstate: req.body.eventstate,
        eventcountry: req.body.eventcountry,
        availablepostevent: req.body.availablepostevent
    })
        .then(result => {
            console.log('Event Added!')
            res.redirect('/admin/event')
        })
        .catch(error => console.error(error))
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})