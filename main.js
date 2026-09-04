const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 650,
    autoHideMenuBar: true, // يخفي شريط القوائم الافتراضي لـ Electron حتى يبقى مظهر البرنامج كما هو تمامًا
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // إزالة القائمة العلوية الافتراضية (File / Edit / View ...) نهائيًا
  Menu.setApplicationMenu(null);

  win.loadFile('index.html');

  // لو حاب تفتح أدوات المطور تلقائيًا وقت الاختبار، فك التعليق عن السطر التالي:
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
