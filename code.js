const pages = [];
pages.push("if_home", "if_tutorials", "if_movies", "if_homelab", "if_about", "if_axolotls");
//page load
var pageTracker = 0;

window.onload=function(){

    mainFrame = document.getElementById('homeframe');
    //activeFrame = homeFrame;

    document.getElementById('if_movies').addEventListener('click', function() {
        mainFrame.src = "./pages/movies/movies.html"; navLock(2);
    }); 
    
    document.getElementById('if_home').addEventListener('click', function() {
        mainFrame.src = "./pages/home/home.html"; navLock(0);
    }); 

    document.getElementById('if_axolotls').addEventListener('click', function() {
        mainFrame.src = "./pages/axolotls/axolotls.html"; navLock(5);
    }); 

    document.getElementById('if_about').addEventListener('click', function() {
        mainFrame.src = "./pages/about/about.html"; navLock(4);
    }); 

    document.getElementById('if_homelab').addEventListener('click', function() {
        mainFrame.src = "./pages/homelab/homelab.html"; navLock(3);
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
