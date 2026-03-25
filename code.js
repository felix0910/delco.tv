const pages = [];
pages.push("if_home", "if_movies", "if_axolotls", "if_contact");
//page load
var pageTracker = 0;

window.onload=function(){

    mainFrame = document.getElementById('homeframe');
    //activeFrame = homeFrame;

    document.getElementById('if_home').addEventListener('click', function() {
        mainFrame.src = "./pages/about/about.html"; navLock(0);
    }); 

    document.getElementById('if_movies').addEventListener('click', function() {
        mainFrame.src = "./pages/movies/movies.html"; navLock(1);
    }); 
    

    document.getElementById('if_axolotls').addEventListener('click', function() {
        mainFrame.src = "./pages/axolotls/axolotls.html"; navLock(2);
    }); 

    document.getElementById('if_contact').addEventListener('click', function() {
        mainFrame.src = "./pages/contact/contact.html"; navLock(3);
    }); 
};


function play() {
    var sound = document.getElementById("a");
    sound.play();
}

function navLock(next) {
    var activenav = document.getElementById(pages[pageTracker]);
    activenav.classList.add('buttons');
    activenav.classList.remove('navActive');
    var newNav = document.getElementById(pages[next]);
    newNav.classList.add('navActive');
    newNav.classList.remove('buttons');
    pageTracker = next;
    console.log(newNav.outerHTML);
}
