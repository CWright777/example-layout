var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports = {
  create: function(req,res){
    var newUser = new User({
      name: req.body.name
    })
    newUser.save(function(err){
      if(err){
        console.log(err);
      } else {
        res.json(newUser.id);
      }
    })
  }
}
