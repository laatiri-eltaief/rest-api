const mongoose = require('mongoose');


const UserShema = mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
   
  lastName:  {
    type: String,
    required:true
},
age:Number,
 
email: {
    type: String,
    required:true
},
  
  password:  {
    type: String,
    required:true
},
})
const User = mongoose.model("User",UserShema);
module.exports = User;