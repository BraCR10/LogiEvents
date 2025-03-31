require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json()); 

// Load routers
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const eventRouter = require('./routes/event');
const chatRouter = require('./routes/chatbot');
const ticketRouter = require('./routes/ticket');

app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database succesfully connected.'))
.catch(err => console.log(err));


app.use(`/auth`, authRouter);
app.use(`/user`, userRouter);
app.use(`/event`, eventRouter);
app.use(`/chat`, chatRouter);
app.use(`/ticket`, ticketRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 


module.exports = app;
