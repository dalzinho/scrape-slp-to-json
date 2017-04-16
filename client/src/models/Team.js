var Team = function(options){
  this.rank = parseInt(options.rank);
  this.name = options.name;
  this.p = parseInt(options.p);
  this.ow = parseInt(options.ow);
  this.od = parseInt(options.od);
  this.ol = parseInt(options.ol);
  this.of = parseInt(options.of);
  this.oa = parseInt(options.oa);
  this.hw = parseInt(options.hw);
  this.hd = parseInt(options.hd);
  this.hl = parseInt(options.hl);
  this.hf = parseInt(options.hf);
  this.ha = parseInt(options.ha);
  this.hgd = "";
  this.hpts = "";
  this.aw = parseInt(options.aw);
  this.ad = parseInt(options.ad);
  this.al = parseInt(options.al);
  this.af = parseInt(options.af);
  this.aa = parseInt(options.aa);
  this.agd = "";
  this.apts = "";
  this.gd = parseInt(options.gd);
  this.pts = parseInt(options.pts);


  this.setGoalDifference();
  this.setPoints();
  this.setAverages();
};

Team.prototype = {


  setGoalDifference: function(){
    this.hgd = this.hf - this.ha;
    this.agd = this.af - this.aa;
  },

  setPoints: function(){
    this.hpts = (3*this.hw) + this.hd;
    this.apts = (3*this.aw) + this.ad;
  },

  setAverages: function(){
    this.ppg = (this.pts / this.p).toFixed(3);
    this.gdpg =  (this.gd / this.p).toFixed(3);
    this.poss = 66 - (3*this.ol) - this.od;
  }

}

module.exports = Team;

// var Team = function(rank, name, p, hw, hd, hl, hf, ha, aw, ad, al, af, aa){
