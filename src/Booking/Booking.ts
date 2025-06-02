export class Booking {
    bookingID: number;
    customerID: number;
    movieId: number;
    showTime: string;
    seatID: number;
    ticketID: number;
    bookingDate: Date;
    totalPrice: string;

    constructor(
        bookingId: number,
        customerId: number,
        movieId: number,
        showTime: string,
        seatID: number,
        ticketID: number,
        bookingDate: Date,
        totalPrice: number
    ) {
        this.bookingID = bookingId;
        this.customerID = customerId;
        this.movieId = movieId;
        this.showTime = showTime;
        this.seatID = seatID;
        this.ticketID = ticketID;
        this.bookingDate = bookingDate;
        this.totalPrice = `$${totalPrice.toFixed(2)}`;
    }

    createBooking(
        bookingId: number,
        customerId: number,
        movieId: number,
        showTime: string,
        seatID: number,
        ticketID: number,
        bookingDate: Date,
        totalPrice: number
    ) {
        this.bookingID = bookingId;
        this.customerID = customerId;
        this.movieId = movieId;
        this.showTime = showTime;
        this.seatID = seatID;
        this.ticketID = ticketID;
        this.bookingDate = bookingDate;
        this.totalPrice = `$${totalPrice.toFixed(2)}`; // Format totalPrice as string with "$"
    }

    getBookingDetails() {
        return {
            bookingId: this.bookingID,
            customerId: this.customerID,
            movieId: this.movieId,
            showTime: this.showTime,
            seatID: this.seatID,
            ticketID: this.ticketID,
            bookingDate: this.bookingDate,
            totalPrice: this.totalPrice
        };
    }

    cancelBooking(): void {
        if (this.bookingID > 0) {
            console.log(`Booking ${this.bookingID} has been cancelled. Refund of ${this.totalPrice} will be processed.`);
            this.bookingID = -1;
        } else {
            console.log("Invalid booking ID. No action taken.");
        }
    }
}

