import { Movie } from "../Movie/Movie";
import { Showtime } from "../Showtime/Showtime";
import { Seats } from "../Seats/Seats";
import { Customer } from "../Users/Customer";
import { Review } from "./Review";

export class Booking {
    bookingID: number;
    customer: Customer;
    movie: Movie;
    showtime: Showtime;
    seat: Seats;
    ticketID: number;
    bookingDate: Date;
    totalPrice: number;
    private review: Review | null = null;

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
    getBookingDate(): Date {
        return this.bookingDate;
    }

    public getBookingID(): number {
        return this.bookingID;
    }
    public getCustomerID(): number {
        return this.customer.getCustomerID();
    }
    public getTotalPrice(): number {
        return this.totalPrice;
    }
    
    public addReview(rating: number, comment: string): void {
        const now = new Date();
        const showDate = new Date(this.showtime.getDetails());
        if (now < showDate) {
            throw new Error("Cannot review a movie before the showtime.");
        }
        if (this.review) {
            throw new Error(`A review for booking ${this.bookingID} already exists.`);
        }
        this.review = new Review(this.bookingID, rating, comment);
        console.log(`Review added for booking ${this.bookingID}: ${rating} stars, "${comment}"`);
    }

    public getReview(): Review | null {
        return this.review;
    }
};