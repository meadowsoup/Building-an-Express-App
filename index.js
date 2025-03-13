const express = require('express')
const app = express()
const PORT = 3000


app.get('/', (req, res) => {
     res.send("This is the home page")
});


app.listen(port, () => {
     console.log(`Server is running on port ${PORT}`);
});



