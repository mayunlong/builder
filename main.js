const { app, BrowserWindow } = require('electron')
const path = require('path')
function createWindow() {
    // 创建浏览器窗口
    let win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.maximize();
    // win.loadURL("http://localhost:3000/")
    // win.loadFile(`file://${path.join(__dirname, './build/index.html')}`);
    win.loadFile(`${path.join(__dirname, './build/index.html')}`);
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)