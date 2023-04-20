function register(event){
    event.preventDefault();
    
    var t_email = document.getElementById("tanishq_email").value;
    var t_password = document.getElementById("tanishq_password").value;
    var t_confirmPassword = document.getElementById("tanishq_confirm_password").value;
    

    if(t_email && t_password && t_confirmPassword){
        if(t_password.length >= 8 && t_confirmPassword.length >=8){
            if(t_password == t_confirmPassword){
                var tanishq_storage = JSON.parse(localStorage.getItem("tanishq_users")) || [];
                var flag = false;

                for(var i=0;i<tanishq_storage.length;i++){
                    if(tanishq_storage[i].userEmail == t_email){
                        flag=true;
                    }
                }
                if(!flag){
                    var tanishq_user_data = {userEmail: t_email, userPassword: t_password, userConfirmPassword: t_confirmPassword};
                    tanishq_storage.push(tanishq_user_data);
                    localStorage.setItem("tanishq_users" , JSON.stringify(tanishq_storage));
                } else {
                    alert("email alread exists. Proceed to Login");
                    window.location.href = "./login.html";
                }
            } else {
                alert("Passwords do not match.")
            }
        } else {
            alert("Password should be 8 or more characters.");
        }
    } else {
        alert("All fields are mandatory.");
    }
}


function login(event){
    event.preventDefault();

    var t_login_email = document.getElementById("tanishq_login_email").value;
    var t_login_password = document.getElementById("tanishq_login_password").value;
    

    if(t_login_email && t_login_password){
        var tanishq_storage = JSON.parse(localStorage.getItem("tanishq_users"));
        var flagForCheck = false;
        var tanishq_current_user ={};
        for(var i=0;i<tanishq_storage.length;i++){
            if(tanishq_storage[i].userEmail == t_login_email && tanishq_storage[i].userPassword == t_login_password){
                flagForCheck=true;
                tanishq_current_user=tanishq_storage[i];
            }
        }

        if(flagForCheck){
            localStorage.setItem("tanishq_current_user", JSON.stringify(tanishq_current_user));
            window.location.href = "./home.html";
        } else {
            alert("Please check your credentials");
        }
    } else{
        alert("All Fields are Mandatory.")
    }
}