const menu = document.getElementById("menu");

function menuClick() {
  if (menu.style.left == "-50%") {
    menu.style.left = "0";
    //menu.style.display = "block";
    
  } else {
    menu.style.left = "-50%";
    //menu.style.display = "none";
  }
}

let lastScrollTop = 0; // set initial scroll position to 0

window.addEventListener(
  "scroll",
  function () {
    // listen for scroll event
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // get current scroll position
    if (scrollTop > lastScrollTop) {
      // downscroll code
      console.log("Scrolling down"); 
      setTimeout(() => {
        document.querySelector("#menubt").style.position = "fixed";
      }, 1000);
      document.querySelector("#menubt").style.top = "-50px";

      if (menu.style.left == "0px") {
        menu.style.left = "-50%";
        //menu.style.display = "none";
      }
      
    } else {
      // upscroll code
      console.log("Scrolling up");
      document.querySelector("#menubt").style.top = "0px";
      document.querySelector("#menubt").style.position = "fixed";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // set lastScrollTop to the current scroll position
  },
  false
);
