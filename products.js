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


// Product search functionality
var container = document.getElementById("container");
var search = document.getElementById("search");

// Use a more specific class for product divs
var productList = container.querySelectorAll("div");

console.log(productList); 

search.addEventListener("keyup",function()
{
    var enteredVal = this.value.toUpperCase()

    for(var i=0;i<productList.length;i++)
    {
        var productName = productList[i].querySelector("h1").textContent

        if(productName.toUpperCase().indexOf(enteredVal)<0)
        {
            productList[i].style.display="none"
        }
        else{
            productList[i].style.display="block"
        }
    }
})



