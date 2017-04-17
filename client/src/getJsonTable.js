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
    var options = {
      rank: children.eq(0).text(),
      name: children.eq(1).text(),
      p: children.eq(2).text(),
      ow: children.eq(3).text(),
      od: children.eq(4).text(),
      ol: children.eq(5).text(),
      of: children.eq(6).text(),
      oa: children.eq(7).text(),
      hw: children.eq(8).text(),
      hd: children.eq(9).text(),
      hl: children.eq(10).text(),
      hf: children.eq(11).text(),
      ha: children.eq(12).text(),
      aw: children.eq(13).text(),
      ad: children.eq(14).text(),
      al: children.eq(15).text(),
      af: children.eq(16).text(),
      aa: children.eq(17).text(),
      gd: children.eq(18).text(),
      pts: children.eq(19).text(),
    };
    var team = new Team(options);
    teamsArray.push(team);
  }); 

  teamsArray = teamsArray.splice(2, 12);
  console.log(teamsArray);

  fs.writeFile(path.join('leagueTable.json'), JSON.stringify(teamsArray), function(error){
    if(error){
      console.log("Error: " + error);
    } else {
      console.log('Successful write!');
    };
  });

}

var app = function(){
  getCachedHtml(createJsonFromHtml);
}

app();
