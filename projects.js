function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
function displayInfo (whichOne){
    var displayText;
    if(whichOne===1){
        displayText = "Virgil is a private website at the University of Maryland that is used to track computer<br>"
                     +"usage when massive calculations and programs are run. I was initially tasked to make data usage"
                     +" more efficient & lower bandwidth usage, but then I broke the website and discovered it had no"
                     +" error handling, so I then worked with errors on the website, and implemented a Mocha+Chai testing"
                     +" framework that was implemented with Jenkins to ensure that the website would keep running smoothly"
    }
    if(whichOne===2){
        displayText = "I worked on this project with a partner to create a website that used the Trefle.io API that"
                      +"allowed the user to intuitively query data, take a fun quiz, and learn what kind of plant"
                      +"may be best to grow based on the weather in your area using a weather API"
    }
    if(whichOne===3){
        displayText = "Designing for intuitive and inclusive human-computer interaction is a big part of my computer science philosophy"
                      +"I have designed several apps and websites in and out of courses using Adobe XD, Figma, and Sketch."
                      +"Let me know if you're interested in seeing the final products or talking about the process!"
    }
    if(whichOne===4){
        displayText = "Since sophomore year began, I have been TAing WashU's introductory Java computer science course through studios,"
                      +" labs, and office hours."
    }
    if(whichOne===5){
        displayText = "In high school, I worked with a lab in my senior year to create a program that could"
                      +"simulate responses to a device designed to assist vision impaired user using Java"
    }

    
    console.log(displayText);
    document.getElementById("infoBox").innerHTML= displayText;
    document.getElementById("infoBox").style.visibility = "visible";
    document.getElementsByClassName('exitButton')[0].style.visibility = "visible";
    var fun = document.getElementsByClassName('exitButton');
    console.log(fun);
}
function hideInfo(){
    document.getElementById("infoBox").style.visibility = "hidden";
    document.getElementsByClassName("exitButton")[0].style.visibility = "hidden";
}