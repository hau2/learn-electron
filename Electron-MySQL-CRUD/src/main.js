const {BrowserWindow} = require('electron')

function hello(){
    console.log('hello');
}
let window
function createWindow(){
    window = new BrowserWindow({
        width: 800,
        height: 600,
        // webPreferences: {
        //     nodeIntegration: true,
        //     preload: path.join(__dirname, 'app.js')
        // }
    })
    window.loadFile('src/ui/index.html');
}
module.exports = {
    createWindow,
    hello
}