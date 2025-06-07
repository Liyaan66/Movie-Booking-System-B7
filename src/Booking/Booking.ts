import { Movie } from "../Movie/Movie";
import { Showtime } from "../Showtime/Showtime";
import { Seats } from "../Seats/Seats";
import { Customer } from "../Users/Customer";

export class Booking {
    bookingID: number;
    customer: Customer;
    movie: Movie;
    showtime: Showtime;
    seat: Seats;
    ticketID: number;
    bookingDate: Date;
    totalPrice: number;

    constructor(
        bookingID: number,
        customer: Customer,
        movie: Movie,
        showtime: Showtime,
        seat: Seats,
        ticketID: number,
        bookingDate: Date,
        totalPrice: number
    ) {
        this.bookingID = bookingID;
        this.customer = customer;
        this.movie = movie;
        this.showtime = showtime;
        this.seat = seat;
        this.ticketID = ticketID;
        this.bookingDate = bookingDate;
        this.totalPrice = totalPrice;
    };
    getBookingDetails() {
        return {
            bookingID: this.bookingID,
            customerName: this.customer.getName(),
            movie: this.movie.getTitle(),
            showtime: this.showtime.getDetails(),
            seat: this.seat.getSeatDetails(),
            bookingDate: this.bookingDate,
            totalPrice: `$${this.totalPrice.toFixed(2)}`
        };
    };
    cancelBooking(): void {
        console.log(`Booking ${this.bookingID} cancelled. Refund: $${this.totalPrice.toFixed(2)}`);
    }

    public getBookingID(): number {
    return this.bookingID;
  }

  public getCustomerID(): number {
    return this.customer.getCustomerID(); // Calls method from Customer
}


  public getTotalPrice(): number {
    return this.totalPrice;
}

};