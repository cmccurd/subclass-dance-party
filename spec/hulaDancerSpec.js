describe('hulaDancer', function() {

  var hulaDancer, clock;
  var timeBetweenSteps = 100; //CHANGE

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hulaDancer = new makeHulaDancer(10, 20, timeBetweenSteps); //CHANGE
  });

  it('should have a jQuery $node object', function() {

    expect(hulaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node move side to side', function() {
    sinon.spy(hulaDancer.$node, 'animate');
    hulaDancer.step();
    expect(hulaDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(hulaDancer, 'step');
      expect(hulaDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(hulaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(hulaDancer.step.callCount).to.be.equal(2);
    });
  });
});
