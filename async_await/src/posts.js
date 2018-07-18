const posts = [
  { title: 'Post One', body: 'This is the content of post one' },
  { title: 'Post Two', body: 'This is the content of post two' }
];

const getPosts = () => new Promise((resolve) => {
  setTimeout(() => resolve(posts), 1000)
});

const setPost = (post) => new Promise((resolve) => {
  setTimeout(() => {
    posts.push(post);
    resolve(post);
  }, 1500);
});

export default { setPost, getPosts };
