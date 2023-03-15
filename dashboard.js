var local = JSON.parse(localStorage.getItem('localjosh'))
console.log(local)
for (let index = 0; index < local.length; index++) {
    console.log(local)    

    display.innerHTML += `
    <tr>
       <td>${index+1}</td>
       <td>${local[index].firstname}</td>
       <td>${local[index].lastname}</td>
       <td>${local[index].email}</td>
       <td>${local[index].password}</td>
       <td>
        <button class="btn btn-warning" onclick="editList()">EDIT</button>
        <button class="btn btn-danger" onclick="del()">DELETE</button></button>
       </td>
   </tr>` 
}

function del(){
    for (let index = 0; index < local.length; index++) {

    }
    
    // alert("I dey work")
}