const posts = [
  { title: 'Post One', body: 'This is the content of post one' },
  { title: 'Post Two', body: 'This is the content of post two' }
];

const getPosts = (callback) => {
  setTimeout(() => callback(posts), 1000);
}

export default { getPosts };
