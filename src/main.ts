import { writeFile } from "fs/promises";
import { Movie } from "./Movie/Movie";
import { Customer } from "./Users/Customer";
import { Staff } from "./Users/Staff";
import { Hall } from "./Hall/Hall";
import { Screen } from "./Screen/Screen";
import { Feedback } from "./Feedback/Feedback";
import { Seats } from "./Seats/Seats";
import { ZoneType } from "./Zones/Zones";
import { Showtime } from "./Showtime/Showtime"
import { QRCodeManager, ReceiveTicket } from "./Booking/ReceiveTicket";
import { CustomerTicket } from "./Booking/CustomerTicket";
import { Booking } from "./Booking/Booking";
import { Payment } from "./Payment/Payment"


// === Login & Logout ===

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

const hallA = new Hall(1, "Hall A");
const hallB = new Hall(2, "Hall B");

const movie1 = new Movie(1, "Action Movie", "Action", 120);
const movie2 = new Movie(2, "Comedy Show", "Comedy", 90);
const movie3 = new Movie(3, "កន្ទួងខៀវ", "Horro", 2);

const showtime1 = new Showtime(1, movie1, hallA, "2025-06-03", "14:00", "16:00");
const showtime2 = new Showtime(2, movie2, hallA, "2025-06-03", "16:30", "18:00");
const showtime3 = new Showtime(3, movie3, hallB, "2024-12-20", "12:00", "14:00");

movie1.addShowtime(showtime1);
movie2.addShowtime(showtime2);
movie3.addShowtime(showtime3);

const showtimes = movie1.getShowtimes();
if (showtimes.length > 0) {
  console.log("Showtime Details:", showtimes[0].getDetails());
}

console.log(" - Movie 1:", movie1.getDetails());
console.log(" - Showtimes for Movie 1:", movie1.getShowtimes()[0].getDetails());

console.log(" - Movie 3:", movie3.getDetails());
console.log(" - Showtimes for Movie 3:", movie3.getShowtimes()[0].getDetails());




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


// 3.	As a user, I want to pay for my booking and receive a digital ticket.
const booking = {
  getBookingID: () => 123,
  getCustomerID: () => 456,
  getTotalPrice: () => "$15.00",  // returns string with dollar sign
} as unknown as Booking; // Type cast for test simplicity

// Create Payment instance
const payment = new Payment(1001, booking);

// Before processing payment
console.log("Payment status before processing:", payment.getPaymentStatus());

// Process payment
const success = payment.processPayment();

console.log("Payment processed successfully:", success);
console.log("Payment status after processing:", payment.getPaymentStatus());
console.log("Payment details:\n", payment.getPaymentDetails());
console.log("Total price : ", booking.getTotalPrice());

// 5.	As a cinema staff member, I want to check the QR code for a valid ticket.
const customerTicket = new CustomerTicket(
  101,
  1,
  12,
  movie1.getDetails().split("\n")[0],
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




