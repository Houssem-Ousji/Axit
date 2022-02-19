var menu_button = document.getElementById("menu_button");
var nav_menu = document.getElementById("nav_menu");

menu_button.onclick = () => 
{
    nav_menu.classList.toggle("active");
    console.log(nav_menu.classList);
}

document.onclick = (e) => {
    if (e.target.id !== "nav_menu" && e.target.id !== 'menu_button'){
        nav_menu.classList.remove("active");
    }
}

var tab1 = document.getElementById("ftab");
var tab2 = document.getElementById("stab");
var tab3 = document.getElementById("ltab");
var description = document.getElementsByClassName("desc_item");
tab1.onclick = () =>{
    console.log(description[0].style.display = "block");
    console.log(description[1].style.display = "none");
    console.log(description[2].style.display = "none");
}
tab2.onclick = () =>{
    console.log(description[0].style.display = "none");
    console.log(description[1].style.display = "block");
    console.log(description[2].style.display = "none");
}
tab3.onclick = () =>{
    console.log(description[0].style.display = "none");
    console.log(description[1].style.display = "none");
    console.log(description[2].style.display = "block");
}
/*
tab2.onclick = () =>{
    console.log(description[0])
    console.log(description[])
    console.log(description[1])
    console.log(description[2].style.display = "block");
    console.log(description[3].style.display = "none");
}
tab3.onclick = () =>{
    console.log(description[1].style.display = "none");
    console.log(description[2].style.display = "none");
    console.log(description[3].style.display = "block");
}*/
