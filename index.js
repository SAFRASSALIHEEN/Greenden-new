var sidenav = document.getElementById("sidenav")

var navclose = document.getElementById("navclose")

var menuicons = document.getElementById("menu-icons")

menuicons.addEventListener("click",function()
{
    sidenav.style.right=0
})


navclose.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})
