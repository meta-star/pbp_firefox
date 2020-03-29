/*jshint esversion: 6 */
let socket = new WebSocket('wss://client.starinc.xyz/pbp/ws');

socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
    let response = JSON.parse(event.data);
    if ((response.status === 200) && (response.trust_score < 0.5)) {
        console.log('Warning');
    }
});

function send_sic(data) {
    socket.send(
        JSON.stringify(data)
    );
}