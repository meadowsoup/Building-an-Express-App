const express = require('express');
const router = express.Router();

router.get('/:name', (req, res) => {
     const {name} = req.params;
     res.render('greet', {title: "Greet", name}) // without the const above this line we would have name:"Sol" or whatever.
})

module.exports = router;