/* global $ */
//Answers
var IM = 0;
var CA = 0;
var SM = 0;
var TH = 0;
var HU = 0;
var BW = 0;
var BP = 0;
var HE = 0;
var RI = 0;
var LO = 0;
var SL = 0;
var IP = 0;
var AM = 0;
var DS = 0;
var SW = 0;
var VI = 0;
var QS = 0;
var FL = 0;
var WS = 0;
var GA = 0;
var GR = 0;
var RO = 0;
var DR = 0;
var BB = 0;

//name
var name = $("#name").val();

//Answer Picker
var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var q6 = 0;
var q7 = 0;
var q8 = 0;
var q9 = 0;

//Question1
$(".BK").click(function(){
   q1= 1;
   $(".BK").css("background-color","blue");
   $(".QU").css("background-color","white");
   $(".MA").css("background-color","white");
   $(".SP").css("background-color","white");
});

$(".QU").click(function(){
   q1= 2;
   $(".QU").css("background-color","blue");
   $(".BK").css("background-color","white");
   $(".MA").css("background-color","white");
   $(".SP").css("background-color","white");
});

$(".MA").click(function(){
   q1= 3;
   $(".MA").css("background-color","blue");
   $(".BK").css("background-color","white");
   $(".QU").css("background-color","white");
   $(".SP").css("background-color","white");
});

$(".SP").click(function(){
   q1= 4;
   $(".SP").css("background-color","blue");
   $(".BK").css("background-color","white");
   $(".QU").css("background-color","white");
   $(".MA").css("background-color","white");
});

//Question2

$(".SI").click(function(){
   q2= 1;
   $(".SI").css("background-color","purple");
   $(".RA").css("background-color","white");
   $(".MG").css("background-color","white");
   $(".ME").css("background-color","white");
});

$(".RA").click(function(){
   q2= 2;
   $(".RA").css("background-color","purple");
   $(".SI").css("background-color","white");
   $(".MG").css("background-color","white");
   $(".ME").css("background-color","white");
});

$(".MG").click(function(){
   q2= 3;
   $(".MG").css("background-color","purple");
   $(".RA").css("background-color","white");
   $(".SI").css("background-color","white");
   $(".ME").css("background-color","white");
});

$(".ME").click(function(){
   q2= 4;
   $(".ME").css("background-color","purple");
   $(".RA").css("background-color","white");
   $(".MG").css("background-color","white");
   $(".SI").css("background-color","white");
});

//Question3

$(".NE").click(function(){
   q3= 1;
   $(".NE").css("background-color","purple");
   $(".DM").css("background-color","white");
   $(".TN").css("background-color","white");
   $(".WE").css("background-color","white");
});

$(".DM").click(function(){
   q3= 2;
   $(".DM").css("background-color","purple");
   $(".NE").css("background-color","white");
   $(".TN").css("background-color","white");
   $(".WE").css("background-color","white");
});

$(".TN").click(function(){
   q3= 3;
   $(".TN").css("background-color","purple");
   $(".DM").css("background-color","white");
   $(".NE").css("background-color","white");
   $(".WE").css("background-color","white");
});

$(".WE").click(function(){
   q3= 4;
   $(".WE").css("background-color","purple");
   $(".DM").css("background-color","white");
   $(".TN").css("background-color","white");
   $(".NE").css("background-color","white");
});

//Question4

$(".GR").click(function(){
   q4= 1;
   $(".GR").css("background-color","green");
   $(".TH").css("background-color","white");
   $(".DC").css("background-color","white");
});

$(".TH").click(function(){
   q4= 2;
   $(".TH").css("background-color","green");
   $(".GR").css("background-color","white");
   $(".DC").css("background-color","white");
});

$(".DC").click(function(){
   q4= 3;
   $(".DC").css("background-color","green");
   $(".TH").css("background-color","white");
   $(".GR").css("background-color","white");
});

//Question5

$(".SM").click(function(){
   q5= 1;
   $(".SM").css("background-color","green");
   $(".ST").css("background-color","white");
   $(".IN").css("background-color","white");
   $(".TR").css("background-color","white");
});

$(".ST").click(function(){
   q5= 2;
   $(".ST").css("background-color","green");
   $(".SM").css("background-color","white");
   $(".IN").css("background-color","white");
   $(".TR").css("background-color","white");
});

$(".IN").click(function(){
   q5= 3;
   $(".IN").css("background-color","green");
   $(".ST").css("background-color","white");
   $(".SM").css("background-color","white");
   $(".TR").css("background-color","white");
});

$(".TR").click(function(){
   q5= 4;
   $(".TR").css("background-color","green");
   $(".ST").css("background-color","white");
   $(".IN").css("background-color","white");
   $(".SM").css("background-color","white");
});

//Question6

$(".HU").click(function(){
   q6= 1;
   $(".HU").css("background-color","gold");
   $(".SU").css("background-color","white");
   $(".MC").css("background-color","white");
   $(".SC").css("background-color","white");
});

$(".SU").click(function(){
   q6= 2;
   $(".SU").css("background-color","gold");
   $(".HU").css("background-color","white");
   $(".MC").css("background-color","white");
   $(".SC").css("background-color","white");
});

$(".MC").click(function(){
   q6= 3;
   $(".MC").css("background-color","gold");
   $(".SU").css("background-color","white");
   $(".HU").css("background-color","white");
   $(".SC").css("background-color","white");
});

$(".SC").click(function(){
   q6= 4;
   $(".SC").css("background-color","gold");
   $(".SU").css("background-color","white");
   $(".MC").css("background-color","white");
   $(".HU").css("background-color","white");
});

//Question7

$(".VU").click(function(){
   q7= 1;
   $(".VU").css("background-color","gold");
   $(".FA").css("background-color","white");
   $(".GU").css("background-color","white");
   $(".TP").css("background-color","white");
});

$(".FA").click(function(){
   q7= 2;
   $(".FA").css("background-color","gold");
   $(".VU").css("background-color","white");
   $(".GU").css("background-color","white");
   $(".TP").css("background-color","white");
});

$(".GU").click(function(){
   q7= 3;
   $(".GU").css("background-color","gold");
   $(".FA").css("background-color","white");
   $(".VU").css("background-color","white");
   $(".TP").css("background-color","white");
});

$(".TP").click(function(){
   q7= 4;
   $(".TP").css("background-color","gold");
   $(".FA").css("background-color","white");
   $(".GU").css("background-color","white");
   $(".VU").css("background-color","white");
});

//Question8

$(".FD").click(function(){
   q8= 1;
   $(".FD").css("background-color","red");
   $(".GH").css("background-color","white");
   $(".SS").css("background-color","white");
});

$(".GH").click(function(){
   q8= 2;
   $(".GH").css("background-color","red");
   $(".FD").css("background-color","white");
   $(".SS").css("background-color","white");
});

$(".SS").click(function(){
   q8= 3;
   $(".SS").css("background-color","red");
   $(".GH").css("background-color","white");
   $(".FD").css("background-color","white");
});

//Question9

$(".YE").click(function(){
   q9= 1;
   $(".YE").css("background-color","red");
   $(".NO").css("background-color","white");
});

$(".NO").click(function(){
   q9= 2;
   $(".NO").css("background-color","red");
   $(".YE").css("background-color","white");
});



//Pointing System
//Question1
function q1MAN(){
 IM = IM +5;
 CA = CA +1;
 SM = SM +1;
 TH = TH +1;
 HU = HU +0;
 BW = BW +3;
 BP = BP +0;
 HE = HE +2;
 RI = RI +0;
 LO = LO +2;
 SL = SL +0;
 IP = IP +5;
 AM = AM +0;
 DS = DS +5;
 SW = SW +3;
 VI = VI +3;
 QS = QS +1;
 FL = FL +1;
 WS = WS +1;
 GA = GA +0;
 GR = GR +0;
 RO = RO +0;
 DR = DR +0;
 BB = BB +3;
}

function q1QUN(){
 IM = IM +1;
 CA = CA +0;
 SM = SM +5;
 TH = TH +0;
 HU = HU +0;
 BW = BW +0;
 BP = BP +0;
 HE = HE +0;
 RI = RI +0;
 LO = LO +0;
 SL = SL +0;
 IP = IP +0;
 AM = AM +0;
 DS = DS +0;
 SW = SW +0;
 VI = VI +0;
 QS = QS +0;
 FL = FL +0;
 WS = WS +0;
 GA = GA +0;
 GR = GR +0;
 RO = RO +0;
 DR = DR +0;
 BB = BB +0;
}

function q1BRK(){
 IM = IM +1;
 CA = CA +4;
 SM = SM +1;
 TH = TH +0;
 HU = HU +0;
 BW = BW +0;
 BP = BP +0;
 HE = HE +0;
 RI = RI +0;
 LO = LO +0;
 SL = SL +0;
 IP = IP +0;
 AM = AM +0;
 DS = DS +0;
 SW = SW +0;
 VI = VI +0;
 QS = QS +0;
 FL = FL +0;
 WS = WS +0;
 GA = GA +0;
 GR = GR +0;
 RO = RO +0;
 DR = DR +0;
 BB = BB +0;
}

function q1SPA(){
 IM = IM +0;
 CA = CA +0;
 SM = SM +0;
 TH = TH +4;
 HU = HU +5;
 BW = BW +0;
 BP = BP +0;
 HE = HE +0;
 RI = RI +5;
 LO = LO +5;
 SL = SL +5;
 IP = IP +0;
 AM = AM +0;
 DS = DS +0;
 SW = SW +0;
 VI = VI +0;
 QS = QS +0;
 FL = FL +0;
 WS = WS +0;
 GA = GA +5;
 GR = GR +5;
 RO = RO +5;
 DR = DR +5;
 BB = BB +0;
}

//Question2
function q2SUT(){
 IM = IM +5;
 CA = CA +1;
 SM = SM +5;
 TH = TH +1;
 HU = HU +0;
 BW = BW +2;
 BP = BP +5;
 HE = HE +1;
 RI = RI +3;
 LO = LO +1;
 SL = SL +2;
 IP = IP +5;
 AM = AM +5;
 DS = DS +1;
 SW = SW +0;
 VI = VI +2;
 QS = QS +0;
 FL = FL +4;
 WS = WS +2;
 GA = GA +0;
 GR = GR +0;
 RO = RO +2;
 DR = DR +0;
 BB = BB +3;
}

function q2MAG(){
 IM = IM +1;
 CA = CA +0;
 SM = SM +1;
 TH = TH +4;
 HU = HU +0;
 BW = BW +1;
 BP = BP +1;
 HE = HE +1;
 RI = RI +3;
 LO = LO +5;
 SL = SL +2;
 IP = IP +1;
 AM = AM +1;
 DS = DS +5;
 SW = SW +5;
 VI = VI +2;
 QS = QS +5;
 FL = FL +1;
 WS = WS +1;
 GA = GA +0;
 GR = GR +0;
 RO = RO +0;
 DR = DR +0;
 BB = BB +0;
}

function q2RAW(){
 IM = IM +4;
 CA = CA +3;
 SM = SM +5;
 TH = TH +3;
 HU = HU +0;
 BW = BW +4;
 BP = BP +2;
 HE = HE +5;
 RI = RI +3;
 LO = LO +1;
 SL = SL +4;
 IP = IP +4;
 AM = AM +0;
 DS = DS +3;
 SW = SW +3;
 VI = VI +4;
 QS = QS +0;
 FL = FL +3;
 WS = WS +4;
 GA = GA +4;
 GR = GR +3;
 RO = RO +5;
 DR = DR +2;
 BB = BB +3;
}

function q2MEF(){
 IM = IM +3;
 CA = CA +3;
 SM = SM +2;
 TH = TH +5;
 HU = HU +5;
 BW = BW +3;
 BP = BP +4;
 HE = HE +1;
 RI = RI +5;
 LO = LO +3;
 SL = SL +3;
 IP = IP +3;
 AM = AM +5;
 DS = DS +1;
 SW = SW +1;
 VI = VI +2;
 QS = QS +4;
 FL = FL +2;
 WS = WS +4;
 GA = GA +2;
 GR = GR +3;
 RO = RO +0;
 DR = DR +4;
 BB = BB +0;
}

//Question3
function q3NEV(){
 IM = IM +0;
 CA = CA +0;
 SM = SM +4;
 TH = TH +0;
 HU = HU +0;
 BW = BW +0;
 BP = BP +0;
 HE = HE +3;
 RI = RI +0;
 LO = LO +0;
 SL = SL +0;
 IP = IP +0;
 AM = AM +4;
 DS = DS +5;
 SW = SW +3;
 VI = VI +1;
 QS = QS +1;
 FL = FL +1;
 WS = WS +0;
 GA = GA +0;
 GR = GR +0;
 RO = RO +0;
 DR = DR +0;
 BB = BB +2;
}

function q3TNT(){
 IM = IM +3;
 CA = CA +5;
 SM = SM +5;
 TH = TH +4;
 HU = HU +1;
 BW = BW +3;
 BP = BP +4;
 HE = HE +3;
 RI = RI +0;
 LO = LO +1;
 SL = SL +3;
 IP = IP +2;
 AM = AM +5;
 DS = DS +5;
 SW = SW +4;
 VI = VI +4;
 QS = QS +4;
 FL = FL +3;
 WS = WS +2;
 GA = GA +4;
 GR = GR +3;
 RO = RO +3;
 DR = DR +3;
 BB = BB +4;
}

function q3DNM(){
 IM = IM +4;
 CA = CA +1;
 SM = SM +0;
 TH = TH +2;
 HU = HU +4;
 BW = BW +3;
 BP = BP +2;
 HE = HE +1;
 RI = RI +4;
 LO = LO +3;
 SL = SL +1;
 IP = IP +1;
 AM = AM +2;
 DS = DS +1;
 SW = SW +1;
 VI = VI +1;
 QS = QS +1;
 FL = FL +2;
 WS = WS +5;
 GA = GA +2;
 GR = GR +3;
 RO = RO +3;
 DR = DR +3;
 BB = BB +1;
}

function q3WIW(){
 IM = IM +4;
 CA = CA +0;
 SM = SM +0;
 TH = TH +1;
 HU = HU +4;
 BW = BW +3;
 BP = BP +1;
 HE = HE +1;
 RI = RI +5;
 LO = LO +3;
 SL = SL +1;
 IP = IP +3;
 AM = AM +1;
 DS = DS +1;
 SW = SW +1;
 VI = VI +1;
 QS = QS +1;
 FL = FL +2;
 WS = WS +5;
 GA = GA +1;
 GR = GR +2;
 RO = RO +2;
 DR = DR +2;
 BB = BB +1;
}

//Question4

function q4TGR(){
 IM = IM +1;
 CA = CA +3;
 SM = SM +0;
 TH = TH +0;
 HU = HU +0;
 BW = BW +3;
 BP = BP +2;
 HE = HE +4;
 RI = RI +1;
 LO = LO +3;
 SL = SL +2;
 IP = IP +2;
 AM = AM +4;
 DS = DS +0;
 SW = SW +1;
 VI = VI +0;
 QS = QS +4;
 FL = FL +2;
 WS = WS +1;
 GA = GA +0;
 GR = GR +1;
 RO = RO +3;
 DR = DR +2;
 BB = BB +1;
}

function q4NTH(){
 IM = IM +3;
 CA = CA +4;
 SM = SM +4;
 TH = TH +0;
 HU = HU +0;
 BW = BW +4;
 BP = BP +4;
 HE = HE +4;
 RI = RI +1;
 LO = LO +4;
 SL = SL +4;
 IP = IP +4;
 AM = AM +4;
 DS = DS +0;
 SW = SW +3;
 VI = VI +0;
 QS = QS +5;
 FL = FL +4;
 WS = WS +4;
 GA = GA +4;
 GR = GR +4;
 RO = RO +4;
 DR = DR +4;
 BB = BB +4;
}

function q4DNC(){
 IM = IM +4;
 CA = CA +2;
 SM = SM +4;
 TH = TH +5;
 HU = HU +5;
 BW = BW +0;
 BP = BP +0;
 HE = HE +0;
 RI = RI +4;
 LO = LO +0;
 SL = SL +0;
 IP = IP +4;
 AM = AM +0;
 DS = DS +5;
 SW = SW +3;
 VI = VI +5;
 QS = QS +0;
 FL = FL +1;
 WS = WS +1;
 GA = GA +0;
 GR = GR +0;
 RO = RO +0;
 DR = DR +0;
 BB = BB +0;
}

//Question5
function q5SMA(){
 IM = IM +5;
 CA = CA +3;
 SM = SM +5;
 TH = TH +2;
 HU = HU +0;
 BW = BW +1;
 BP = BP +2;
 HE = HE +2;
 RI = RI +2;
 LO = LO +1;
 SL = SL +3;
 IP = IP +2;
 AM = AM +4;
 DS = DS +3;
 SW = SW +2;
 VI = VI +5;
 QS = QS +2;
 FL = FL +2;
 WS = WS +2;
 GA = GA +2;
 GR = GR +3;
 RO = RO +1;
 DR = DR +1;
 BB = BB +5;
}

function q5INN(){
 IM = IM +0;
 CA = CA +1;
 SM = SM +4;
 TH = TH +0;
 HU = HU +0;
 BW = BW +0;
 BP = BP +1;
 HE = HE +3;
 RI = RI +0;
 LO = LO +0;
 SL = SL +1;
 IP = IP +0;
 AM = AM +1;
 DS = DS +1;
 SW = SW +1;
 VI = VI +2;
 QS = QS +1;
 FL = FL +0;
 WS = WS +0;
 GA = GA +1;
 GR = GR +3;
 RO = RO +1;
 DR = DR +2;
 BB = BB +3;
}

function q5STR(){
 IM = IM +3;
 CA = CA +5;
 SM = SM +5;
 TH = TH +5;
 HU = HU +5;
 BW = BW +3;
 BP = BP +5;
 HE = HE +2;
 RI = RI +4;
 LO = LO +1;
 SL = SL +2;
 IP = IP +4;
 AM = AM +1;
 DS = DS +1;
 SW = SW +2;
 VI = VI +3;
 QS = QS +3;
 FL = FL +4;
 WS = WS +5;
 GA = GA +3;
 GR = GR +4;
 RO = RO +1;
 DR = DR +4;
 BB = BB +1;
}

function q5TRO(){
 IM = IM +5;
 CA = CA +4;
 SM = SM +1;
 TH = TH +5;
 HU = HU +4;
 BW = BW +4;
 BP = BP +3;
 HE = HE +2;
 RI = RI +5;
 LO = LO +4;
 SL = SL +4;
 IP = IP +4;
 AM = AM +2;
 DS = DS +3;
 SW = SW +3;
 VI = VI +2;
 QS = QS +3;
 FL = FL +3;
 WS = WS +5;
 GA = GA +4;
 GR = GR +2;
 RO = RO +3;
 DR = DR +3;
 BB = BB +3;
}

//Question6

function q6HUM(){
 IM = IM +4;
 CA = CA +1;
 SM = SM +2;
 TH = TH +4;
 HU = HU +3;
 BW = BW +1;
 BP = BP +2;
 HE = HE +0;
 RI = RI +0;
 LO = LO +5;
 SL = SL +2;
 IP = IP +1;
 AM = AM +0;
 DS = DS +1;
 SW = SW +1;
 VI = VI +1;
 QS = QS +0;
 FL = FL +2;
 WS = WS +2;
 GA = GA +1;
 GR = GR +0;
 RO = RO +2;
 DR = DR +2;
 BB = BB +1;
}

function q6SLC(){
 IM = IM +3;
 CA = CA +1;
 SM = SM +2;
 TH = TH +2;
 HU = HU +5;
 BW = BW +3;
 BP = BP +1;
 HE = HE +1;
 RI = RI +4;
 LO = LO +4;
 SL = SL +1;
 IP = IP +2;
 AM = AM +2;
 DS = DS +2;
 SW = SW +1;
 VI = VI +1;
 QS = QS +0;
 FL = FL +1;
 WS = WS +4;
 GA = GA +1;
 GR = GR +2;
 RO = RO +2;
 DR = DR +3;
 BB = BB +5;
}

function q6SUP(){
 IM = IM +4;
 CA = CA +1;
 SM = SM +1;
 TH = TH +0;
 HU = HU +0;
 BW = BW +3;
 BP = BP +2;
 HE = HE +5;
 RI = RI +3;
 LO = LO +2;
 SL = SL +3;
 IP = IP +4;
 AM = AM +3;
 DS = DS +0;
 SW = SW +0;
 VI = VI +0;
 QS = QS +0;
 FL = FL +3;
 WS = WS +2;
 GA = GA +2;
 GR = GR +2;
 RO = RO +3;
 DR = DR +2;
 BB = BB +3;
}

function q6BMC(){
 IM = IM +5;
 CA = CA +3;
 SM = SM +3;
 TH = TH +3;
 HU = HU +5;
 BW = BW +3;
 BP = BP +3;
 HE = HE +1;
 RI = RI +5;
 LO = LO +4;
 SL = SL +3;
 IP = IP +4;
 AM = AM +2;
 DS = DS +4;
 SW = SW +3;
 VI = VI +1;
 QS = QS +1;
 FL = FL +3;
 WS = WS +4;
 GA = GA +1;
 GR = GR +3;
 RO = RO +3;
 DR = DR +4;
 BB = BB +1;
}

//Question7

function q7VUL(){
 IM = IM +5;
 CA = CA +2;
 SM = SM +4;
 TH = TH +4;
 HU = HU +2;
 BW = BW +4;
 BP = BP +1;
 HE = HE +0;
 RI = RI +3;
 LO = LO +2;
 SL = SL +3;
 IP = IP +3;
 AM = AM +1;
 DS = DS +1;
 SW = SW +2;
 VI = VI +0;
 QS = QS +0;
 FL = FL +2;
 WS = WS +3;
 GA = GA +2;
 GR = GR +0;
 RO = RO +2;
 DR = DR +0;
 BB = BB +3;
}

function q7GUL(){
 IM = IM +3;
 CA = CA +4;
 SM = SM +4;
 TH = TH +4;
 HU = HU +5;
 BW = BW +3;
 BP = BP +1;
 HE = HE +1;
 RI = RI +4;
 LO = LO +3;
 SL = SL +2;
 IP = IP +3;
 AM = AM +1;
 DS = DS +1;
 SW = SW +5;
 VI = VI +4;
 QS = QS +1;
 FL = FL +3;
 WS = WS +4;
 GA = GA +3;
 GR = GR +0;
 RO = RO +2;
 DR = DR +1;
 BB = BB +5;
}

function q7FAM(){
 IM = IM +4;
 CA = CA +4;
 SM = SM +5;
 TH = TH +5;
 HU = HU +1;
 BW = BW +3;
 BP = BP +4;
 HE = HE +3;
 RI = RI +5;
 LO = LO +3;
 SL = SL +5;
 IP = IP +2;
 AM = AM +5;
 DS = DS +1;
 SW = SW +5;
 VI = VI +1;
 QS = QS +4;
 FL = FL +3;
 WS = WS +2;
 GA = GA +5;
 GR = GR +4;
 RO = RO +3;
 DR = DR +5;
 BB = BB +2;
}

function q7TPT(){
 IM = IM +4;
 CA = CA +4;
 SM = SM +3;
 TH = TH +5;
 HU = HU +1;
 BW = BW +5;
 BP = BP +2;
 HE = HE +1;
 RI = RI +5;
 LO = LO +4;
 SL = SL +4;
 IP = IP +3;
 AM = AM +1;
 DS = DS +2;
 SW = SW +5;
 VI = VI +1;
 QS = QS +3;
 FL = FL +3;
 WS = WS +5;
 GA = GA +5;
 GR = GR +1;
 RO = RO +5;
 DR = DR +5;
 BB = BB +2;
}

//Question8

function q8FAA(){
 IM = IM +3;
 CA = CA +2;
 SM = SM +3;
 TH = TH +3;
 HU = HU +1;
 BW = BW +4;
 BP = BP +3;
 HE = HE +3;
 RI = RI +3;
 LO = LO +3;
 SL = SL +4;
 IP = IP +3;
 AM = AM +3;
 DS = DS +3;
 SW = SW +3;
 VI = VI +4;
 QS = QS +2;
 FL = FL +3;
 WS = WS +2;
 GA = GA +2;
 GR = GR +2;
 RO = RO +4;
 DR = DR +3;
 BB = BB +4;
}

function q8GSH(){
 IM = IM +2;
 CA = CA +3;
 SM = SM +2;
 TH = TH +3;
 HU = HU +4;
 BW = BW +3;
 BP = BP +3;
 HE = HE +3;
 RI = RI +2;
 LO = LO +2;
 SL = SL +2;
 IP = IP +3;
 AM = AM +3;
 DS = DS +2;
 SW = SW +3;
 VI = VI +3;
 QS = QS +3;
 FL = FL +3;
 WS = WS +3;
 GA = GA +3;
 GR = GR +3;
 RO = RO +3;
 DR = DR +3;
 BB = BB +3;
}

function q8SFS(){
 IM = IM +5;
 CA = CA +5;
 SM = SM +5;
 TH = TH +4;
 HU = HU +2;
 BW = BW +2;
 BP = BP +3;
 HE = HE +2;
 RI = RI +4;
 LO = LO +1;
 SL = SL +5;
 IP = IP +3;
 AM = AM +3;
 DS = DS +5;
 SW = SW +3;
 VI = VI +5;
 QS = QS +5;
 FL = FL +3;
 WS = WS +2;
 GA = GA +5;
 GR = GR +5;
 RO = RO +4;
 DR = DR +5;
 BB = BB +3;
}

//Next Buttons
//Page 1
$(".n1").click(function(){
    //Question1
        if (q1===1){
            q1BRK();
        }
        else if (q1===2){
            q1QUN();
        }
        else if (q1===3){
            q1MAN();
        }
        else if (q1===4){
            q1SPA();
        }

});

//Page 2
$(".n2").click(function(){
    //Question2
        if (q2===1){
            q2SUT();
        }
        else if (q2===2){
            q2RAW();
        }
        else if (q2===3){
            q2MAG();
        }
        else if (q2===4){
            q2MEF();
        }
    //Question3
        if (q3===1){
            q3NEV();
        }
        else if (q3===2){
            q3DNM();
        }
        else if (q3===3){
            q3TNT();
        }
        else if (q3===4){
            q3WIW();
        }
});

//Page3
$(".n3").click(function(){
    //Question4
        if (q4===1){
            q4TGR();
        }
        else if (q4===2){
            q4NTH();
        }
        else if (q4===3){
            q4DNC();
        }
    //Question5
        if (q5===1){
            q5SMA();
        }
        else if (q5===2){
            q5STR();
        }
        else if (q5===3){
            q5INN();
        }
        else if (q5===4){
            q5TRO();
        }
});

//Page4
$(".n4").click(function(){
    //Question6
        if (q6===1){
            q6HUM();
        }
        else if (q6===2){
            q6SUP();
        }
        else if (q6===3){
            q6BMC();
        }
        else if (q6===4){
            q6SLC();
        }
    //Question7
        if (q7===1){
            q7VUL();
        }
        else if (q7===2){
            q7FAM();
        }
        else if (q7===3){
            q7GUL();
        }
        else if (q7===4){
            q7TPT();
        }
});

$(".n5").click(function(){
    //Question8
        if (q8===1){
            q8FAA();
        }
        else if (q8===2){
            q8GSH();
        }
        else if (q8===3){
            q8SFS();
        }
    //Question9
        if (q9===1){
            
        }
        else if (q9===2){
            
        }
        //Numbers
        //Total Points
        var TP = IM +CA+SM+TH+HU+BW+BP+HE+RI+LO+SL+IP+AM+DS+SW+VI+QS+FL+WS+GA+GR+RO+DR+BB;
        //Percent
 IM = IM /TP*100;
 CA = CA /TP*100;
 SM = SM /TP*100;
 TH = TH /TP*100;
 HU = HU /TP*100;
 BW = BW /TP*100;
 BP = BP /TP*100;
 HE = HE /TP*100;
 RI = RI /TP*100;
 LO = LO /TP*100;
 SL = SL /TP*100;
 IP = IP /TP*100;
 AM = AM /TP*100;
 DS = DS /TP*100;
 SW = SW /TP*100;
 VI = VI /TP*100;
 QS = QS /TP*100;
 FL = FL /TP*100;
 WS = WS /TP*100;
 GA = GA /TP*100;
 GR = GR /TP*100;
 RO = RO /TP*100;
 DR = DR /TP*100;
 BB = BB /TP*100;
 
 
 //Display Percentage
$(".PIM").append(IM + "%");
$(".PCA").append(CA + "%");
$(".PTH").append(TH + "%");
$(".PHU").append(HU + "%");

});


