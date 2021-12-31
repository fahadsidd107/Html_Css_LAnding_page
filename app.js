var navmenu = document.getElementById("nav-menu")
    togglemenu = document.getElementById("toggle-menu")
    closeMenu = document.getElementById("close-menu")

togglemenu.addEventListener('click', () => {
    navmenu.classList.toggle('show')
})
closeMenu.addEventListener('click', () => {
    navmenu.classList.remove('show')
})
  AOS.init();




  $(function() {
    $( "#button" ).click(function() {
      $( "#button" ).addClass( "onclic", 250, validate);
    });
  
    function validate() {
      setTimeout(function() {
        $( "#button" ).removeClass( "onclic" );
        $( "#button" ).addClass( "validate", 450, callback );
      }, 2250 );
    }
      function callback() {
        setTimeout(function() {
          $( "#button" ).removeClass( "validate" );
        }, 1250 );
      }
    });