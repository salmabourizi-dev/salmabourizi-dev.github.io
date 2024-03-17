const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

function showMore(button) {
  let parentItem = button.closest('.item');
  let imagez = parentItem.querySelector('.item-img');
  let back = parentItem.querySelector('.back'); 
  let plus = parentItem.querySelector('.btnP');
  let moins = parentItem.querySelector('.btnM');
  imagez.style.display = 'none';
  back.style.display = 'block';
  plus.style.display = 'none';
  moins.style.display = 'block';
}
function showLess(button){
let parentItem = button.closest('.item');
  let imagez = parentItem.querySelector('.item-img');
  let back = parentItem.querySelector('.back'); 
  let plus = parentItem.querySelector('.btnP');
  let moins = parentItem.querySelector('.btnM');
  imagez.style.display = 'block';
  imagez.style.marginBottom = '10px';
  back.style.display = 'none';
  plus.style.display = 'block';
  moins.style.display = 'none';
}

// document.addEventListener("DOMContentLoaded", function () {
      let checkbox = document.getElementById('check');
      let list = document.querySelector('.nav');

      checkbox.addEventListener('click', function () {
          if (checkbox.checked) {
              list.style.left = '0';
          } else {
              list.style.left = '-100%';
          }
      });

      list.addEventListener('click', function () {
          list.style.left = '-100%';
          checkbox.checked = false;
      });
  // });



