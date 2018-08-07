import Posts from './posts';

const displayPosts = () => {
  Posts.getPosts(function(posts) {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    });
    document.getElementById('posts').innerHTML = output;
  });
};

displayPosts();

export default { displayPosts };
