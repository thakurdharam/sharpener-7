const posts = [
    { title: "Post One", body: "This is post one", createdAt: new Date() },
    { title: "Post Two", body: "This is post two", createdAt: new Date() },
  ];
  
  var updateLastUserActivityTime = new Date();
  console.log("Last active user " + updateLastUserActivityTime);
  
  function getPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let output = "";
        let timestamp = updateLastUserActivityTime =  new Date();
        posts.forEach((post) => {
          output += `<li>${post.title}  created ${Math.floor(
            (timestamp - post.createdAt) / 1000
          )} seconds ago </li>`;
        });
        let error = posts.length == 0 ? true : false;
        if (!error) {
          resolve(updateLastUserActivityTime);
        } else {
          output = `<h1>No Post to delete</h1>`;
          reject(updateLastUserActivityTime);
        }
        document.body.innerHTML = output;
      }, 1000);
    });
  }
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        updateLastUserActivityTime = new Date();
        post.createdAt = new Date();
        posts.push(post);
        resolve();
      }, 1000);
    });
  }
  
  function deletePost() {
    posts.pop();
  }
  
  // function create4thPost(post, callback) {
  //   setTimeout(() => {
  //     callback(post, getPosts);
  //   }, 3000);
  // }
  
  createPost({
    title: "Post Three",
    body: "This is post three",
    createdAt: new Date(),
  })
    .then(getPosts)
    .then(deletePost)
    .then(getPosts)
    .then(deletePost)
    .then(getPosts)
    .then(deletePost)
    .then(getPosts);