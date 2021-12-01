function check() {
    let check_fname = document.getElementById("first_name").value;
    let check_lname = document.getElementById("last_name").value;
    let check_email = document.getElementById("email").value;
    let check_pw = document.getElementById("pass").value;
    let pattern_email =
        /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
    var pattern_pw = /((?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]).{6,30})/;
    if (
        check_fname.length == 0 &&
        check_lname.length == 0 &&
        check_email.length == 0 &&
        check_pw.length == 0
    ) {
        alert("Không được bỏ trống mục nào!");
        return false;
    } else {
        if (check_fname.length == 0) {
            document.getElementById("erfirst_name").innerHTML =
                "*Mời bạn nhâp First Name!";
            document.getElementById("first_name").style.border = "1px solid red";
            return false;
        } else {
            document.getElementById("erfirst_name").innerHTML = " ";
            document.getElementById("first_name").style.border = "1px solid green";
        }
        if (check_lname.length == 0) {
            document.getElementById("erlast_name").innerHTML =
                "*Mời bạn nhâp Last Name!";
            document.getElementById("last_name").style.border = "1px solid red";
            return false;
        } else {
            document.getElementById("erlast_name").innerHTML = " ";
            document.getElementById("last_name").style.border = "1px solid green";
        }
        if (check_email.length == 0) {
            document.getElementById("eremail").innerHTML = "*Mời bạn nhâp Email!";
            document.getElementById("email").style.border = "1px solid red";
            return false;
        } else if (!pattern_email.test(check_email)) {
            document.getElementById("eremail").innerHTML = "* VD: abcd@domin";
            document.getElementById("email").style.border = "1px solid red";
            return false;
        } else {
            document.getElementById("eremail").innerHTML = " ";
            document.getElementById("email").style.border = "1px solid green";
        }
        if (check_pw.length == 0) {
            document.getElementById("erpw").innerHTML = "*Mời bạn nhâp password!";
            document.getElementById("pass").style.border = "1px solid red";
            return false;
        } else if (!pattern_pw.test(check_pw)) {
            document.getElementById("pass").style.border = "1px solid red";
            document.getElementById("erpw").innerHTML = "*(6-32)ký tự thường,hoa,số";
            return false;
        } else {
            document.getElementById("erpw").innerHTML = " ";
            document.getElementById("pass").style.border = "1px solid green";
            alert("Đăng ký thành công!");
        }
    }
}