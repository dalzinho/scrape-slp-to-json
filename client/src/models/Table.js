var Table = function(){
  this.teams = [];

}

Table.prototype = {
  addTeam: function(team){
    this.teams.push(team);

    this.setAverages();
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
  }
}


module.exports = Table;