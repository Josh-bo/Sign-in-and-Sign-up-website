var details = JSON.parse(localStorage.getItem('localjosh'))
console.log(details)

function submit2(){
    var userEmail = signInEmail.value;
    var userPass = signInPass.value;
    var found = false

    for (let index = 0; index < details.length; index++) {
        if(details[index].email == userEmail && details[index].password == userPass){
            found = true
        }
    }

    if(found == true){
        // alert("correct")
        window.location.href = 'dashboard.html'
    }else{
        alert("Incorrect")
    }

    
}