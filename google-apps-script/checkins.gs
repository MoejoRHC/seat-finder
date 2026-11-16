/**
 * Seat Finder: optional check-in log for Google Sheets.
 *
 * What it does: each time a guest taps "I've arrived", a row is added to a tab
 * called "Checkins" in this spreadsheet (time, name, table, seat, mobile ending).
 *
 * Set-up (once):
 * 1. Open your guest list Google Sheet. Choose Extensions > Apps Script.
 * 2. Delete any code shown, paste this whole file in, and click Save.
 * 3. Click Deploy > New deployment. Choose type "Web app".
 *      Execute as: Me
 *      Who has access: Anyone
 *    Click Deploy and approve the permissions Google asks for.
 * 4. Copy the "Web app URL" and paste it into config.js as checkinUrl.
 *
 * Open the Checkins tab during the party to see who has arrived.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    var book = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = book.getSheetByName('Checkins') || book.insertSheet('Checkins');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Time', 'Name', 'Table', 'Seat', 'Mobile ending', 'Event']);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([
      new Date(),
      String(data.name || '').slice(0, 120),
      String(data.table || '').slice(0, 10),
      String(data.seat || '').slice(0, 10),
      "'" + String(data.last5 || '').replace(/\D/g, '').slice(0, 5),
      String(data.event || '').slice(0, 120)
    ]);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}

/** Lets you open the web app link in a browser to confirm it is live. */
function doGet() {
  return ContentService.createTextOutput('Seat Finder check-in log is running.');
}
