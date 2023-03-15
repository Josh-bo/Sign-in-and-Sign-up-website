var josh = []

function submit(){
    if(fname.value == "" || lname.value == "" || mail.value == "" || pass.value == "" ){
        alert("Please fill in the form correctly !!! ")
    }else{
    var alldetails = {
        firstname : fname.value,
        lastname : lname.value,
        email : mail.value,
        password : pass.value,
    }

    if(localStorage.getItem('localjosh')){
            var newJosh = JSON.parse(localStorage.getItem('localjosh'))
            newJosh.push(alldetails)
            localStorage.setItem('localjosh', JSON.stringify(newJosh))
        }else{
            josh.push(alldetails)
            localStorage.setItem('localjosh', JSON.stringify(josh))
    }
         window.location.href = 'index2.html'
}
}


