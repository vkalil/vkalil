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
        displayText = "<h3>Event Planning Lead</h3>In its first year, I joined the Google Developer Student Club as Event Planning Lead I helped set up events, study jams, and led initiatives initiatives to get the word out about this exciting new club. I hope to lead it this coming year! Fingers crossed!";
    }
    if(whichOne===2){
        displayText = "<h3>Head of Outreach</h3>I have an amazing time with the Society of Hispanic Professional Engineers! I worked with a small team on exec to increase the Latinx engineer admits at WashU--we doubled them this year! I've also increased active participation in events";
    }
    if(whichOne===3){
        displayText = "<h3>Scholar</h3>When applying to college, I applied to the prestigious Annika Rodriguez scholarship program at WashU. I was one of the 1% of high school students accepted for my work in high school. We regularly work in the community inside and outside of WashU"
    }
    if(whichOne===4){
        displayText = "<h3>National Team Member</h3>Was accepted with my team into this rigourous project where we worked with the YMCA on a national level to answer one question: How can we empower youth through the YMCA? We got a lot of positive feedback and we hope to implement our solution fall 2020!"
    }
    if(whichOne===5){
        displayText = "<h3>Team Member</h3>During my first year of college, I joined DFA and began working with LaunchCode to try and solve their large droupout rates. My team and I worked with them  in order to improve their TAing system to facilitate more of a bond and create a reentry process"
    }
    if(whichOne===6){
        displayText = "<h3>Award Recipient</h3>After Parkland, I was outraged and had enough. I led a city-wide effort to bring the youth and community together and fought for gun control legislation through many different events. Received this award for my impact in the community"
    }
    if(whichOne===7){
        displayText = "<h3>Executive Editor</h3>I joined The Little Hawk as a reporter and eventually became Executive Editor where I taught classes and bettered the newspaper community at my school. Led our team to get first place news team in Iowa"

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