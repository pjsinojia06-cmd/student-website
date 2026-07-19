function SubmitForm()
{
    let Fname=document.getElementById("Fname").value;
        if(Fname==="")
    {
        alert("Please Enter Your First Name!!!");
        return false;
    }

    let Mname=document.getElementById("Mname").value;
        if(Mname==="")
    {
        alert("Please Enter Your Middle Name!!!");
        return false;
    }
    let Lname=document.getElementById("Lname").value;
        if(Lname==="")
    {
        alert("Please Enter Your Last Name!!!");
        return false;
    }
    let password=document.getElementById("password").value;
    if(password.length=="0")
    {
        alert("Please Enter Password First!!!");
        return false;
    }
    if(password.length<6)
    {
        alert("Password must be of 6 characters");
        return false;
    }
    let date=document.getElementById("date").value;
        if(date==="")
    {
        alert("Please choose Date!!!");
        return false;
    }
    let email=document.getElementById("email").value;
    if(email==="")
    {
        alert("Please Enter Your Email!!!");
        return false;
    }
    let phone=document.getElementById("phone").value;
    if(phone.length!="10")
    {
        alert("Please Enter Valid Phone Number!!!");
        return false;
    }
    alert("Form Submitted Successfully!!!");
    return true;
}
function goBack(){
    let items=document.getElementById("items1").value;
    let quantity=document.getElementById("quantity").value;
    if(items==="select Items")
    {
        alert("Please Select Items to Order!!!");
        return false;
    }
    if(quantity === "" || isNaN(quantity) || Number(quantity) <= 0)
    {
        alert("Please Enter Quantity to Order!!!");
        return false;
    }
    return true;
}
function submitted()
{
    let items=document.getElementById("items").value;
        if(items==="select Items")
    {
        alert("Please Enter Order Item Names!!!");
        return false;
    }
    let quantity=document.getElementById("quantity").value;
        if(quantity==="")
    {
        alert("Please Enter Quantity!!!");
        return false;
    }
    alert("Ordered Successfully!!!");
}