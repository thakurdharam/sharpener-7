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
      let timestamp = (updateLastUserActivityTime = new Date());
      posts.forEach((post) => {
        output += `<li>${post.title}</li>  created ${Math.floor(
          (timestamp - post.createdAt) / 1000
        )} seconds ago`;
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

async function createPost(post) {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      updateLastUserActivityTime = new Date();
      post.createdAt = new Date();
      posts.push(post);
      resolve(updateLastUserActivityTime);
    }, 1000);
  });
  let w = await p;
  console.log(w);
}

async function deletePost() {
  let p = new Promise((resolve, reject) => {
    updateLastUserActivityTime = new Date();
    if (posts.length == 0) {
      reject(updateLastUserActivityTime);
    } else {
      posts.pop();
      resolve(updateLastUserActivityTime);
    }
  });

  let r = await p;
  console.log(r);
}

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

// function create4thPost(post, callback) {
//   setTimeout(() => {
//     callback(post, getPosts);
//   }, 3000);
// }

// const promise1 = Promise.resolve("Hello");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "GoodBye!");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// create4thPost(
//   { title: "Post Four", body: "This is post four", createdAt: new Date() },
//   createPost
// );

// console.log(posts);

// var k = 10;
// while (k > 0) {
//   setInterval(() => {
//     getPosts();
//   }, 1000);
//   k--;
//   console.log(k);
// }
