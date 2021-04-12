const Event = require('../models/Event')

module.exports = {
    getIndex: (req, res) => {
        try {
            res.render('admin/admin.ejs')
        } catch (err) {
            console.log(err)
        }
    },
    getEvents: async (req,res)=>{
        try{
            // console.log(req)
            const eventItems = await Event.find()
            //TODO: Remove this console.log when it finally works
            console.log("eventItems", eventItems)
            //should be showing all the events in the database
            res.render('admin/events.ejs', {events: eventItems})
        }catch(err){
            console.log(err)
        }
    },
    createEvent: async (res, req) => {
        try {
            //TODO: Remove this console.log when it finally works
            console.log(req)
            //should accept all the fields from the create event form
            await Event.create({eventcode: req.body.eventcode, eventname: req.body.eventname, eventstartdate: req.body.eventstartdate, eventenddate: req.body.eventenddate, eventtype: req.body.eventtype, eventvenue: req.body.eventvenue, eventcity: req.body.eventcity, eventstate: req.body.eventstate, eventcountry: req.body.eventcountry, availablepostlive: req.body.availablepostlive})
            console.log('Event has been added!')
            res.redirect('/admin/events')
        } catch (err) {
            console.log(err)
        }
    }

}


// app.get('/admin/event/:eventID', (req, res) => {
//     //TODO: change query, should just get one event
//     let eventID = request.params.eventID.toLowerCase() 
//     db.collection('events').findOne({_id:eventID}).toArray()
//         .then(data => {
//         res.render('admin/event.ejs',{events:data})
//         })
//     .catch(error => console.error(error))
// })

// app.get('/admin/events', (req, res) => {
//     //get all events
//     db.collection('events').find().sort({eventid:-1}).toArray()
//         .then(data => {
//         res.render('admin/events.ejs',{events:data})
//         })
//     .catch(error => console.error(error))
// })

// app.post('/createEvent', (req, res) => {
//     //create an event
//     db.collection('events').insertOne({
//         eventcode: req.body.eventcode,
//         eventname: req.body.eventname,
//         eventstartdate: req.body.eventstartdate,
//         eventenddate: req.body.eventenddate,
//         eventtype: req.body.eventtype,
//         eventvenue: req.body.eventvenue,
//         eventcity: req.body.eventcity,
//         eventstate: req.body.eventstate,
//         eventcountry: req.body.eventcountry,
//         availablepostevent: req.body.availablepostevent
//     })
//         .then(result => {
//             console.log('Event Added!')
//             res.redirect('/admin/events')
//         })
//         .catch(error => console.error(error))
// })
