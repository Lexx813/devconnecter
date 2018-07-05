const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    users = require('./routes/api/users'),
    profile = require('./routes/api/profile'),
    posts = require('./routes/api/posts')

//DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
 .connect(db)
 .then(() => console.log('MongoDb Connected'))
 .catch((err) => console.log(err))

app.get('/', (req, res) => res.send('Hello'))

// Use Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT} `));