function validateForm(){
   let name = document.myform.name.value;
   let email=document.myform.email.value;
   let message=document.myform.message.value;

   if(name=="" || name==null){
       alert('Enter Name');
       return false;
   }
   else if(email==""){
       alert('Enter Email');
       return false;
   }
   else if(message==""){
        alert("Enter message")
   }
   else if(message.length<6){
       alert('Message must be at least 6 characters long.');
       return false;
   }

   return true;
}

