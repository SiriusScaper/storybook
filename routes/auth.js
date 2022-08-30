const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc Auth with Google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile'] }));

// @desc   Google Auth callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), (req, res) => {
  res.redirect('/dashboard')
});


//@deesc Logout User
//@route /auth/logout
//!Change: Passport 0.6 requires logout to be async
router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) {return next(err)}
    res.redirect('/')
  })
})

module.exports = router