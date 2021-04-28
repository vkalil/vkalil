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
    if(whichOne===0){
        displayText = "<h3>Selected Attendee</h3>One of ~50 student leaders selected for conference hosted by Stanford's Public Interest Tech Lab";
    }
    if(whichOne===1){
        displayText = "<h3>DSC Lead</h3>This year, I am leading the club in GBMs, coordinating events and projects, helping create more technical workshops, and facilitating more bonds in the club. Last year I was Event Planning Lead.";
    }
    if(whichOne===2){
        displayText = "<h3>Head of Outreach</h3>I worked with the exec team in the Soceity of Hispanic Professional Engineers to increase the Latinx engineer admits at WashU--we doubled them this year! I've also increased active participation in events";
    }
    if(whichOne===3){
        displayText = "<h3>Scholar</h3>One of very few students accepted Annika Rodriguez scholarship program at WashU. We regularly work with the community inside and outside of WashU"
    }
    if(whichOne===4){
        displayText = "<h3>National Team Member</h3>Worked with the YMCA on a national level to answer one question: How can we empower the youth through the YMCA? "
    }
    if(whichOne===5){
        displayText = "<h3>Team Member</h3>Collaborated with LaunchCode to try and solve their low retention rates. Restructured TAing system and created program reentry process"
    }
    if(whichOne===6){
        displayText = "<h3>Award Recipient</h3>Led a city-wide effort to bring the youth and community together and fought for gun control legislation through many different events. Received this award for my impact in the community"
    }
    if(whichOne===7){
        displayText = "<h3>Executive Editor</h3>Taught classes and bettered the newspaper community at my school. Led our team to get first place news team in Iowa"

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