const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port =process.env.PORT || 3000;
const app = express();

//make way for some custom css, js and images
// app.use('public', express.static(__dirname + 'public'));
// app.use('img', express.static(__dirname + 'img'));



app.use(bodyParser.urlencoded({ extended: false }));
 app.use(express.static(path.resolve(__dirname, 'public')));
 app.use(express.static(path.resolve('pseudo-main/img')));

app.get('/',function(req,res){
    res.sendFile(__dirname, 'public/index.html');
})

app.post('/send', function (req, res) { 
    res.send('Data received:\n' + JSON.stringify(req.body));
});


app.listen(port,()=>{
    console.log(`listening on port : ${port}`);
} );

