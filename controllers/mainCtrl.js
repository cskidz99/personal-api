var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');


module.exports = {

  // User Functions
  getName: function (req,res,next){
    res.status(200).json(user.name);
  },
  getLocation: function (req,res,next){
    res.status(200).json(user.location);
  },
  getOccupations: function (req,res,next){
    // console.log(req.query.order);
    if (req.query.order === 'desc'){
      res.status(200).json(user.occupations.sort().reverse());
      return;
    } else {
    res.status(200).json(user.occupations.sort());
    return;
    }
  },
  getLatestOccupations: function (req,res,next){
    var latestOccupation = user.occupations.slice(0, 1);
    res.status(200).json(latestOccupation);
  },
  getHobbies: function (req,res,next){
    res.status(200).json(user.hobbies);
  },
  getTypeHobbies: function (req,res,next){
    var result = user.hobbies.filter(
      function (value) {
        // console.log(value);
        return (value.type === req.params.type);
      }
    );
    res.status(200).json(result);
  },
  getFamily: function (req,res,next){
    res.status(200).json(user.family);
  },
  getGenderFamily: function (req,res,next){
    var result = user.family.filter(
      function (value) {
        // console.log(value);
        return (value.gender === req.params.gender);
      }
    );
    res.status(200).json(result);
  },
  getRestaurants: function (req,res,next){
    res.status(200).json(user.restaurants);
  },
  getNameRestaurants: function (req,res,next){
    var paramString = req.params.name.split("+").join(' ');
    var result = user.restaurants.filter(
      function (value) {
        // console.log(value,req.params.name);
        return (value.name === paramString);
      }
    );
    res.status(200).json(result);
  },
  putName: function (req, res, next) {
    user.name = req.body.name;
    res.status(200).json(user.name);
  },
  putLocation: function (req, res, next) {
    user.location = req.body.location;
    res.status(200).json(user.location);
  },
  postHobbies: function (req, res, next) {
    user.hobbies.push(req.body);
    res.status(200).json(user.hobbies);
  },
  postOccupations: function (req, res, next) {
    user.occupations.push(req.body.occupations);
    res.status(200).json(user.occupations);
  },
  postFamily: function (req, res, next) {
    user.family.push(req.body);
    res.status(200).json(user.family);
  },
  postRestaurants: function (req, res, next) {
    user.restaurants.push(req.body);
    res.status(200).json(user.restaurants);
  },

  // Skillz Functions
  getSkillz: function (req,res,next){
    // console.log(req.query.order);
    if (req.query.experience){
      var result = skillz.filter(
        function (value) {
          // console.log(value,req.query.experience);
          return (value.experience === req.query.experience);
        }
      )
      res.status(200).json(result);
    } else {
      res.status(200).json(skillz);
    }
  },
  postSkillz: function (req,res,next){
    skillz.push(req.body);
    res.status(200).json(skillz);
  },

  // Secrets Functions
  getSecrets: function (req,res,next){
    res.status(200).json(secrets);
  },



}
