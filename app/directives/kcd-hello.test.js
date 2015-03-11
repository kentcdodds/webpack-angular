export default ngModule => {
  describe('kcd-hello', () => {
    beforeEach(window.module(ngModule.name));

    it(`should be properly tested`, () => {
      expect(true).to.be.false;
    });
  });
};
