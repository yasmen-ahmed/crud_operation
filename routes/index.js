var express = require('express');
var router = express.Router();

const User =require('../moduel/user');
const control = require  ('../controller/user_control');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/insert',control.insertUser)

router.get('/getUsers', control.getUser);


// router.get('/getUsers',(req, res,next)=>{
//   User.find({},(err,users)=>{
//     if (err) {
//       console.log(err);
//       res.redirect('/')
//       return
//     }else{
//       console.log(users);
//       res.render('users',{users:users})
//     }
//   })
// })



router.post('/update',control.updateUser);


// router.post('/update',(req,res,next)=>{
//   const ID =req.body.id
//   const updateUser = {
//     name:req.body.name,
//     email:req.body.email
//   }

//   User.updateOne({ id:ID} ,{$set:updateUser} ,(err,user)=>{
//     if (err) {
//       console.log(err);
//       res.redirect('/')
//       return
//     }else{
//       console.log(user);
//       res.redirect('/getUsers')
//     }
//   })
// })

// router.post('/delete', async (req, res, next) => {
//   try {
//     const ID = req.body.id;
//     const deletedUser = await User.findByIdAndDelete(ID);
//     if (!deletedUser) {
//       console.log('User not found');
//       res.redirect('/getUsers');
//       return;
//     }
//     console.log('Deleted user:', deletedUser);
//     res.redirect('/getUsers');
//   } catch (err) {
//     console.log(err);
//     res.redirect('/');
//   }
// });

router.post('/delete',control.deleteUser);
module.exports = router 
