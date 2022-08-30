var userlog = document.getElementById('users');

var submit = document.getElementById('my-form').addEventListener('submit', function (e) {
  e.preventDefault();

  /*network call */
  var username = document.getElementById('name').value.trim();
  var usermail = document.getElementById('email').value.trim();
  var userDetail = {
    name: username,
    email: usermail,
  };

  axios
    .post(
      'https://crudcrud.com/api/e8c5f651f6c14ba68b9e0af3a646f52d/user',
      userDetail
    )
    .then((response) => {
      displayList(response.data); /*displaying the user details onto screen */
      console.log(response);
    })
    .catch((err) => console.log(err));
  //   displayList(userDetail);
  document.getElementById('my-form').reset();
  document.getElementById('name').focus();
});
window.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  axios
    .get(
      'https://crudcrud.com/api/e8c5f651f6c14ba68b9e0af3a646f52d/user'
    )
    .then((response) => {
      console.log(response);
      for (var i = 0; i < response.data.length; i++) {
        displayList(response.data[i]);
      }
    })
    .catch((err) => console.log(err));
});

function displayList(user) {
  document.getElementById('name').value.trim();
  document.getElementById('email').value.trim();

  

  const parentNode = document.getElementById('users');
  const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user._id}')> Delete User </button> 
                            <button onclick=editUserDetails('${user._id}','${user.name}','${user.email}')> Edit User </button>
                         </li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUserDetails(user_id, name, email) {
  document.getElementById('name').value = name;
  document.getElementById('email').value = email;
  deleteUser(user_id);

  // userDetail = {
  //    name : name,
  //    email : email,
  // };

  // axios
  //   .put(
  //     `https://crudcrud.com/api/e8c5f651f6c14ba68b9e0af3a646f52d/user/${user_id}`,
  //     {
  //       userDetail,
  //     }
  //   )
  //   .then((response) => {
  //     console.log('update details' + response);
     
        
  
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
 
}
function deleteUser(user_id) {
  axios
    .delete(
      `https://crudcrud.com/api/e8c5f651f6c14ba68b9e0af3a646f52d/user/${user_id}`
    )
    .then((response) => console.log('User deleted succefully' + response))
    .catch((error) => console.log(error));
  removeUserFromScreen(user_id);
}
function removeUserFromScreen(name) {
  const parentNode = document.getElementById('users');
  const childNodeToBeDeleted = document.getElementById(name);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
}