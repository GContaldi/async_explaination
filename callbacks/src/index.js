import Posts from './posts';

const displayPosts = (callback) => {
  Posts.getPosts(function(posts) {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    });
    document.getElementById('posts').innerHTML = output;
    if (callback) { callback(posts) };
  });
};

const addPost = () => {
  const titleDOM = document.getElementById('title');
  const contentDOM = document.getElementById('content')

  const title = titleDOM.value;
  const content = contentDOM.value;

  Posts.setPost({ title, content }, function() {
    displayPosts(() => {
      titleDOM.value = '';
      contentDOM.value = '';
    });
  });
};


displayPosts();
document.getElementById('add-post').addEventListener('click', addPost);
