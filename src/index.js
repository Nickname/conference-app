// Intégration de bootstrap (partie JS)
import 'bootstrap';
// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'
// intégration JQuery
window.$ = window.jQuery = require('jquery');

import App from './app'

let app = new App()
app.init()

window.addEventListener('load', () => {
    window.onhashchange = () => {
        app.router();
    };
    app.router();
});
/*
talkService.findAllSpeakers()
    .then((speakers) => console.log(speakers))*/
