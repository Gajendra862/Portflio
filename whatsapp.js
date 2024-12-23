function sendToWhatsapp(){
    let number = "+919106561479";
    let fname =  document.getElementById("fname").value;
    let lname =  document.getElementById("lname").value;
    let email =  document.getElementById("email").value;
    let message =  document.getElementById("message").value;
    var url = "http://wa.me/" + number + "?text=" + "%0a"
    + "First Name : " + fname + "%0a"
    + "Last Name : " + lname + "%0a"
    + "Email : " + email + "%0a"
    + "Message : " + message; + "%0a%0a"

    window.open(url, "_blank");
}