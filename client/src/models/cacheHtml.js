var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var path = require('path');

var cacheHtml = function(){
  request('http://www.nonleaguematters.co.uk/divisions/162/', function(err, res, html){

    if(err){
      console.log(err);
      return;
    }

    $ = cheerio.load(html);
    var leagueTable = $('table.league');

    fs.writeFile(path.join('cacheData.html'), leagueTable, function(error){
      if(error) {
        console.error('Error: ' + error);
      } else {
        console.log('Successful write to: ' + __dirname);
      }
    })
  });
}


cacheHtml();