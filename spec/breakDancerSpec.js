describe('breakDancer', function() {

  var breakDancer, clock;
  var timeBetweenSteps = 100; //CHANGE

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    breakDancer = new makeBreakDancer(10, 20, timeBetweenSteps); //CHANGE
  });

  it('should have a jQuery $node object', function() {

    expect(breakDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node move up and down', function() {
    sinon.spy(breakDancer.$node, 'animate');
    breakDancer.step();
    expect(breakDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(breakDancer, 'step');
      expect(breakDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(breakDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(breakDancer.step.callCount).to.be.equal(2);
    });
  });
});
