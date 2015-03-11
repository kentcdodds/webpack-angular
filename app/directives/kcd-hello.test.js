export default ngModule => {
  describe(`kcd-hello`, () => {
    beforeEach(window.module(ngModule.name));

    it(`should test properly`, () => {
      expect(false).to.be.true;
    });
  });
};
