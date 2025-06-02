
import { Customer } from "./Users/Customer";
import { Staff } from "./Users/Staff";
import { Movie } from "./Movie/Movie";
import { Booking } from "./Booking/Booking";
import { Screen } from "./Screen/Screen";
import { Feedback } from "./Feedback/Feedback";
import { Seats } from "./Seats/Seats"
import { ZoneType } from "./Zones/Zones";


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



//TEST SCREEN 
const screen1 = new Screen(2, '24 Inch', 3);
console.log(screen1);


//TEST FEEDBACK 
const feedback = new Feedback(customer1,"FB1", "89", 900,"Hello all ");
console.log(feedback);


// TEST ZONETYPE
const zone2 = new ZoneType(1, "A06", "VIP");
zone2.setZoneType("STANDARD");
console.log(zone2.chooseZone());


// TEST SEATS
const seats1 = new Seats(2, "09", "Available", true, zone2); 
console.log(seats1.reserve());
console.log(seats1);


