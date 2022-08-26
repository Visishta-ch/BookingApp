

document.getElementById('my-form').addEventListener('submit', function(e)
{
    e.preventDefault();
    var expenseAmount = document.getElementById('amount').value.trim();
    var description = document.getElementById('description').value.trim();
    var category = document.getElementById('category').value.trim();

    var entries = {
        amount: expenseAmount,
        description : description,
        category: category
    };
    axios.post("https://crudcrud.com/api/41d81820b65149559ffe7c307b4cf439/expenses", entries)
    .then((response) => {
        console.log(response.data)
       displayEntries(response.data)
    })
    .catch((err)=>{
       document.body.innerHTML = document.body.innerHTML +"<h3> Oops!!! Something went wrong</h3>";
    })

  

});

window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
   
    axios.get('https://crudcrud.com/api/41d81820b65149559ffe7c307b4cf439/expenses')
        .then((response) => {

            for(var i = 0;i <= response.data.length; i++) {
                displayEntries(response.data[i])
            }
        })
        .catch((err)=>{
            console.log(err)
        })
});



function displayEntries(entry){
    document.getElementById('amount').value.trim();
    document.getElementById('description').value.trim();
    document.getElementById('category').value.trim();  

    if(localStorage.getItem(entry.amount) !== null){
        removeUserFromScreen(entry.amount)
    }

    const parentNode = document.getElementById('items');
    const childHTML = `<li id = ${entry._id}> ${entry.amount} - ${entry.description} - ${entry.category} 
                            <button onclick = deleteUser('${entry._id}')> Delete Expense </button> 
                            <button onclick = editUserDetails('${entry.amount}','${entry.description}','${entry._id}')> Edit Expense </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUserDetails(amount, description,entry_id) {
    document.getElementById('amount').value = amount;
    document.getElementById('description').value = description;
    ///document.getElementById('category').value = category;
    deleteUser(entry_id)

 }
 function deleteUser(entry_id) {
    

    axios.delete(`https://crudcrud.com/api/41d81820b65149559ffe7c307b4cf439/expenses/${entry_id}`)
        .then((response) => console.log("User entry is deleted succefully"+ response))
        .catch((error) => console.log(error))
        removeUserFromScreen(entry_id);
    

}
function removeUserFromScreen(amount){

    
    const parentNode = document.getElementById('items');
    const childNodeToBeDeleted = document.getElementById(amount);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}