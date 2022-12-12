const posts = [
    { title : "Post 1", body : "This is Post 1", createdAt : new Date() },
    { title : "Post 2", body : "This is Post 2", createdAt : new Date() }
];

 function getpost(){
    setTimeout( () => {
        let output = "";
        let timeStamp = new Date();
        posts.forEach((post,i) =>{
            output+= `<li>${post.title} created ${Math.floor(
                (timeStamp-post.createdAt)/1000
        )} seconds ago </li> ` ;
        });
        document.body.innerHTML = output;
    }, 1000)
 }
 
 getpost();

 function createpost(post,callback){
    setTimeout(() => {
        post.createdAt = new Date();
        posts.push(post);
        callback();
    }, 2000);
 }

 function create4post(post,callback){
    setTimeout(() => {
        callback(post,getpost);
    }, 4000);
 }
 

 createpost({ title : "Post 3", body : "This is Post 3" ,createdAt : new Date()}, getpost);


 create4post({ title : "Post 4", body : "This is Post 4" , createdAt : new Date()}, createpost);

 var k = 10;
while (k > 0) {
  setInterval(() => {
    getpost();
  }, 1000);
  k--;
  console.log(k);
}