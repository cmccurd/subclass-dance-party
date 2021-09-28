describe('breakDancer', function() {

  var breakDancer, clock;
  var timeBetweenSteps = 100; //CHANGE

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBreakDancer(10, 20, timeBetweenSteps); //CHANGE
  });

  it('should have a jQuery $node object', function() {

    expect(lineDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(lineDancer.$node, 'toggle');
    lineDancer.step();
    expect(lineDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(lineDancer, 'step');
      expect(lineDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(lineDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(lineDancer.step.callCount).to.be.equal(2);
    });
  });
});
