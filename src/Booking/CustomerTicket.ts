import { Booking } from "./Booking";
export class CustomerTicket {
    private bookings: Booking[] = [];
    ticketID: number;
    customerID: number;
    seatID: number;
    movieName: string;
    hallName: string;
    duration: number;
    bookingDate: Date;
    ticketPrice: number;
    constructor(
        ticketID: number,
        customerID: number,
        seatID: number,
        movieName: string,
        hallName: string,
        duration: number,
        bookingDate: Date,
        ticketPrice: number
    ) {
        this.ticketID = ticketID;
        this.customerID = customerID;
        this.seatID = seatID;
        this.movieName = movieName;
        this.hallName = hallName;
        this.duration = duration;
        this.bookingDate = bookingDate;
        this.ticketPrice = ticketPrice;
    }
    getTicketDetails() {
        return `
        Ticket ID: ${this.ticketID}
        Customer ID: ${this.customerID}
        Seat ID: ${this.seatID}
        Movie Name: ${this.movieName}
        Hall Name: ${this.hallName}
        Duration: ${this.duration} minutes
        Booking Date: ${this.bookingDate}
        Ticket Price: $${this.ticketPrice.toFixed(2)}
        `
    }
}
