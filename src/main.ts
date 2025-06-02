
import { Customer } from "./Users/Customer";
import { Staff } from "./Users/Staff";
import { Movie } from "./Movie/Movie";
import { Booking } from "./Booking/Booking";
import { Showtime } from "./Showtime/Showtime";




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
const booking1 = new Booking(1, 1, 1, "2025-06-10 18:00", 1, 1, new Date(), 10.00);
console.log(booking1.getBookingDetails());
// Cancel booking
booking1.cancelBooking();


//TEST SHOWTIME
const movie = new Movie(1, "Harry Potter", "Magic", 60);
const showtime = new Showtime(1, movie, 5, new Date(), new Date(), new Date());

// Print seat map
console.log("Seat Map:");
console.log(showtime.getSeatMap());

// Print available seats
console.log("Available Seats:");
console.log(showtime.getAvailableSeats());