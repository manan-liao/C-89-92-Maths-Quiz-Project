function addUser() {
    //getting the player names from the screen
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    
    //saving the player names in the local storage
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    
    //redirecting to the games page
    window.location = "game_page.html";
}