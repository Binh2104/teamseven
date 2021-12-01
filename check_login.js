function check() {
    let check_email = document.getElementById("email").value;
    let check_pw = document.getElementById("pass").value;
    var pattern_email =
        /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
    var pattern_pw = /((?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]).{6,30})/;
    if (check_email.length == 0 && check_pw.length == 0) {
        alert("Không được bỏ trống mục nào!");
        return false;
    }
    if (check_email.length == 0) {
        document.getElementById("eremail").innerHTML = "* Không được để trống!";
        document.getElementById("email").style.border = "1px solid red";
        return false;
    } else if (!pattern_email.test(check_email)) {
        document.getElementById("eremail").innerHTML =
            "* Sai định dạng Email hoặc User!";
        document.getElementById("email").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("eremail").innerHTML = " ";
        document.getElementById("email").style.border = "1px solid green";
    }
    if (check_pw.length == 0) {
        document.getElementById("erpw").innerHTML = "* Không được để trống!";
        document.getElementById("pass").style.border = "1px solid red";
        return false;
    } else if (!pattern_pw.test(check_pw)) {
        document.getElementById("pass").style.border = "1px solid red";
        document.getElementById("erpw").innerHTML = "*(6-32)ký tự thường,hoa,số!";
        return false;
    } else {
        document.getElementById("erpw").innerHTML = " ";
        document.getElementById("pass").style.border = "1px solid green";
    }
}