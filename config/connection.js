const mongoose = require('mongoose');

const URI =`mongodb+srv://JuanEstebanAdso:CzFpF3eRIfoXZbBG@cluster0.xfphf.mongodb.net/AdsoDB`

mongoose.connect(URI);

module.exports = mongoose;

