var request = require('request');
var cheerio = require('cheerio');
var Team = require('./models/Team');


var app = function(){

request('http://www.nonleaguematters.co.uk/divisions/162/', function(err, res, html){
  // request sends off to get the raw html for the page
    console.log('Error', err);

  

  //cheerio takes the returned html and parses it into a DOM
  $ = cheerio.load(html, {
    ignoreWhitespace: true,
  });

  var rowsAsStrings = [];

  $('table.league').children().each(function(index, element){
    rowsAsStrings.push($(this).children().text());
  }).get();

  rowsAsStrings.splice(0, 2);

  // at this stage, it returns 12 strings but with no spaces!!!! gaaaahhH!!!!






  

  // rowsAsArrays = [];
  // rowsAsStrings.forEach(function(row){
  //   newArray = row.split(' ');
  //   newArray.splice(0,1);
  //   rowsAsArrays.push(newArray);
  // });

  // var teamJson = [];

  // rowsAsArrays.forEach(function(row){
  //   var team = new Team(row);
  //   teamJson.push(team);
  // });

  console.log(rowsAsStrings);

  // need to regex(?!) team names
  // or manipulate dom a little more skillfully?

  });
}


app();