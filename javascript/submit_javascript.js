function submit_by_id() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var message = document.getElementById("message").value;
    var country = document.getElementById("country").value;

    if (validation()) {
        document.getElementById("form_id").submit();
        alert("Name : " + name +
            " \n Email : " + email +
            " \nTelephone:" + telephone +
            " \nCountry:" + country +
            " \nMessage:" + message +
            " \n" +
            " Form Submitted Successfully." +
            " \nThanks your message"
        );
    }
}

function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var message = document.getElementById("message").value;
    var country = document.getElementById("country").value;
    var emailReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (name === '' || telephone === '' || message === '' || email === '' || country === '') {
        alert("Please fill all fields!");
        return false;
    } else if (!(email).match(emailReg)) {
        alert("Invalid Email!");
        return false;
    } else {
        return true;
    }
}