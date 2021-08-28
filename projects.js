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
    if(whichOne===-4){
        displayText = "<h3>IRS + Civic Digital Fellowship</h3> Selected out of 1700 applicants with ~6% acceptance rate via CDF to work in IRS as a Product Management Intern, where I created a cloud migration technical document for the IRS’s new public-facing identity proofing and authentication application with analysts, developers, and leadership teams. Also participated and led Agile stand-ups, defined user stories, and presented final deliverable to senior leadership. <a href='https://www.codingitforward.com/civic-digital-fellowship'>Civic Digital Fellowship</a>"
    }
    if(whichOne===-3){
        displayText = "<h3>SupremeNow</h3>Serving as PM and iOS developer in iOS app to 'bringing you the Supreme Courts'. App published to the App Store <a href='https://apps.apple.com/us/app/supremenow/id1560924187'>here</a>. You can also learn more at <a href='https://www.supremenow.app'>SupremeNow.app</a>"
    }
    if(whichOne===-2){
        displayText = "<h3>VandyHacks: Runner-Up</h3>Created iOS app to help people participate in the Supreme Court as an amicus curiae. Created iOS app front and back end. Received runner up award out of <b>70+ teams</b>!"
    }
    if(whichOne===-1){
        displayText = "<h3>Code for Equity PM</h3>Developing technical and theoretical program for college students to learn how to code for equity. Launching this fall!"
    }
    if(whichOne===0){
        displayText = "<h3>iOS Developer & PM</h3>Developing app to empower youth changemakers using Swift and Firebase through the Mozilla Builders Open Lab"
    }
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