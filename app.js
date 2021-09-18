const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

// Profile data, temporary data structure before DB
const founder_0 = {
  firstName: "Abby",
  lastName: "Martinez",
  roleDescription: "Set director, video editor, digital artist, dancer, and musician",
  imageIcon:  "116052386_3438730462839038_4068439202214887892_n.png",
  imageMain: "116052386_3438730462839038_4068439202214887892_n.jpg"

}

const founder_1 = {
  firstName: "Kelsie",
  lastName: "Donato",
  roleDescription: "Graphic designer, web designer, photographer",
  imageIcon: "60827481_2344900788887102_4550298188304613376_n.png",
  imageMain: "60827481_2344900788887102_4550298188304613376_n.jpg"
}

const founder_2 = {
  firstName: "Tim",
  lastName: "Bingtan",
  roleDescription: "Videographer, web designer",
  imageIcon:  "68739003_2944615905555588_7125668434204950528_o.png",
  imageMain: "68739003_2944615905555588_7125668434204950528_o.jpg"
}

const artist_0 = {
  firstName: "Jaime",
  lastName: "Suwa",
  roleDescription: "Dancer",
  imageIcon:  "159288604_3877491042314005_7517169641318779166_o.png",
  imageMain: "159288604_3877491042314005_7517169641318779166_o.jpg"
}

let founders = [founder_0, founder_1, founder_2];
let artists = [artist_0];

app.get("/", function(req,res){
  const homePageType = true;
  const title = "FINEAPPLE STUDIOS";
  res.render("home", {title: title, homePageType: homePageType, founders: founders, artists: artists});
});

app.get("/shop", function(req,res){
  const homePageType = false;
  const title = "FINEAPPLE MERCH";
  res.render("shop", {title: title, homePageType: homePageType});
})

// Fix routing of stylesheet
    // Either fix route for member or adjust route at header. Or both?

app.get("/founder-profile/:member", function(req, res){
  const homePageType = false;
  const name = req.params.member;
  const memberProfile = founders.find(founder => name == founder.firstName);
  console.log(memberProfile);
  const title = memberProfile.firstName + " " + memberProfile.lastName;
  res.render("profile", {title: title, homePageType: homePageType, memberProfile: memberProfile});
});

app.get("/artist-profile/:member", function(req, res){
  const homePageType = false;
  const name = req.params.member;
  const memberProfile = artists.find(artist => name == artist.firstName);
  console.log(memberProfile);
  const title = memberProfile.firstName + " " + memberProfile.lastName;
  res.render("profile", {title: title, homePageType: homePageType, memberProfile: memberProfile});
});



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(){
  console.log("Server started on port 3000");
});
