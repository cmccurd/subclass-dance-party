var makeBreakDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 0);
  this.style();
};

makeBreakDancer.prototype = Object.create(makeDancer.prototype);
makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step\
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
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
