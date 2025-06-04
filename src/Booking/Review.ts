// import { Customer } from "../Users/Customer";
export class Review {
    private reviewID: number;
    private customerID: number;
    private showtimeID: number;

    constructor(reviewID: number, customerID: number, showtimeID: number) {
        this.reviewID = reviewID;
        this.customerID = customerID;
        this.showtimeID = showtimeID;
    }

    public getReviewDetail(): string {
        return `Review ID: ${this.reviewID}, Customer ID: ${this.customerID}, Showtime ID: ${this.showtimeID}`;
    }
    public getReviewID(): number {
        return this.reviewID;
    }
    public getCustomerID(): number {
        return this.customerID;
    }
    public getShowtimeID(): number {
        return this.showtimeID;
    }

}

