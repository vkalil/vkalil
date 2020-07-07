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
        displayText = "<h3>Summer Intern</h3>Figured out how to break website on accident, so I spent the majority of my time fixing it and implementing website testing frameworks. Worked on other projects as well <h5>HTML, JS, CSS, Python, InfluxDB, Mocha+Chai</h5>"
    }
    if(whichOne===2){
        displayText = "<h3>Final Project</h3>I worked on this project with a partner to create a website that used the Trefle.io API that allowed the user to intuitively query data, take a fun quiz, and learn what kind of plant may be best to grow based on the weather in your area using a weather API <h5>HTML, JS, CSS, APIs</h5>"
    }
    if(whichOne===3){
        displayText = "<h3>Human-Computer Interaction</h3> Message me for my portfolio! I have designed several apps and websites in and out of courses using several softwares listed below. Creating inclusive and intuitive applications & websites is EXTREMELY important to me <h5>Adobe Xd, Figma, Sketch</h5>"
    }
    if(whichOne===4){
        displayText = "<h3>Teaching Assistant</h3>Since sophomore year began, I have been TAing WashU's introductory Java computer science course through studios, labs, and office hours<h5>Java</h5>"
    }
    if(whichOne===5){
        displayText = "<h3>Researcher</h3>In high school, I worked in a lab during my senior year to create a program that could simulate responses to a device designed to assist vision impaired user<h5>Java</h5>"
    }
    if(whichOne===6){
        displayText = "<h3>Interests</h3>I'm highly interested in coding equitable apps, websites, and softwares! I'm comfortable with Java, JS, HTML/CSS, and Swift. I also have experience with C++. On the side, I love rap, sneaker culture, and the NBA"
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