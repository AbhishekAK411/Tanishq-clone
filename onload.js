window.onload = function (){
    var tanishq_currentUser = JSON.parse(localStorage.getItem("tanishq_current_user"));
    console.log(tanishq_currentUser);

    if(!!tanishq_currentUser){
        var tanishq_div = document.getElementById("tanishq_current_user");
        var removeTag = document.getElementById("remove_tag");
        removeTag.remove();
        var logout_div = document.getElementById("logout");

        var p = document.createElement("p");
        p.innerText = tanishq_currentUser.userEmail;
        tanishq_div.append(p);

        var button = `<button class="logout_button" onclick="tanishq_logout()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#913f40" viewBox="0 0 256 256"><path d="M216,128l-40,40V88Z" opacity="0.2"></path><path d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-82.34-40,40A8,8,0,0,1,168,168V136H104a8,8,0,0,1,0-16h64V88a8,8,0,0,1,13.66-5.66l40,40A8,8,0,0,1,221.66,133.66Zm-17-5.66L184,107.31v41.38Z"></path></svg> <p class="logout-style">logout</p></button>`;
        logout_div.innerHTML = button;

    } else {
        alert("Current User absent");
    }
    
}

function tanishq_logout(){
    
    localStorage.removeItem("tanishq_current_user");
    window.location.reload();

}