var menu_button = document.getElementById("user");
var active = true;

function activate_menu() {
    if (active){
        active = false;
        document.getElementById("menu").style.display = "block";
        document.getElementById("account").style.display = "none"
        document.getElementById("icon_down").style.transform = "rotate(-90deg)"
    }
    else{
        active = true;
        document.getElementById("menu").style.display = "none";
        document.getElementById("account").style.display = "none"
        document.getElementById("icon_down").style.transform = "rotate(90deg)"
    }
}


// hover_account
function activate_account_out() {
    document.getElementById("account").style.display = "none"
}
function activate_account_over() {
    document.getElementById("account").style.display = "block"
}
menu_button.addEventListener("mouseover",activate_account_over);
menu_button.addEventListener("mouseout",activate_account_out);

menu_button.addEventListener("click",activate_menu);