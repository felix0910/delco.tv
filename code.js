window.onload=function(){
    //page load
    mainFrame = document.getElementById('homeframe');
    //activeFrame = homeFrame;

    document.getElementById('movielink').addEventListener('click', function() {
        mainFrame.src = "movies.html";
    }); 
    
    document.getElementById('homelink').addEventListener('click', function() {
        mainFrame.src = "mainpage.html";
    }); 
};


function play() {
    var sound = document.getElementById("a");
    sound.play();
}

