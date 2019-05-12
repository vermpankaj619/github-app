const express = require('express');
const request = require('request');
const mongoose = require('mongoose');

//const config = require('./config');
const Api  = require('../models/github')
const router = express.Router();
/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});
//client_id='Iv1.aecb93d104117c2c
//client_secret='eda85424a0cc0d0b7cabf4ec9336996d6d21a8c3
router.get('/github/:username', (req, res) => {
  try {
    const options = {
      uri: `https://api.github.com/users/${
        req.params.username
      }/repos?per_page=5&sort=created:asc&client_id='Iv1.aecb93d104117c2c'}&client_secret='eda85424a0cc0d0b7cabf4ec9336996d6d21a8c3'}`,
      method: 'GET',
      headers: { 'user-agent': 'node.js' }
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);

      if (response.statusCode !== 200) {
        return res.status(404).json({ msg: 'No Github profile found' });
      }
    
      res.json(JSON.parse(body));
      console.log(body);
     
      
    });

    




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
