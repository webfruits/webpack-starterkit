import {AppNameMain} from "./app-name/AppNameMain";

/* ----------------------------------------------------------------
 * Version
 * --------------------------------------------------------------*/

console.log("AppName " + process.env.version + " (" + (process.env.production ? "" : "dev-build") + ")");

/* ----------------------------------------------------------------
 * Initialize the App
 * --------------------------------------------------------------*/

let app = new AppNameMain();
document.body.appendChild(app.view);
