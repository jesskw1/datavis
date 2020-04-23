var data;

function preload () {
data = loadJSON("languagetwo.json");
  myFont = loadFont('assets/TitilliumWeb-Light.ttf');
  blip = loadSound('assets/blip.mp3');

}



function setup() {
	    //console.log(data);
createCanvas(1150, 800);
background(1);
angleMode(DEGREES);

textSize(18);
text('Coronavirus', 1000, 800);
console.log(data.country[2].Coronavirus);


}




function draw() { 

//var pandemic= country[1].pandemic + country[2].pandemic;
var UK = data.country[0];
var Spain = data.country[1];
var US = data.country[2];
var Germany = data.country[3];
var France = data.country[4];
var Sweden = data.country[5];

darkArc();


  
  textSize(30);
  textAlign(LEFT);
  stroke(0);
  strokeCap(ROUND);
  textFont(myFont);

  fill(UK.r, UK.g, UK.b);
  text('United Kingdom (1)', 60, 60);

  fill(Spain.r, Spain.g, Spain.b);
  text('Spain (2)', 60, 100);

  fill(US.r, US.g, US.b);
  text('USA (3)', 60, 140);

  fill(Germany.r, Germany.g, Germany.b);
  text('Germany (4)', 60, 180);

  fill(France.r, France.g, France.b);
  text('France (5)', 60, 220);

  fill(Sweden.r, Sweden.g, Sweden.b);
  text('Sweden (6)', 60, 260);

  fill(50);
  textSize(25);
  text('Return (7)', 60, 300);


  textSize(18)
  fill(255);
  textAlign(LEFT);
  strokeCap(ROUND);
  strokeWeight(1);
  text('Pandemic', 1020, 428);
  text('Scientific', 1020, 407);
  text('Testing', 1020, 387);
  text('China', 1020, 366);
  text('Business', 1020, 346);
  text('Experts', 1020, 325);
  text('Epidemic', 1020, 306);
  text('War', 1020, 285);
  text('Crisis', 1020, 264);
  text('Economic', 1020, 245);
  text('Restrictions', 1020, 226);
  text('World', 1020, 209);
  text('Together', 1020, 189);
  text('Lives', 1020, 171);
  text('Home', 1020, 149);
  text('Hospital', 1020, 128);
  text('Protect', 1020, 108);
  text('Health', 1020, 88);
  text('People', 1020, 68);
  text('Us', 1020, 48);
  text('Coronavirus', 1020, 28);



noFill();
strokeWeight(10);
strokeCap(SQUARE);


stroke(Sweden.r, Sweden.g, Sweden.b);
arc(1000, 800, 760, 760, 270- data.country[6].pandemic * 2, 270);
arc(1000, 800, 760, 760, 268- US.pandemic * 2, 270);
stroke(Spain.r, Spain.g, Spain.b);
arc(1000, 800, 760, 760, 270 - Spain.pandemic *2, 270);



arc(1000, 800, 800, 800, 270- data.country[6].Scientific * 2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 800, 800, 266- France.Scientific * 2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 800, 800, 268-Germany.Scientific * 2, 270);
stroke(Spain.r, Spain.g, Spain.b);
arc(1000, 800, 800, 800, 270 - Spain.Scientific *2, 270);



stroke(Sweden.r, Sweden.g, Sweden.b);
arc(1000, 800, 840, 840, 270- data.country[6].Testing * 2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 840, 840, 270- US.Testing * 2, 270);




arc(1000, 800, 880, 880, 270- data.country[6].China *2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 880, 880, 270- US.China* 2, 270);


stroke(Sweden.r, Sweden.g, Sweden.b);
arc(1000, 800, 920, 920, 270- data.country[6].Business *2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 920, 920, 262-Germany.Business *2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 920, 920, 270 - US.Business *2, 270);


arc(1000, 800, 960, 960, 270- data.country[6].Experts* 2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 960, 960, 262- France.Experts * 2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 960, 960, 266-Germany.Experts * 2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 960, 960, 268- US.Experts * 2, 270);
stroke(Spain.r, Spain.g, Spain.b);
arc(1000, 800, 960, 960, 270 - Spain.Experts *2, 270);




stroke(Sweden.r, Sweden.g, Sweden.b);
arc(1000, 800, 1000, 1000, 270- data.country[6].Epidemic *2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 1000, 1000, 264- France.Epidemic * 2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 1000, 1000, 270-Germany.Epidemic * 2, 270);



arc(1000, 800, 1040, 1040, 270- data.country[6].war* 2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 1040, 1040, 268- France.war * 2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 1040, 1040, 270-Germany.war * 2, 270);


stroke(Sweden.r, Sweden.g, Sweden.b);
arc(1000, 800, 1080, 1080, 270- data.country[6].Crisis* 2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 1080, 1080, 264- France.Crisis * 2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 1080, 1080, 268-Germany.Crisis * 2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 1080, 1080, 270- US.Crisis * 2, 270);




arc(1000, 800, 1120, 1120, 270- data.country[6].Economic* 2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 1120, 1120,  252- France.Economic * 2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 1120, 1120,  258-Germany.Economic * 2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 1120, 1120,  266- US.Economic * 2, 270);
stroke(Spain.r, Spain.g, Spain.b);
arc(1000, 800, 1120, 1120, 270 - Spain.Economic *2, 270);



stroke(Sweden.r, Sweden.g, Sweden.b);
arc(1000, 800, 1160, 1160, 270- data.country[6].Restrictions* 2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 1160, 1160, 254- France.Restrictions *2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 1160, 1160, 262-Germany.Restrictions *2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 1160, 1160, 270 - US.Restrictions*2, 270);




arc(1000, 800, 1200, 1200, 270- data.country[6].World* 2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800,1200, 1200, 244- France.World *2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 1200, 1200, 250-Germany.World *2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 1200, 1200, 262 - US.World*2, 270);
stroke(Spain.r, Spain.g, Spain.b);
arc(1000, 800, 1200, 1200,266- Spain.World * 2, 270);
stroke(UK.r, UK.g, UK.b);
arc(1000, 800, 1200, 1200, 270- UK.World *2, 270);


arc(1000, 800, 1240, 1240, 270- data.country[6].Together*2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800,1240, 1240, 242- France.Together *2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 1240, 1240, 256-Germany.Together *2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 1240, 1240, 262 - US.Together*2, 270);
stroke(Spain.r, Spain.g, Spain.b);
arc(1000, 800, 1240, 1240, 266- Spain.Together * 2, 270);
stroke(UK.r, UK.g, UK.b);
arc(1000, 800, 1240, 1240, 270- UK.Together *2, 270);

stroke(Sweden.r, Sweden.g, Sweden.b);
arc(1000, 800, 1280, 1280, 270- data.country[6].lives*2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 1280, 1280, 250- France.lives *2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 1280, 1280, 258-Germany.lives *2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 1280, 1280, 260 - US.lives *2, 270);
stroke(UK.r, UK.g, UK.b);
arc(1000, 800, 1280, 1280, 270- UK.lives *2, 270);

stroke(Sweden.r, Sweden.g, Sweden.b);
arc(1000, 800, 1320, 1320, 270- data.country[6].Home*2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 1320, 1320, 244- France.Home *2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 1320, 1320, 248 - US.Home *2, 270);
stroke(Spain.r, Spain.g, Spain.b);
arc(1000, 800, 1320, 1320, 252- Spain.Home * 2, 270);
stroke(UK.r, UK.g, UK.b);
arc(1000, 800, 1320, 1320, 270- UK.Home *2, 270);


arc(1000, 800, 1360, 1360, 270- data.country[6].hospital*2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 1360, 1360, 252- France.hospital *2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 1360, 1360, 258-Germany.hospital *2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 1360, 1360, 260 - US.hospital *2, 270);
stroke(Spain.r, Spain.g, Spain.b);
arc(1000, 800, 1360, 1360, 262- Spain.hospital * 2, 270);
stroke(UK.r, UK.g, UK.b);
arc(1000, 800, 1360, 1360, 270- UK.hospital *2, 270);

stroke(Sweden.r, Sweden.g, Sweden.b);
arc(1000, 800, 1400, 1400, 270- data.country[6].protect*2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 1400, 1400, 244- France.protect *2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 1400, 1400, 248-Germany.protect *2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 1400, 1400, 254 - US.protect *2, 270);
stroke(Spain.r, Spain.g, Spain.b);
arc(1000, 800, 1400, 1400, 264- Spain.protect * 2, 270);
stroke(UK.r, UK.g, UK.b);
arc(1000, 800, 1400, 1400, 270- UK.protect *2, 270);

stroke(Sweden.r, Sweden.g, Sweden.b);
arc(1000, 800, 1440, 1440, 270- data.country[6].health*2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 1440, 1440, 230- France.health *2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 1440, 1440, 234-Germany.health *2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 1440, 1440, 254 - US.health *2, 270);
stroke(Spain.r, Spain.g, Spain.b);
arc(1000, 800, 1440, 1440, 266- Spain.health * 2, 270);
stroke(UK.r, UK.g, UK.b);
arc(1000, 800, 1440, 1440, 270- UK.health *2, 270);




stroke(Sweden.r, Sweden.g, Sweden.b);
arc(1000, 800, 1480, 1480, 270- data.country[6].people*2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 1480, 1480, 218- France.people *2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 1480, 1480, 226-Germany.people *2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 1480, 1480, 242 - US.people *2, 270);
stroke(Spain.r, Spain.g, Spain.b);
arc(1000, 800, 1480, 1480, 252- Spain.people * 2, 270);
stroke(UK.r, UK.g, UK.b);
arc(1000, 800, 1480, 1480, 270- UK.people *2, 270);



stroke(Sweden.r, Sweden.g, Sweden.b);
arc(1000, 800, 1520, 1520, 270- data.country[6].Us*2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 1520, 1520, 236- France.Us *2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 1520, 1520, 248-Germany.Us *2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 1520, 1520, 256 - US.Us *2, 270);
stroke(Spain.r, Spain.g, Spain.b);
arc(1000, 800, 1520, 1520, 262- Spain.Us * 2, 270);
stroke(UK.r, UK.g, UK.b);
arc(1000, 800, 1520, 1520, 270- UK.Us *2, 270);



stroke(Sweden.r, Sweden.g, Sweden.b);
arc(1000, 800, 1560, 1560, 270- data.country[6].Coronavirus*2, 270);
stroke(France.r, France.g, France.b);
arc(1000, 800, 1560, 1560, 187- France.Coronavirus * 2, 270);
stroke(Germany.r, Germany.g, Germany.b);
arc(1000, 800, 1560, 1560, 203-Germany.Coronavirus * 2, 270);
stroke(US.r, US.g, US.b);
arc(1000, 800, 1560, 1560, 244- US.Coronavirus * 2, 270);
stroke(Spain.r, Spain.g, Spain.b);
arc(1000, 800, 1560, 1560, 264 - Spain.Coronavirus *2, 270);
stroke(UK.r, UK.g, UK.b);
arc(1000, 800, 1560, 1560, 270 - UK.Coronavirus*2, 270);


if(keyIsPressed) {
     if (key == '1') { 
    blip.play();

    UK.r=135;
    UK.g=245;
    UK.b=251;

    Spain.r=50;
    Spain.g=50;
    Spain.b=50;

    US.r=50;
    US.g=50;
    US.b=50;

    Germany.r=50;
    Germany.g=50;
    Germany.b=50;

    France.r=50;
    France.g=50;
    France.b=50;

    Sweden.r=50;
    Sweden.g=50;
    Sweden.b=50;

   

  }
}

  if(keyIsPressed) {
    if (key == '2') {
      blip.play();


    Spain.r=247;
    Spain.g=181;
    Spain.b=52;



    UK.r=50;
    UK.g=50;
    UK.b=50;

    US.r=50;
    US.g=50;
    US.b=50;

    Germany.r=50;
    Germany.g=50;
    Germany.b=50;

    France.r=50;
    France.g=50;
    France.b=50;

    Sweden.r=50;
    Sweden.g=50;
    Sweden.b=50;

    }
  }
  if(keyIsPressed) {
    if (key == '3') { 
      blip.play();

    US.r=109;;
    US.g=180;
    US.b=101;



    UK.r=50;
    UK.g=50;
    UK.b=50;

    Spain.r=50;
    Spain.g=50;
    Spain.b=50;

    Germany.r=50;
    Germany.g=50;
    Germany.b=50;

    France.r=50;
    France.g=50;
    France.b=50;

    Sweden.r=50;
    Sweden.g=50;
    Sweden.b=50;

    }
  }
  if(keyIsPressed) {
    if (key == '4') {
      blip.play();

    Germany.r= 67;
    Germany.g=146;
    Germany.b=241;

    UK.r=50;
    UK.g=50;
    UK.b=50;

    US.r=50;
    US.g=50;
    US.b=50;

    Spain.r=50;
    Spain.g=50;
    Spain.b=50;

    France.r=50;
    France.g=50;
    France.b=50;

    Sweden.r=50;
    Sweden.g=50;
    Sweden.b=50;

    }
  }
  if(keyIsPressed) {
    if (key == '5') {
      blip.play();

    Germany.r= 50;
    Germany.g=50;
    Germany.b=50;

    UK.r=50;
    UK.g=50;
    UK.b=50;

    US.r=50;
    US.g=50;
    US.b=50;

    Spain.r=50;
    Spain.g=50;
    Spain.b=50;

    France.r=164;
    France.g=3;
    France.b=111;

    Sweden.r=50;
    Sweden.g=50;
    Sweden.b=50;
}

}

  if(keyIsPressed) {
    if (key == '6') {
      blip.play();

    Germany.r= 50;
    Germany.g=50;
    Germany.b=50;

    UK.r=50;
    UK.g=50;
    UK.b=50;

     US.r=50;
    US.g=50;
    US.b=50;

    Spain.r=50;
    Spain.g=50;
    Spain.b=50;

    France.r=50;
    France.g=50;
    France.b=50;

    Sweden.r=255;
    Sweden.g=59;
    Sweden.b=67;
   
}

}

  if(keyIsPressed) {
    if (key == '7') {
     

    Germany.r= 67;
    Germany.g=146;
    Germany.b=241;

   UK.r=135;
    UK.g=245;
    UK.b=251;

     US.r=109;
    US.g=180;
    US.b=101;


    Spain.r=247;
    Spain.g=181;
    Spain.b=52;

    France.r=164;
    France.g=3;
    France.b=111;

    Sweden.r=255;
    Sweden.g=59;
    Sweden.b=67;
   
}

}

}

function darkArc () {

noFill();
stroke(50);
strokeWeight(10);

arc(1000, 800, 760, 760, 180, 270);
arc(1000, 800, 800, 800, 180, 270);
arc(1000, 800, 840, 840, 180, 270);
arc(1000, 800, 880, 880, 180, 270);
arc(1000, 800, 920, 920, 180, 270);
arc(1000, 800, 960, 960, 180, 270);
arc(1000, 800, 1000, 1000, 180, 270);
arc(1000, 800, 1040, 1040, 180, 270);
arc(1000, 800, 1080, 1080, 180, 270);
arc(1000, 800, 1120, 1120, 180, 270);
arc(1000, 800, 1160, 1160, 180, 270);
arc(1000, 800, 1200, 1200, 180, 270);
arc(1000, 800, 1240, 1240, 180, 270);
arc(1000, 800, 1280, 1280, 180, 270);
arc(1000, 800, 1320, 1320, 180, 270);
arc(1000, 800, 1360, 1360, 180, 270);
arc(1000, 800, 1400, 1400, 180, 270);
arc(1000, 800, 1440, 1440, 180, 270);
arc(1000, 800, 1480, 1480, 180, 270);
arc(1000,800, 1520, 1520, 180, 270);


}















 
