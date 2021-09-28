var makeHulaDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.style();
};

makeHulaDancer.prototype = Object.create(makeDancer.prototype);
makeHulaDancer.prototype.constructor = makeHulaDancer;

makeHulaDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step\
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};

makeHulaDancer.prototype.style = function () {
  // var styleSettings = {
  //   "color": "black",
  //   "border-left": "20px solid black",
  //   "border-top": "100px solid black",
  //   "position": "absolute"
  // };
  // for (var key in styleSettings) {
  //   this.$node.css(key, styleSettings[key]);
  // }
  this.$node.attr('class', 'hulaDancer');
}