
 // Function switch


if (localStorage.getItem("langitem") === null) {
    // init variable/set default variable for item
    localStorage.setItem("langitem", 'ar');
}
    
    if (localStorage.getItem("langitem") == "en") {
          $('.en_lang').addClass("active-lang");
      $('.ar_lang').removeClass("active-lang"); }
    else if (localStorage.getItem("langitem") == 'ar'){
     $('.ar_lang').addClass("active-lang"); 
      $('.en_lang').removeClass("active-lang"); 
    }
    // arabic button
    $("#lang-switch .ar").click(function() {
    localStorage.setItem("langitem",'ar')
        // Enable arabic
        window.location.reload();
});
    
    // English button
    $("#lang-switch .en").click(function() {
      localStorage.setItem("langitem",'en')
        window.location.reload();
});



if (typeof window !== 'undefined') {
    console.log('we are running on the client')
} else {
    console.log('we are running on the server');
}
