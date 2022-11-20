const express = require('express');
const http = require('http');
const path = require('path');

//mongoose creates the connection with the database 
const mongoose = require('mongoose');


//connecting to mongo atlas database, if connects successfully it will console listen on port 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //starting the server
server.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
});
})
.catch((err) => {
    console.log("database connection failed. Server not started");
    console.error(err);
  });