var userlog = document.getElementById('users');

document.getElementById('my-form').addEventListener('submit', function (e) {
  e.preventDefault(); 
  
   /*network call */
  var username = document.getElementById('name').value.trim();
  var usermail = document.getElementById('email').value.trim();
  var userDetail = {
    name: username,
    email: usermail,
  };
  

  axios.post('https://crudcrud.com/api/1632105e7d2b4934b28257789fabe071/bookingDetails',userDetail)
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
    axios.get("https://crudcrud.com/api/1632105e7d2b4934b28257789fabe071/bookingDetails")
        .then((response) => {
            console.log(response);
            for(var i=0;i<response.data.length;i++){
                displayList(response.data[i]);
            }
        })
        .catch((err) => console.log(err));
  
  });

function displayList(user) {
    document.getElementById('name').value.trim();
    document.getElementById('email').value.trim();  

    if(localStorage.getItem(user.name) !== null){
        removeUserFromScreen(user.name)
    }

    const parentNode = document.getElementById('users');
    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user._id}')> Delete User </button> 
                            <button onclick=editUserDetails('${user.name}','${user.email}','${user._id}')> Edit User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUserDetails(name,email,user_id) {
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    deleteUser(user_id)

 }
 function deleteUser(user_id) {
    

    axios.delete(`https://crudcrud.com/api/1632105e7d2b4934b28257789fabe071/bookingDetails/${user_id}`)
        .then((response) => console.log("User deleted succefully"+ response))
        .catch((error) => console.log(error))
        removeUserFromScreen(user_id);
    

}
function removeUserFromScreen(name){

    
    const parentNode = document.getElementById('users');
    const childNodeToBeDeleted = document.getElementById(name);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}