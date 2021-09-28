var makeBreakDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.style();
};

makeBreakDancer.prototype = Object.create(makeDancer.prototype);
makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({marginTop: '-=30px'});
  this.$node.animate({marginTop: '+=30px'});

//this.$node.animate({left: '450px'});FOR clickingS

};

makeBreakDancer.prototype.style = function () {
  // var styleSettings = {
  //   "color": "black",
  //   "border-left": "20px solid black",
  //   "border-top": "100px solid black",
  //   "position": "absolute"
  // };
  // for (var key in styleSettings) {
  //   this.$node.css(key, styleSettings[key]);
  // }
  this.$node.attr('class', 'breakDancer');
}
