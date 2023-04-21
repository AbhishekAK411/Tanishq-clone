window.onload = function (){
    var tanishq_currentUser = JSON.parse(localStorage.getItem("tanishq_current_user"));
    console.log(tanishq_currentUser);

    if(tanishq_currentUser){
        var tanishq_div = document.getElementById("tanishq_current_user");
        var removeTag = document.getElementById("remove_tag");
        removeTag.remove();

        var p = document.createElement("p");
        p.innerText = tanishq_currentUser.userEmail;
        tanishq_div.append(p);
    } else {
        alert("Current User absent");
    }
    
}