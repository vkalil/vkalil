function hamburgerFunction() {
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
        displayText = "<h3>Summer Intern</h3>Broke website on accident, so I spent the majority of my time fixing it and implementing website testing frameworks. Worked on other projects as well <h5>HTML, JS, CSS, Python, InfluxDB, Mocha+Chai</h5>"
    }
    if(whichOne===2){
        displayText = "<h3>Final Project</h3>Created website with a partner that interacts with Trefle.io's API and a weather API to do a variety of different tasks <h5>HTML, JS, CSS, APIs</h5>"
    }
    if(whichOne===3){
        displayText = "<h3>Human-Computer Interaction</h3> Message me for design portfolio! Creating inclusive and intuitive projects/systems is extremely important to me<h5>Adobe Xd, Figma, Sketch</h5>"
    }
    if(whichOne===4){
        displayText = "<h3>Teaching Assistant</h3>TAing WashU's introductory Java computer science course through studios, labs, and office hours<h5>Java</h5>"
    }
    if(whichOne===5){
        displayText = "<h3>Researcher</h3>In high school, I worked in a lab to simulate responses to a new device that assists near-blind users<h5>Java</h5>"
    }
    if(whichOne===6){
        displayText = "<h3>Interests</h3>I'm highly interested in coding equitable apps, websites, and softwares! I'm comfortable with Java, JS, Python, HTML/CSS, and Swift. I also have experience with C++. On the side, I love rap, sneaker culture, and the NBA"
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