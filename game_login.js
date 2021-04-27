function addUser() {
    //getting the player names from the screen
    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    
    //saving the player names in the local storage
    localStorage.setItem("number1", number1);
    localStorage.setItem("number2", number2);
    
    //redirecting to the games page
    window.location = "game_page.html";
}
