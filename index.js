function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Validation
function validation() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var mail = document.getElementById("mail").value.trim();
    var mno = document.getElementById("mno").value.trim();
    var message = document.getElementById("message").value.trim();

    document.getElementById("name").style.borderColor = 'black';
    document.getElementById("mail").style.borderColor = 'black';
    document.getElementById("mno").style.borderColor = 'black';
    document.getElementById("message").style.borderColor = 'black';

    if(fname === "")
    {
        document.getElementById("fname").style.borderColor = 'red';
        alert("Please Enter Your First Name !");
        return false;
    }
    else if(lname==="")
    {
        document.getElementById("lname").style.borderColor = 'red';
        alert("Please Enter Your Last Name !");
        return false;
    }
    else if(mail === "")
    {
        document.getElementById("mail").style.borderColor = 'red';
        alert("Please Enter Your Email !");
        return false;
    } 
    
    
    else if(!mail.match(validRegex))
    {
        document.getElementById("mail").style.borderColor = 'red';
        alert("Please Enter a valid Email Address !");
        return false;
    } 
    else if (mno === ""){
        document.getElementById("mno").style.borderColor = 'red';
        alert("Please Enter Your Phone Number !");
        return false;
    }
     else if (!/^\d+$/.test(mno)) {
        document.getElementById("mno").style.borderColor = 'red';
            alert("Phone number should contain only digits !");
             return false;
    } 
    else if (mno.length != 10) 
        {
        document.getElementById("mno").style.borderColor = 'red';
        alert("Phone number should be 10 digits long !");
        return false;
    } 
    else if (message === "") 
        {
        document.getElementById("message").style.borderColor = 'red';
        alert("Please enter your Message !");
        return false;
        } 
    else {
        alert("Message Sent Successfully");
        document.getElementById("name").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("mno").value = "";
        document.getElementById("message").value = "";
        return true;
        }
}