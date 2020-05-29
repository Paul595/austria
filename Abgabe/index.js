init();




var floatvalue = null;
var clearvalue = null;


$(document).ready(function() {
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.cookie = "LastVisit=" + time + ";";

    checkResize();
    setTimeout(function() {
        $("#cookieConsent").fadeIn(200);
    }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    });
    floatvalue = $("#grid-div div").css("float");
    clearvalue = $("#grid-div div").css("clear");

    document.getElementById("text-next-grid").innerHTML = LaenderTexte[0];

});

$(window).on('resize', function() {
    checkResize();
});

function checkResize() {

    var win = $(this);


    //If - Braucht echt große Hilfe
    /*if (win.width() <= 1171) {
        $(".breaker").css("background-color", "rgba(0, 0, 0, 0.075)");

        $("#grid-div div").css("float", "left");

        $("#grid-div div").css("clear", "none");

    } else { //else pfad entfernt nicht die #grid-div div formatierung egal was probiert
        $(".breaker").css("background-color", "rgba(0, 0, 0, 0.075)");
    }*/

    if (win.width() <= 1277) {
        $(".topnav a.active").css("background-color", "rgba(0, 0, 0, 0)");
        $(".topnav a.active").css("color", "red");

    } else {
        $(".topnav a.active").css("background-color", "rgba(187, 19, 19, 0.562)");
        $(".topnav a.active").css("color", "white");


    }
}


function init() {

}



/* Changes text next to BundesländerWappen to LaenderTexte*/

var LaenderTexte = [
    "Wien ist die Bundeshauptstadt der Republik Österreich und zugleich eines der neun österreichischen Bundesländer. Mit rund 1,9 Millionen Einwohnern ist das an der Donau gelegene Wien die bevölkerungsreichste Großstadt und Primatstadt Österreichs, die zweitgrößte im deutschen Sprachraum sowie die fünftgrößte Stadt der Europäischen Union.[9] Im Großraum Wien leben etwa 2,8 Millionen Menschen – das entspricht rund einem Drittel der österreichischen Gesamtbevölkerung.",
    "Niederösterreich ist flächenmäßig Österreichs größtes Bundesland und nach der Bevölkerung das zweitgrößte. Erstmals erwähnt wurde es als Ostarrîchi im Jahr 996 n. Chr., erlangte als Erzherzogtum Österreich unter der Enns seine größte Ausdehnung und ist seit 1920 ein Bundesland. 1986 wurde St. Pölten Landeshauptstadt. Niederösterreich ist Teil der Europaregion Centrope.",
    "Die Steiermark ist eines der neun Bundesländer der Republik Österreich. Ihre Hauptstadt ist Graz, welche gefolgt von Leoben, Kapfenberg, Bruck an der Mur und Feldbach nach Einwohnern auch mit Abstand die größte Stadt der Steiermark ist. Das flächenbezogen zweitgrößte, der Einwohnerzahl nach das viertgrößte Bundesland Österreichs grenzt an die österreichischen Bundesländer Kärnten, Salzburg, Oberösterreich, Niederösterreich und das Burgenland sowie im Süden an die Republik Slowenien. Die Bewohner werden als Steirer bezeichnet.",
    "Oberösterreich ist ein österreichisches Bundesland; Landeshauptstadt ist Linz. Oberösterreich ist mit 11.982 Quadratkilometern flächenmäßig das viertgrößte und mit 1,47 Millionen Einwohnern bevölkerungsmäßig das drittgrößte Bundesland Österreichs. Es grenzt an Bayern (Deutschland), Südböhmen (Tschechien) sowie innerösterreichisch an Niederösterreich, die Steiermark und das Land Salzburg. Der Name des Landes leitet sich ab vom Namen des Vorgängerterritoriums, des Erzherzogtums Österreich ob der Enns, einem der habsburgischen Erblande.",
    "Salzburg (bairisch-österreichisch Soizbuag ausgesprochen) ist die Landeshauptstadt des gleichnamigen Landes der Republik Österreich. Mit 154.211 Einwohnern (Stand 1. Jänner 2019)[2] ist sie nach Wien, Graz und Linz die viertgrößte Stadt Österreichs. Prägend für die Stadt, die im Salzburger Becken liegt, sind die Stadtberge und die Salzach, die mitten durch das Stadtgebiet fließt. Der Nordwesten der Statutarstadt Salzburg grenzt an Freilassing in Deutschland (Freistaat Bayern, Landkreis Berchtesgadener Land), das übrige Stadtgebiet an den Bezirk Salzburg-Umgebung, landläufig Flachgau genannt.",
    "Tirol ist eine Region in den Alpen im Westen Österreichs und Norden Italiens. Seit dem Jahr 2011 besitzt das historische Gebiet mit der Europaregion Tirol–Südtirol–Trentino eine eigene Rechtspersönlichkeit in Form eines Europäischen Verbundes für territoriale Zusammenarbeit.",
    "Kärnten (früher auch Kärnthen; slowenisch Koroška, ist das südlichste Bundesland der Republik Österreich. Landeshauptstadt ist Klagenfurt am Wörthersee. Kärnten grenzt im Westen an das Bundesland Tirol, im Norden an Salzburg, im Norden und Osten an die Steiermark und im Süden an Italien und Slowenien.",
    "Vorarlberg ist ein Bundesland im Westen der Republik Österreich. Die Landeshauptstadt ist Bregenz. Auch Ländle genannt, ist es das westlichste und flächen- wie bevölkerungsmäßig zweitkleinste Bundesland Österreichs.",
    "Das Burgenland ist ein Land der Republik Österreich. Die Landeshauptstadt ist Eisenstadt. Von den neun Ländern Österreichs ist es das östlichste und gemessen an seiner Einwohnerzahl kleinste. Das Gebiet gehörte einst zum Königreich Ungarn, das im Vertrag von Trianon 1920 verpflichtet wurde, das damalige Deutsch-Westungarn an die neue Republik Österreich abzutreten. 1921 kam die Landnahme des Burgenlandes zu einem Abschluss; das neu hinzugekommene Land wurde danach in Burgenland umbenannt."
]

function changeLandText(land) {
    console.log(land);

    document.cookie = "Land=" + land + ";";
    document.getElementById("text-next-grid").innerHTML = LaenderTexte[land - 1];
}

/*Sticky header*/
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 740 || document.documentElement.scrollTop > 740) {
        $(".topnav").css("background-color", "rgba(255, 255, 255, 0.881)");
        $(".topnav a").css("color", "rgba(0, 0, 0)");
        $(".topnav a.active").css("background-color", "rgba(187, 19, 19, 0.862)");

    } else {
        $(".topnav").css("background-color", "rgba(0, 0, 0, 0.281)");
        $(".topnav a").css("color", "rgba(255, 255, 255)");
        $(".topnav a.active").css("background-color", "rgba(187, 19, 19, 0.562)");

    }
}