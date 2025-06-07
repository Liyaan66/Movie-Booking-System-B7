import { writeFile } from "fs/promises";
import { Movie } from "./Movie/Movie";
import { Customer } from "./Users/Customer";
import { Staff } from "./Users/Staff";
import { Hall } from "./Hall/Hall";
import { Booking } from "./Booking/Booking";
import { Screen } from "./Screen/Screen";
import { Feedback } from "./Feedback/Feedback";
import { Seats } from "./Seats/Seats";
import { ZoneType } from "./Zones/Zones";
import { Showtime } from "./Showtime/Showtime"
import { QRCodeManager, ReceiveTicket } from "./Booking/ReceiveTicket";
import { CustomerTicket } from "./Booking/CustomerTicket";


// === Your existing tests and usage ===

// TEST CUSTOMER
const customer1 = new Customer("Alice", 1, "alice@mail.com", "Female", "pass123");
customer1.register("Alice", "alice@mail.com", "pass123");
console.log("Login success:", customer1.login("alice@mail.com", "pass123"));
console.log("Bookings:", customer1.viewBookings());
customer1.logout();

// TEST STAFF
const staff1 = new Staff("Bob", 1001, "bob@cinema.com", "Male", "admin321", "Manager");
staff1.register("Bob", "bob@cinema.com", "admin321");
console.log("Login success:", staff1.login("bob@cinema.com", "admin321"));
staff1.logout();

// TEST SCREEN
const screen1 = new Screen(2, "24 Inch", 3);
console.log(screen1);

// TEST FEEDBACK
const feedback = new Feedback(customer1, "FB1", "89", 900, "Hello all ");
console.log(feedback);

// TEST ZONETYPE
const zone2 = new ZoneType(1, "A06", "VIP");
zone2.setZoneType("STANDARD");
console.log(zone2.chooseZone());

// User story 1: Browse movies and showtimes

// Create halls
const hallA = new Hall(1, "Hall A");
const hallB = new Hall(2, "Hall B");

// Create movies
const movie1 = new Movie(1, "Action Movie", "Action", 120);
const movie2 = new Movie(2, "Comedy Show", "Comedy", 90);
const movie3 = new Movie(3, "កន្ទួងខៀវ", "Horro", 2);

// Create showtimes with Movie and Hall objects
const showtime1 = new Showtime(1, movie1, hallA, "2025-06-03", "14:00", "16:00");
const showtime2 = new Showtime(2, movie2, hallA, "2025-06-03", "16:30", "18:00");
const showtime3 = new Showtime(3, movie3, hallB, "2024-12-20", "12:00", "14:00");

// Add showtimes to movies
movie1.addShowtime(showtime1);
movie2.addShowtime(showtime2);
movie3.addShowtime(showtime3);

// Access and print showtimes
const showtimes = movie1.getShowtimes();
if (showtimes.length > 0) {
  console.log("Showtime Details:", showtimes[0].getDetails());
}

console.log(" - Movie 1:", movie1.getDetails());
console.log(" - Showtimes for Movie 1:", movie1.getShowtimes()[0].getDetails());

// console.log(" - Movie 3:", movie3.getDetails());
// console.log(" - Showtimes for Movie 3:", movie3.getShowtimes()[0].getDetails());

// User story 2: View seat availability and choose seats

const zoneA = new ZoneType(1, "zone A", "VIP");
const zoneB = new ZoneType(2, "Zone B", "Standard");

const seat1 = new Seats(1, "Z1", "Available", true, zoneA);
const seat2 = new Seats(2, "Z2", "Reserved", true, zoneB);
const seat3 = new Seats(3, "Z1", "Available", true, zoneA);

console.log("Seat Details as of 06:08 PM +07 on Tuesday, June 03, 2025:");
seat1.getSeatDetails();
seat2.getSeatDetails();
seat3.getSeatDetails();

console.log("\nChoosing Seat 2:");
console.log(seat2.chooseAndReserve());

console.log("Updated Seat Details:");
seat1.getSeatDetails();
seat2.getSeatDetails();
seat3.getSeatDetails();

// === Generate QR code from a sample CustomerTicket ===

const customerTicket = new CustomerTicket(
  101,
  1,
  12,
  movie1.getDetails().split("\n")[0], // Just grabbing movie name from getDetails() for example
  hallA.getHallName(),
  movie1.getDuration(),
  new Date("2025-06-03T14:00:00"),
  15.0
);



async function testQRCode() {
  const qrCodeManager = new QRCodeManager();
  const ticket = await qrCodeManager.generateTicket(customerTicket);

  console.log("Reference Number:", ticket.getReferenceNumber());
  console.log("QR Code (base64):", ticket.getQrCode());

  // Save the QR code image file
  const base64Data = ticket.getQrCode().replace(/^data:image\/png;base64,/, "");
  await writeFile("qrcode.png", base64Data, "base64");

  // Save an HTML file to view QR code and ticket details
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head><title>QR Code</title></head>
      <body>
        <h1>Ticket QR Code</h1>
        <img src="${ticket.getQrCode()}" />
        <pre>${ticket.getTicket().getTicketDetails()}</pre>
      </body>
    </html>
  `;

  await writeFile("qrcode.html", htmlContent);

  console.log("QR code image and HTML file created.");
}

testQRCode().catch(console.error);


// User story 4: view my upcoming and past bookings
const customer = new Customer("Channak",1, "channak@gmail.com","Female", "nak123");
const pastDate = new Date("2025-06-06 12:00");
const booking1 = new Booking(1, customer, movie1, showtime1, seat1, 1001, pastDate, 19);  // past booking
const booking2 = new Booking(2, customer, movie2, showtime2, seat2, 1002, new Date(), 12.5); // upcoming booking
customer.addBooking(booking1);
customer.addBooking(booking2);
customer.displayBookings(customer.viewUpcomingBookings(), "Upcoming");
customer.displayBookings(customer.viewPastBookings(), "Past");
const viewPastBookings = customer1.viewPastBookings();
console.log("Past Bookings:", viewPastBookings);


// User story 6: rate and review my movie experience after the show
// Example usage
const movie = new Movie(1, "Inception", "Sci-Fi", 148);
const showtime = new Showtime(1, movie, hallA, "2025-06-06", "18:00", "20:30");
const booking = new Booking(1, customer, movie, showtime, seat1, 101, new Date("2025-06-05"), 15.00);
customer.addBooking(booking);
customer.addReviewForBooking(1, 4, "Great movie, but the seats were a bit uncomfortable.");
customer.displayReviews();
