var math = require('mathjs');

var Table = function(){
  this.teams = [];

}

Table.prototype = {
  addTeam: function(team){
    this.teams.push(team);

    this.setAverages();
    this.setSDevs();
  },

  setAveragePPG: function(){
    var totalPPG = 0;
    
    this.teams.forEach(function(team){
      totalPPG += parseFloat(team.ppg);
    });

    this.avPPG = totalPPG / this.teams.length;
  },

  setAverageGDPG: function(){
    var totalGDPG = 0;

    this.teams.forEach(function(team){
      totalGDPG += parseFloat(team.gdpg);
    });

    this.avGDPG = totalGDPG / this.teams.length;
  },

  setAveragePoss: function(){
    var totalPoss = 0;

    this.teams.forEach(function(team){
      totalPoss += parseFloat(team.poss);
    })

    this.avPoss = totalPoss / this.teams.length;
  },

  setAverages: function(){
    this.setAveragePPG();
    this.setAverageGDPG();
    this.setAveragePoss();
  },

  setSdPPG: function(){
    var ppg = this.teams.map(function(team){
      return team.ppg;
    })

    this.sdPPG = math.std(ppg).toFixed(3);
  },

  setSdGDPG: function(){
    var gdpg = this.teams.map(function(team){
      return team.gdpg;
    });
    this.sdGDPG = math.std(gdpg).toFixed(3);
  },

  setSdPoss: function(){
    var poss = this.teams.map(function(team){
      return team.poss;
    });
    this.sdPoss = math.std(poss).toFixed(3);
  },

  setSDevs: function(){
    this.setSdPPG();
    this.setSdGDPG();
    this.setSdPoss();
  },

  setScores: function(){
    this.teams.forEach(team){
      var ppgScore = (team.ppg - this.avPPG) / this.sdPPG;
      var gdpgScore = (team.gdpg - this.avPPG) / this.sdGDPG;
      var possScore = (team.poss - this.avPoss) / this.sdPoss;

      var standard = (ppgScore + gdpgScore + possScore) / 3;

      var teamScore = 500 + (200 * standard);
      team.setScore(teamScore);
    };
  }
}


module.exports = Table;