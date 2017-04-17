var assert = require('assert');
var Table = require('../Table');
var Team = require('../Team');

describe('table', function(){

  var table;
  var team;

  beforeEach(function(){
    table = new Table();
    
    team1 = new Team({
      p: 5,
      pts: 15,
      gd: 10,
      ol: 0,
      od: 0
    });

    team2 = new Team({
      p: 6,
      pts: 6,
      gd: 0,
      ol: 0,
      od: 6
    });

  });

  it('instantiates empty', function(){
    assert.equal(table.teams.length, 0);
  });

  it('can add teams', function(){
    table.addTeam(team1);
    assert.equal(table.teams.length, 1);
  });

  it('can calculate average ppg', function(){
    table.addTeam(team1);
    table.addTeam(team2);
    table.setAveragePPG();
    assert.equal(table.avPPG, 2);
  });

  it('can calculate average gdpg', function(){
    table.addTeam(team1);
    table.addTeam(team2);
    table.setAverageGDPG();
    assert.equal(table.avGDPG, 1);
  });

  it('can calculate average possible', function(){
    table.addTeam(team1);
    table.addTeam(team2);
    table.setAveragePoss();
    assert.equal(table.avPoss, 63);
  });

  it('automatically sets averages when team is added', function(){
    table.addTeam(team1);
    assert.equal(table.avPPG, 3);
    assert.equal(table.avGDPG, 2);
    assert.equal(table.avPoss, 66);
  });

  it('can get stdev of ppg');

  it('can get stdev of gdpg');

  it('can get stdev of possible');

  it('can set the score variable of held teams');


})