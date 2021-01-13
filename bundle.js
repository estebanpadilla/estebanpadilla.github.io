window.addEventListener('load', init, false);

function init() {

    console.log('App running OK!');


    var request = new XMLHttpRequest();
    request.onload = function (e) {
        if (this.status >= 200 && this.status < 300) {
            console.log('reques 1');
        } else {
            console.log('reques 2');
        }
    }
    request.onerror = function () {
        console.log('reques error');
    };


    request.open("POST", 'http://private.gamestudiocr.com:8075/games/aspNET/CasinoLobby/Services.asmx?op=LoginMethod');
    // request.open("POST", '/games/aspNET/CasinoLobby/Services.asmx?op=LoginMethod');
    request.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    request.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");
    // request.setRequestHeader('Host', 'private.gamestudiocr.com');
    request.setRequestHeader('SOAPAction', 'http://casino-solutions.com/CasinoLobby/LoginMethod');
    request.send(body);
}
