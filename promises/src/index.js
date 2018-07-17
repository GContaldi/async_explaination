import Posts from './posts';

const displayPosts = (posts) => {
  let output = '';
  posts.forEach((post) => {
    output += `<li>${post.title}</li>`
  });
  document.getElementById('posts').innerHTML = output;
};

const addPost = () => {
  const titleDOM = document.getElementById('title');
  const contentDOM = document.getElementById('content')

  const title = titleDOM.value;
  const content = contentDOM.value;

  Posts.setPost({ title, content })
    .then(Posts.getPosts)
    .then(displayPosts)
    .then(() => {
      titleDOM.value = '';
      contentDOM.value = '';
    });
};

Posts.getPosts().then(displayPosts);
document.getElementById('add-post').addEventListener('click', addPost);
