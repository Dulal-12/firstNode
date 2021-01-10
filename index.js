const express = require('express');
const app = express();

app.get('/' , (req , res)=>{
    res.send('Thank you very much Mohammad Dulal Miahgit ');
})
app.listen(4000 , ()=> console.log('listing to port 3000'));
