showncomment();
console.log('Hello');
//If user add a comment,add it to localstorage
let cmtbtn = document.getElementById('cmtbtn');
cmtbtn.addEventListener('click', function (e) {
    let addName = document.getElementById('addName');
    let addCmt = document.getElementById('addCmt')
    let Cmnt = localStorage.getItem("Cmnt");
    if (Cmnt == null) {
        CmntObj = [];
    }
    else {
        CmntObj = JSON.parse(Cmnt);
    }
    let myCmt = {
        Name: addName.value,
        Comnt: addCmt.value
    }
    CmntObj.push(myCmt);
    localStorage.setItem("Cmnt", JSON.stringify(CmntObj));
    addName.value = "";
    addCmt.value = "";

    showncomment();
})

//Function to display the notes content in the card
function showncomment() {
    let Cmnt = localStorage.getItem("Cmnt");
    if (Cmnt == null) {
        CmntObj = [];
    } else {
        CmntObj = JSON.parse(Cmnt);
    }
    let html = "";
    CmntObj.forEach(function (element, index) {
        html += `
        <div class="cmt-card">
            <h4 id="head4"><i class="fas fa-user-alt"></i>${element.Name}</h4>
            <p class="cmt-text">${element.Comnt}</p>
        </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (CmntObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<div class="show"> Nothing to show! Use " Comments" section above to add a Comment.</div>`;
    }
}




function validateForm(){
    var name=document.myform.name.value;
    var email=document.myform.email.value;
    var number=document.myform.number.value;
    var city=document.myform.city.value;
    var pincode=document.myform.pincode.value;

    if(name=="" || name==null){
        alert('Enter Name');
        return false;
    }
    else if(email=="" || email==null){
        alert('Enter Email');
        return false;
    }
    else if(number=="" || number==null){
        alert('Enter Number');
        return false;
    }
    else if(number.length<10){
        alert('Number must be of 10 Digit');
        return false;
    }
    else if(city=="" || city==null){
        alert('Enter City');
        return false;
    }
    else if(pincode=="" || pincode==null){
        alert('Enter Pincode');
        return false;
    }
    else if(pincode.length<6){
        alert('Number must be of 6 Digit');
        return false;
    }
    else if(pincode.length>6){
        alert('Number must be of 6 Digit');
        return false;
    }
    return true;
    
}