import { Customer } from "./Users/Customer";
import { Staff } from "./Users/Staff";
import { Movie } from "./Movie/Movie";
import { Booking } from "./Booking/Booking";
import { QRCodeManager, ReceiveTicket } from "./Booking/ReceiveTicket";
import { CustomerTicket } from "./Booking/CustomerTicket";
import { writeFile } from 'fs/promises';

// ------------ Tests ------------

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

// TEST MOVIE
const movie1 = new Movie(1, "Avengers: Endgame", "Action", 181); 
console.log(movie1.getDetails());
console.log("Showtimes on 2025-06-01:", movie1.getShowTime("2025-06-01"));

// TEST BOOKING
const booking1 = new Booking(1, 1, 1, "2025-06-10T18:00:00", 1, 1, new Date(), 4.50);
console.log(booking1.getBookingDetails());
booking1.cancelBooking();

// ------------ QR Code Ticket Test ------------
async function testQRCode() {
   const customerTicket = new CustomerTicket(
    booking1.bookingID,
    booking1.customerID,
    booking1.seatID,
    "Avengers: Endgame",
    "Cinema XYZ",
    181,
    booking1.bookingDate,
    4.50 // Manually pass the ticket price
);

    const qrCodeManager = new QRCodeManager();
    const ticket: ReceiveTicket = await qrCodeManager.generateTicket(customerTicket);

    console.log("✅ QR Code Ticket Test");
    console.log("Reference Number:", ticket.getReferenceNumber());
    console.log("QR Code (base64):", ticket.getQrCode());

    const base64Data = ticket.getQrCode().replace(/^data:image\/png;base64,/, "");
    await writeFile("qrcode.png", base64Data, 'base64');
    console.log("QR Code saved as qrcode.png");

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head><title>QR Code</title></head>
        <body>
            <h1>QR Code for Booking</h1>
            <img src="${ticket.getQrCode()}" alt="QR Code" />
        </body>
        </html>
    `;
    await writeFile("qrcode.html", htmlContent);
    console.log("HTML file created as qrcode.html. Open it in a browser to view the QR code.");
}

testQRCode().catch(err => console.error("Test failed:", err));
