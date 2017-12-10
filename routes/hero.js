let express = require('express');
let router = express.Router();
let Hero = require('../models/heroModel');

// get all heros
router.get('/', function(req, res) {
  // TODO: add code to return all heros from the db
  Hero.find({}, ( err, response ) => {
    if( err ){
      console.log( 'error reading gyros from db:', err );
      res.sendStatus( 500 );
    }// end error
    else{
      console.log( '/hero get route hit' );
      res.send( response );
    } // end !err
  }); // end find
});

// post to create a new hero
// DO NOT MODIFY
router.post('/', (req, res) => {
  console.log('inside hero post', req.body);

  var newHero = new Hero(req.body);

  newHero.save( (err) => {
    console.log('here');
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('successful hero created');
      res.sendStatus(201);
    }
  });
});

module.exports = router;
