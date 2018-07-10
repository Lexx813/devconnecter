const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    users = require('./routes/api/users'),
    profile = require('./routes/api/profile'),
    posts = require('./routes/api/posts')

 app.use(bodyParser.urlencoded({extended:false}))
 app.use(bodyParser.json())

//DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
 .connect(db)
 .then(() => console.log('MONGODB CONNECTED'))
 .catch((err) => console.log(err))

 // Passport middleware
 app.use(passport.initialize())

 // Passport Config
 require('./config/passport')(passport)

// Use Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT} `));