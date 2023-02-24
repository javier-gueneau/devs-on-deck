const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/note-wall3',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to database'))
.catch((err) => console.log('An error occured trying to connet to database', err))

