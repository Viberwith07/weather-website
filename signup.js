let registerEL=document.getElementById("submit")
let loginEl=document.getElementById("login")
let headEl=document.getElementById("sign-up")
let formEl=document.getElementsByClassName("input-fields-box")
let form1El=document.getElementById("form1")

    
 




registerEL.addEventListener("click",function(){
    
    let username=document.getElementById("input-fields-username").value;
    let phn=document.getElementById("input-fields-phn").value;
    let cpass=document.getElementById("input-fields-cpass").value;
    let pass=document.getElementById("input-fields-pass").value;
    console.log(pass)
    console.log(phn)

    function  Valid2(){
        return /^[A-Za-z0-9]+$/.test(username)
    }
    function Valid1(){
        return /^\d{10}$/.test(phn);
    }

    function Valid3(){
        return /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]+$/.test(pass);
    }

    if(Valid2()==false){
        alert("username to conatin only alphabets and numbers no spaces")

    }


    else if (Valid1()==false){
        alert("the number enterted is incorrect, tip: no country code is needed")}
     else if (cpass != pass){
        alert("password does not match")}

    else if(Valid3()==false){

        alert("pass cannot have spaces:")  
    }   
    if (Valid1()==true && Valid2()==true && Valid3()==true){
        event.preventDefault()
        let users=JSON.parse(localStorage.getItem("users")) || [];

        if (users.find(u => u.username == username)){
            event.preventDefault()
            alert("user already exists try a diffcombination")
            return;
        }
         if (users.find(u => u.phn == phn)){
            event.preventDefault()
            alert("user already exists try a diffcombination")
            return;
        }
    
        users.push({username, pass , phn })
        localStorage.setItem("users", JSON.stringify(users))
        
        alert("registration successful, click login to continue")
        console.log(1)

       
    
}
    } 


    
)
console.log(document.getElementById("input-fields-username").value)
