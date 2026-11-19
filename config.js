/*
  Seat Finder: event settings
  Change the values below for each new event, save, and upload this file again.
  Keep the quote marks around text values.
*/
window.SEAT_FINDER_CONFIG = {
  // Event details. The welcome screen reads:
  //   "Welcome to [celebrantTitle] [celebrant]'s [occasion]"
  celebrantTitle: 'Iye no\u2019gie',
  celebrant: 'Nekpen Edosomwan',
  occasion: 'Birthday Party',
  shortTitle: 'Nekpen at 70',
  date: 'Saturday 21 November 2026',
  time: 'From 5:00 pm',
  venue: 'Star Palace',
  address: '15 Railway Pde, Fairfield NSW 2165',

  // Celebrant photos. To change them, replace these files with new photos of the same name.
  photo: 'assets/celebrant.jpg',              // full photo behind every screen (portrait shape)
  portrait: 'assets/celebrant-portrait.jpg',  // square close-up used on the printed QR sign

  // How guests find themselves
  //   'name'   = type the first few letters of their name (no phone numbers needed)
  //   'mobile' = enter the last 5 digits of their mobile (the guest list needs a mobile_last5 column)
  searchBy: 'name',

  // What guests see
  showSeat: false,      // true = also show the seat number (the guest list needs a seat column)
  showPlusOne: false,   // true = also name the guest's plus-one (needs a plus_one_name column)
  diceRoll: true,       // false = skip the dice roll and show the table straight away

  // Floor plan shown under the table number, as seen from the entrance looking at the stage.
  // Each line is one row of the room. Use a table number, 'Stage', 'Dance' or null for an empty spot.
  // Delete this whole floorPlan block to show the tables as a simple numbered row instead.
  floorPlan: [
    [null, 23, 17, 15, 1, 'Stage', 2,  8, 14, 20, null],
    [29,   25, 19, 13, 3, 'Dance', 4, 10, 16, 22, 26],
    [31,   27, 21, 11, 5, null,    6, 12, 24, 18, 28]
  ],

  // Colours taken from the celebrant's outfit
  accent: '#C2DE7E',    // pistachio (buttons, glow, table die)
  accent2: '#7FA3A0',   // sage-teal (secondary glow)

  // Guest list source.
  // Leave blank to use the list in guests.js.
  // To use a Google Sheet, paste its "Publish to web" CSV link between the quotes.
  googleSheetCsvUrl: '',

  // Optional: Google Apps Script web app link that records check-ins in your Sheet.
  // Leave blank to keep check-ins on each guest's phone only.
  checkinUrl: '',

  // Only used when showSeat is true ("Seat 37 of 120")
  totalSeats: 266,

  // Credit line at the bottom of every screen. Leave both blank to hide it.
  credit: 'Designed and Powered by Moejo',
  creditEmail: 'contactmoejo@gmail.com'
};
