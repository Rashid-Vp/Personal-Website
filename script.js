function myFunction() {

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var em = document.getElementById("inputEmail4").value;

    if(document.getElementById("inputAddress").value.length == 0)
    {
        alert("Name can't be empty!")
    }else if(reg.test(em) == false)
    {
        alert('Invalid Email Address');
    }else {
        alert("Message Sent Successfully");
    }
  }
