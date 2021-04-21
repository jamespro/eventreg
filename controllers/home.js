module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs')
        // db.collection('events').find().sort({eventid:-1}).toArray()
        //     .then(data => {
        //     res.render('index.ejs',{events:data})
        //     })
        // .catch(error => console.error(error))
    }
}