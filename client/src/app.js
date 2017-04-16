var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');
var Team = require('./models/Team');

var cachedHtml = "";


var getCachedHtml = function(callback){

  fs.readFile('cacheData.html', 'utf8', function(err, data){
    if(err){
      throw err;
    } else {
      // console.log("html in first call: ", data) this checks out!
    }
    callback(data);

  });
}

var createJsonFromHtml = function(data){

  $ = cheerio.load(data, {
    ignoreWhitespace: true,

  });

  var teamsArray = [];

  $('tr').each(function(i, tr){
    var children = $(this).children();
    var team = {
      rank: children.eq(0).text(),
      name: children.eq(1).text(),
      p: children.eq(2).text(),
      hw: children.eq(3).text(),
      hd: children.eq(4).text(),
      hl: children.eq(5).text(),
      hf: children.eq(6).text(),
      ha: children.eq(7).text(),
      aw: children.eq(8).text(),
      ad: children.eq(9).text(),
      al: children.eq(10).text(),
      af: children.eq(11).text(),
      aa: children.eq(12).text(),
    };
    teamsArray.push(team);
  }); 

  console.log(teamsArray);

}

var app = function(){
  getCachedHtml(createJsonFromHtml);
}

app();



 //  //cheerio takes the returned html and parses it into a DOM
 //  $ = cheerio.load(tableData);

 //  var rowsAsStrings = [];

 //  $('table.league').children().each(function(index, element){
 //    var row = [];

 //    ($(this).children('td').each(function(index, element){
 //      for(var i = 0; i < 20; i++){
 //        row.push(element.i);        
 //      }
 //    }));
 //    rowsAsStrings.push(row);
 //  }).get();

 //  rowsAsStrings.splice(0, 2);




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


  // need to regex(?!) team names
  // or manipulate dom a little more skillfully?




