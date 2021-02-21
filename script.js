// 24-4 JSON, JSON Structure, parse, stringify, JSON properties
//convert JOSN.......... 
// const user = {id : 12, name:'jewel rana'};
// const userJSON = JSON.stringify(user);
// console.log(userJSON);

//convert object............... 
// const userFromJson = JSON.parse(userJSON);
// console.log(userFromJson);

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => displayUser(json))
//     .catch(err => console.log(err))

//   function displayUser(users){
//     const userName = users.map(user=> user.username);
//    const ul =   document.getElementById('user-container');

//     for (let i = 0; i < userName.length; i++) {
//         const user = userName[i];
//         const li = document.createElement("li");
//         li.innerText = user;
//         ul.appendChild(li);
//     }


//   }
document.getElementById("submitBtn").addEventListener('click' , function() {
    const input = document.getElementById('userInfo').value;
    const title = document.getElementById('titleInfo').value;
    const userInfo ={
        title: input,
        body: title,
      }
      newPostServer(userInfo);
    document.getElementById('user-container').innerHTML =
    userInfo.title + ' ' + userInfo.body;

})


function newPostServer(userInfo){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(userInfo),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch(err => alert('please try again later'))
  
}

