init();

var floatvalue = null;
var clearvalue = null;


$(document).ready(function() {
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.cookie = "LastVisit="+time+";";
    
    checkResize();
    setTimeout(function() {
        $("#cookieConsent").fadeIn(200);
    }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    });
    floatvalue = $("#grid-div div").css("float");
    clearvalue = $("#grid-div div").css("clear");
});

$(window).on('resize', function(){
   checkResize();
});

function checkResize(){
  
    var win = $(this); 


    //If - Braucht echt große Hilfe
    if (win.width() <= 1171) {
        $(".breaker").css("background-color", "rgba(0, 0, 0, 0.075)");
        
        $("#grid-div div").css("float", "left");
       
        $("#grid-div div").css("clear", "none");

    }else{ //else pfad entfernt nicht die #grid-div div formatierung egal was probiert
        $(".breaker").css("background-color", "rgba(0, 0, 0, 0.075)");

    }

    if (win.width() <= 1277) { 
        $(".topnav a.active").css("background-color", "rgba(0, 0, 0, 0)");
        $(".topnav a.active").css("color", "red");
    }else{
        $(".topnav a.active").css("background-color", "rgba(187, 19, 19, 0.562)");
        $(".topnav a.active").css("color", "white");
    }
}


function init() {

}


var LaenderTexte = [
    "Wien",
    "Niederösterreich",
    "Steiermark",
    "Oberösterreich",
    "Salzburg",
    "Tirol",
    "Kärnten",
    "Vorarlberg",
    "Burgenland"
]

function changeLandText(land) {
    console.log(land);

    document.cookie = "Land="+land+";";
    document.getElementById("text-next-grid").innerHTML = LaenderTexte[land - 1];
}