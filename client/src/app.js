var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');
var Team = require('./models/Team');

var cachedHtml = "";


var getCachedHtml = function(callback){
  console.log('requesting cache data');

  fs.readFile('cacheData.html', 'utf8', function(err, data){
    if(err){
      throw err;
    } else {
      // console.log("html in first call: ", data) this checks out!
      console.log('data read: ' + data.slice(0,200) + '...');
    }
    callback(data);

  });
}

var createJsonFromHtml = function(data){
  console.log('entering callback. i still have some data, look: ' + data.slice(0,100) + '...');
  $ = cheerio.load(data, {
    ignoreWhitespace: true,
    xmlMode: true
  });

  var tr = [];
  $('tr').each(function(i, elem){
    tr[i] = $(this).text();
  })

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




