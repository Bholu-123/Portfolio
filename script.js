// function myFunction1() {
//     //when I click on the bar I have to show sidebar
//     document.getElementById("sidebar").classList.add("sidebar-show");
//     //Initially bars have btn-show class so first we have to remove btn-show from bars and simultaneously add btn-hide on bars
//     //also add btn-show on cancel and remove btn-hide
//     document.getElementById("btn-on").classList.remove("btn-show");
//     document.getElementById("btn-off").classList.remove("btn-hide");
//     document.getElementById("btn-off").classList.add("btn-show");
//     document.getElementById("btn-on").classList.add("btn-hide");
// }

// function myFunction2() {
//      //when I click on cancel first I have to remove sidebar-show then add sidebarhide to remove sidebar
//     document.getElementById("sidebar").classList.remove("sidebar-show");
//     document.getElementById("sidebar").classList.add("sidebar-hide");
//     document.getElementById("btn-off").classList.remove("btn-show");
//     document.getElementById("btn-off").classList.add("btn-hide");
//     document.getElementById("btn-on").classList.add("btn-show");
//     document.getElementById("btn-on").classList.remove("btn-hide");
// }
const menu = document.querySelector("#menu-bars");
const sidebar = document.querySelector('#sidebar');

menu.addEventListener('click',toggleClass);

function toggleClass(){
    menu.classList.toggle('fa-times');
    sidebar.classList.toggle('sidebar-show');
}