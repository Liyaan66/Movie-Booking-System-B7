export class Booking {
    bookingID: number;
    customerID: number;
    movieId: number;
    showTime: Date; // Changed to Date for easier comparison
    seatID: number;
    ticketID: number;
    bookingDate: Date;
    totalPrice: string; // Formatted as "$X.XX" per your previous preference

    constructor(
        bookingID: number,
        customerID: number,
        movieId: number,
        showTime: Date,
        seatID: number,
        ticketID: number,
        bookingDate: Date,
        totalPrice: number
    ) {
        this.bookingID = bookingID;
        this.customerID = customerID;
        this.movieId = movieId;
        this.showTime = showTime;
        this.seatID = seatID;
        this.ticketID = ticketID;
        this.bookingDate = bookingDate;
        this.totalPrice = `$${totalPrice.toFixed(2)}`;
    }

    getBookingDetails(): object {
        return {
            bookingID: this.bookingID,
            customerID: this.customerID,
            movieId: this.movieId,
            showTime: this.showTime.toISOString(),
            seatID: this.seatID,
            ticketID: this.ticketID,
            bookingDate: this.bookingDate.toISOString(),
            totalPrice: this.totalPrice
        };
    }
    
}

