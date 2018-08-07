import displayPosts from '../src/index';

describe('simple feature', () => {
  it('suceeds!', () => {
    displayPosts();
    expect(true).to.be.true;
  });
});
