import Posts from './posts';

const displayPosts = (posts) => {
  let output = '';
  posts.forEach((post) => {
    output += `<li>${post.title}</li>`
  });
  document.getElementById('posts').innerHTML = output;
};

async function renderPosts() {
  const posts = await Posts.getPosts();
  displayPosts(posts);
}

async function addPost() {
  const titleDOM = document.getElementById('title');
  const contentDOM = document.getElementById('content')

  const title = titleDOM.value;
  const content = contentDOM.value;

  await Posts.setPost({ title, content });
  await renderPosts();
  titleDOM.value = '';
  contentDOM.value = '';
};

renderPosts();
document.getElementById('add-post').addEventListener('click', addPost);
