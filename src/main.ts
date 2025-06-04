
import { Customer } from "./Users/Customer";
import { Staff } from "./Users/Staff";
import { Movie } from "./Movie/Movie";
import { Booking } from "./Booking/Booking";
import { CustomerTicket } from "./Booking/CustomerTicket";
import { Review } from "./Booking/Review";
import { BookingManager } from "./Booking/BookingManager";



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
// const booking1 = new Booking(1, 1, 1, "2025-06-10 18:00", 1, 1, new Date(), 10.00);
// console.log(booking1.getBookingDetails());
// -Cancel booking
// booking1.cancelBooking();



// TEST CUSTOMER TICKET
const customerTicket1 = new CustomerTicket(18, 4, 15, "Avengers: Endgame", "AEON 3", 120, new Date(), 10.00);
console.log(customerTicket1.getTicketDetails());


// TEST REVIEW
const review = new Review(1, 10, 5);
console.log(review.getReviewDetail());








// Example usage
const currentDate = new Date("2025-06-03T19:25:00+07:00"); // Current date and time

// TEST BOOKING           (customerID, movieID, seatID, showTime, hallID, staffID, bookingDate, ticketPrice)
const booking1 = new Booking(1, 101, 1, new Date("2025-06-04T20:00:00+07:00"), 1, 1001, new Date("2025-06-01T10:00:00+07:00"), 10);
const booking2 = new Booking( 2, 101, 2, new Date("2025-06-02T18:00:00+07:00"), 2, 1002, new Date("2025-06-01T12:00:00+07:00"), 12);
const booking3 = new Booking(3, 102, 3, new Date("2025-06-05T15:00:00+07:00"), 3, 1003, new Date("2025-06-02T09:00:00+07:00"), 15);

// Initialize BookingManager and add bookings
const bookingManager = new BookingManager();
bookingManager.addBooking(booking1);
bookingManager.addBooking(booking2);
bookingManager.addBooking(booking3);

// View bookings for customerID 101
const upcomingBookings = bookingManager.getUpcomingBookings(101, currentDate);
const pastBookings = bookingManager.getPastBookings(101, currentDate);

console.log("Upcoming Bookings:");
upcomingBookings.forEach((booking) => console.log(booking.getBookingDetails()));

console.log("Past Bookings:");
pastBookings.forEach((booking) => console.log(booking.getBookingDetails()));