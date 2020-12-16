const express = require('express');
const passport = require('passport');

const authenticate = require('../authenticate');
const User = require('../models/Users');

const userRouter = express.Router()


userRouter.route('/signup')
.post ((req, res) => {
    User.register(
        new User({username: req.body.username, firstName: req.body.firstName, lastName: req.body.lastName}),
        req.body.password,
        (err, user) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({err: err})
            } else {
                // if (req.body.firstName) {
                //     user.firstName = req.body.firstName;
                // }
                // if(req.body.lastName) {
                //     user.lastName = req.body.lastName;
                // }
                // user.save( err => {
                //     if (err) {
                //         res.statusCode = 500;
                //         res.setHeader('Content-Type','application/json');
                //         res.json({err: err});
                //         return;
                //     }
                //     passport.authenticate('local') (req, res, () => {
                //         res.statusCode = 200;
                //         res.setHeader('Content-Type', 'application/json');
                //         res.json({success: true, status: 'Registration Successful'})
                //     })
                // })

                passport.authenticate('local') (req, res, () => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({success: true, status: 'Registration Successful'})
                })
                
            }
        }
    )
})



// userRouter.route('/login')
// .post(passport.authenticate('local'), (req, res) => {
//     const token = authenticate.getToken({_id: req.user._id});
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.json({ success: true, token: token, status: 'You are successfully logged in'});
// })

userRouter.post('/login', passport.authenticate('local'), (req, res) => {
    const token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: "You are successfully logged in!"});
  })

userRouter.route('/logout')
.post((req,res,next) => {
    if (req.session) {
        req.session.destroy();
        res.clearCookie('session-id');
        res.json({success: true, status: 'Successfully logged Out'})
        res.redirect('/');
    } else {
        const err = new Error('You are not logged in')
        err.status = 401;
        return next(err);
    }
})

// userRouter.route('/signup')
// .post((req, res, next) => {
//     console.log('got into signup mode')
//     const { firstName, lastName, userName, password} = req.body

//     const newUser = new User({
//         firstName, 
//         lastName, 
//         userName,
//         password
//     })
//     newUser.save()
//     .then(user => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json')
//         res.json(user)
//     })
//     .catch( err => next(err))

// })

module.exports = userRouter;