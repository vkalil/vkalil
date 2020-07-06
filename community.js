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
        displayText = "In its first year, I joined DSC as Outreach Lead<br>"+
                      "I helped set up events, study jams, and led initiatives <br>"+
                      "initiatives to get the word out about this exciting new club";
    }
    if(whichOne===2){
        displayText = "I joined SHPE to become a bigger part of a community that didn't <br>"
                      +"have the numbers to exist in Iowa. I became Head of Outreach, where I <br>"
                      +"greatly increased our community engagement and active membership. <br> "
                      +"I also led an initiative with two other members of exec to work with the engineering school<br>"
                      +"and admissions to increase the number of Latinx engineers at WashU. It was a success!";
    }
    if(whichOne===3){
        displayText = "When applying to college, I applied to this prestigious scholarship program at WashU. I was <br>"
                      +"one of the 1% of high school students accepted for my work in high school. We regularly work in"
                      +"the community inside and outside of WashU"
    }
    if(whichOne===4){
        displayText = "Sophomore year, my team and I were accepted to work on DFA's national project in <br>collaboration with"
                      +"the YMCA to empower the youth of the Y to be changemakers in their<br> community. After a rigorous human-centered"
                      +"design process, we created a platform for the <br>youth of the Y to express themselves on a national scale in "
                      +"collaboration with local Ys. I'm excited to implement this website next semester!"
    }
    if(whichOne===5){
        displayText = "During my first year of college, I joined DFA and began working with LaunchCode to<br>"
                      +"try and solve their large droupout rates. My team and I worked with them  in order <br>"
                      +"to improve their TAing system to facilitate more of a bond and create a reentry process"
    }
    if(whichOne===6){
        displayText = "After the Parkland school shooting, I was outraged and had enough. Many other high<br>"
                      +"schoolers in my area had the same feeling, so me and a couple of other students organized<br>"
                      +"Students Against School Shootings (SASS). We led voter registration workshops, die-ins, <br>"
                      +"protests, and ultimately Iowa City's March for Our Lives, where we drew hundreds of people <br>"
                      +"on a snowy day to stand up for what we believe in. I received this award later in the year <br>"
                      +"with some teammates for our leadership on this city-wide collaboration"
    }
    if(whichOne===7){
        displayText = "I joined the Little Hawk as a reporter in my junior year of high school and had a blast.<br>"
                      +"I was selected to become Executive Editor the following year, where I coordinated, led,<br>"
                      +"and taught class. My main goal was to create a more connected environment in class--I worked <br>"
                      +"to do this by creating a weekly check-in process and eventually led our school to get first <br>"
                      +"place News Team in the state while notching several national Student News Organization awards <br>"

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