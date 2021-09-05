const express = require('express');
const PORT = 80;
const app =express();

app.get('/hello',(req,res,next)=>{
    res.send('welcome to firebase functions with Node express');
});

app.listen(PORT,()=>{
    console.log('listening on port ',PORT);
})
