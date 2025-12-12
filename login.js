





document.getElementById("login1").addEventListener("click",function(){
   event.preventDefault()
   let username=document.getElementById("input-fields-username").value;
   let pass=document.getElementById("input-fields-pass").value 

   let users=JSON.parse(localStorage.getItem("users"))
 

   if(V1()==true && V2()==true){
      window.location.replace("mainwebsite.html")
   }
   else 
      alert("check id and pass ")
   
   function V1(){
      if(users.find(u => u.username == username)){
         return true ;
      }
      else 
         return false;
         
   }
    function V2(){
      if(users.find(u => u.pass == pass)){
         return true ;
      }
      else 
         return false;  
   }




   
  
   
})

