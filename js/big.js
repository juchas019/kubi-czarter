
  window.onscroll = function() {myFunction()};
  
  var navbar = document.getElementById("navbar");
  var navbar1 = document.getElementById("small");

  var title = document.getElementById("bigTitle");
  var sticky = title.offsetHeight;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
      navbar1.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
      navbar1.classList.remove("sticky");
    }
  }