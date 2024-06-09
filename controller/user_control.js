const User = require ('../moduel/user')


// insert data
insertUser = function (req, res, next) {
  const user = new User({
    name: req.body.username,
    email : req.body.email

  })

  try {
   user.save();
    console.log(user);
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
//   user.save(function(err,res){
// if (err) {
//   console.log(err);
//   res.redirect('/')
//   return
//   }else{
//     console.log(res);
//     res.redirect('/')
//   }
// })
}


// get users


getUser = async (req, res, next) => {
    try {
      const users = await User.find({},'name email');
      console.log(users);
      res.render('index', { users: users });
    } catch (err) {
      console.log(err);
      res.redirect('/');
    }
  };

// update user
// updateUser = async (req, res, next) => {
//     try {
//       const ID = req.body.id;
//       const updateUser = {
//         name: req.body.name,
//         email: req.body.email
//       };
  
//       const user = await User.findByIdAndUpdate(ID, { $set: updateUser }, { new: true });
//       console.log(user);
//       res.redirect('/getUsers');
//     } catch (err) {
//       console.log(err);
//       res.redirect('/');
//     }
//   }
  updateUser =  async (req, res, next) => {
    try {
      const ID = req.body._id;
      const updateUser = {
        name: req.body.name,
        email: req.body.email
      };
  
      const user = await User.updateOne({ id: ID }, { $set: updateUser });
      console.log(user);
      res.redirect('/getUsers');
    } catch (err) {
      console.log(err);
      res.redirect('/');
    }
  }

//   delete user

deleteUser =  async (req, res, next) => {
    try {
      const ID = req.body.id;
      const user = await User.deleteOne({ _id: ID });
      console.log(user);
      res.redirect('/getUsers');
    } catch (err) {
      console.log(err);
      res.redirect('/');
      return
    }
  }
module.exports = {
    insertUser: insertUser,
    getUser: getUser,
    updateUser:updateUser,
    deleteUser:deleteUser

}
