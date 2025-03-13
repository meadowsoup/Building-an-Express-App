const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');

const aboutRoute = require('./routes/about');
const greetRoute = require('./routes/greet');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// setting view engine as ejs
app.set('view-engine', 'ejs')

app.use('/about', aboutRoute);
app.use('/greet', greetRoute);

app.get('/', (req, res) => {
     res.send("This is the home page")
});


app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});



