import { Movie } from "./Movie/Movie";
import { Customer } from "./Users/Customer";
import { Staff } from "./Users/Staff";
import { Booking } from "./Booking/Booking";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 17c1697b937486949be7d916ef2ba95b5bf59277
import { Screen } from "./Screen/Screen";
import { Feedback } from "./Feedback/Feedback";
import { Seats } from "./Seats/Seats"
import { ZoneType } from "./Zones/Zones";
import { Showtime } from "./Showtime/Showtime";
<<<<<<< HEAD
import { QRCodeManager, ReceiveTicket } from "./Booking/ReceiveTicket";
import { CustomerTicket } from "./Booking/CustomerTicket";
import { writeFile } from 'fs/promises';
=======
import { CustomerTicket } from "./Booking/CustomerTicket";
import { Review } from "./Booking/Review";
=======
import { QRCodeManager, ReceiveTicket } from "./Booking/ReceiveTicket";
import { CustomerTicket } from "./Booking/CustomerTicket";
import { writeFile } from 'fs/promises';
>>>>>>> 52bbbece17fe9692fa82eed9ce026c02ae89c189
>>>>>>> 17c1697b937486949be7d916ef2ba95b5bf59277


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


//TEST SCREEN 
const screen1 = new Screen(2, '24 Inch', 3);
console.log(screen1);


//TEST FEEDBACK 
const feedback = new Feedback(customer1,"FB1", "89", 900,"Hello all ");
console.log(feedback);

// TEST BOOKING
// const booking1 = new Booking(1, 1, 1, "2025-06-10 18:00", 1, 1, new Date(), 10.00);
// console.log(booking1.getBookingDetails());
// -Cancel booking
// booking1.cancelBooking();

<<<<<<< HEAD


// TEST CUSTOMER TICKET
const customerTicket1 = new CustomerTicket(18, 4, 15, "Avengers: Endgame", "AEON 3", 120, new Date(), 10.00);
console.log(customerTicket1.getTicketDetails());


// TEST REVIEW
const review = new Review(1, 10, 5);
console.log(review.getReviewDetail());




// TEST ZONETYPE
const zone2 = new ZoneType(1, "A06", "VIP");
zone2.setZoneType("STANDARD");
console.log(zone2.chooseZone());


// User stroy 1: As a user, I want to browse and filter movies by genre and showtimes.
const showtime1 = new Showtime(1, 1, 1, "2025-06-03", "14:00", "16:00");
const showtime2 = new Showtime(2, 2, 1, "2025-06-03", "16:30", "18:00");
const showtime3 = new Showtime(3, 3, 2, "2024-20-12", "12:00", "2:00");

const movie1 = new Movie(1, "Action Movie", "Action", 120, [showtime1]);
const movie2 = new Movie(2, "Comedy Show", "Comedy", 90, [showtime2]);
const movie3 = new Movie(2, "កន្ទួងខៀវ", "Horro", 2, [showtime3])

console.log(" - Movie 1:", movie1.getDetails());
console.log(" - Showtimes for Movie 1:", movie1.getShowtimes()[0].getDetails());

console.log(" - Movie 3:", movie3.getDetails());
console.log(" - Showtimes for Movie 3:", movie3.getShowtimes()[0].getDetails());


// User story 2: I want to view seat availability and choose my seats.

const zoneA = new ZoneType(1, "zone A", "VIP"); 
const zoneB = new ZoneType(2, "Zone B", "Standard");

const seat1 = new Seats(1, "Z1", "Available", true, zoneA);
const seat2 = new Seats(2, "Z2", "Reserved", true, zoneB); 
const seat3 = new Seats(3, "Z1", "Available", true, zoneA);

console.log("Seat Details as of 06:08 PM +07 on Tuesday, June 03, 2025:"); 
seat1.getSeatDetails();
seat2.getSeatDetails();
seat3.getSeatDetails();

console.log(" "); 
console.log("\nChoosing Seat 1:");
console.log(seat2.chooseAndReserve());
console.log("Updated Seat 1 Details:");
console.log(seat1.getSeatDetails());
console.log(seat2.getSeatDetails());
console.log(seat3.getSeatDetails());
console.log(" ");
<<<<<<< HEAD


=======
=======
>>>>>>> 17c1697b937486949be7d916ef2ba95b5bf59277
// ------------ QR Code Ticket Test ------------
const customerTicket = new CustomerTicket(
    1001,
    1,
    25,
    "Avengers: Endgame",
    "Hall A",
    181,
    new Date("2025-06-10T18:00:00"),
    12.50
);

async function testQRCode() {
    const qrCodeManager = new QRCodeManager();
    const ticket = await qrCodeManager.generateTicket(customerTicket);

    console.log("Reference Number:", ticket.getReferenceNumber());
    console.log("QR Code (base64):", ticket.getQrCode());

    // Save the QR code
    const base64Data = ticket.getQrCode().replace(/^data:image\/png;base64,/, "");
    await writeFile("qrcode.png", base64Data, 'base64');

    // Create HTML file
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
    console.log("QR code and HTML file created.");
}

<<<<<<< HEAD
testQRCode().catch(console.error);
=======
testQRCode().catch(console.error);
>>>>>>> 52bbbece17fe9692fa82eed9ce026c02ae89c189
>>>>>>> 17c1697b937486949be7d916ef2ba95b5bf59277
