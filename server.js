const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

// Inicia app
const app = express();
app.use(express.json());
app.use(cors());

// Inicia DB
mongoose.connect('mongodb://localhost:27017/usersapi', 
{useNewUrlParser: true, useUnifiedTopology : true});

requireDir('./src/models/');


app.use('/api', require('./src/routes'));
app.listen(3001);