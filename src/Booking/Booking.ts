export class Booking {
    bookingID: number;
    customerID: number;
    movieID: number;
    seatNumber: string;
    bookingDate: string;
    paymentStatus: string;

    constructor(bookingID: number, customerID: number, movieID: number, seatNumber: string, bookingDate: string, paymentStatus: string) {
        this.bookingID = bookingID;
        this.customerID = customerID;
        this.movieID = movieID;
        this.seatNumber = seatNumber;
        this.bookingDate = bookingDate;
        this.paymentStatus = paymentStatus;
    }

    getDetails(): string {
        return `Booking: ID ${this.bookingID}, Customer ID: ${this.customerID}, Movie ID: ${this.movieID}`;
    }

    update(data: any): void {
        Object.assign(this, data);
    }
}