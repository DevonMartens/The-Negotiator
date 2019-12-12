// Dependencies
// =============================================================
var express = require("express")
var path = require("path");
var router = express.Router();
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(router) {

  // Each of the below routes ust handles the HTML page that the user gets sent to.

  // 
  router.get("/application", isAuthenticated, function(req,res) {
    console.log(req.params)
    res.sendFile(path.join(__dirname, "../public/application2.html"))
  });

  router.get("/service", isAuthenticated, function(req,res) {
    res.sendFile(path.join(__dirname, "../public/commonpage.html"))
  });

  router.get("/profile", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"))
  })

  router.get("/view_application", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/individualApp.html"))
  })


  router.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/member");
    }
    res.sendFile(path.join(__dirname, "../public/index1.html"));
  });
  

  router.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/member");
    }
    res.sendFile(path.join(__dirname, "../public/business.html"));
  });

  
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  router.get("/member", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile2.html"));
  });

};