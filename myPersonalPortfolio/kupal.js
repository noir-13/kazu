const openSidebar = document.querySelector(".openSidebar");
const close = document.querySelector(".closeSidebar");
const sidebar = document.querySelector(".sidebar");



openSidebar.onclick = function(){
    sidebar.style.display = "flex";
}

close.onclick = function(){
    sidebar.style.display = "none";
}
