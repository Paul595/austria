init();



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


    document.getElementById("text-next-grid").innerHTML = LaenderTexte[land - 1] + " nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  Lorem ipsum dolor  laborum. Lorem ipsum dolor  id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la";
}