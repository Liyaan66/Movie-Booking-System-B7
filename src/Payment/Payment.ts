export class Payment {
    private paymentID: number;
    private bookingID: number;
    private amount: number;
    private ticketPrice: number;
    private paymentDate: string;

    constructor(paymentID: number, bookingID: number, amount: number, ticketPrice: number, paymentDate: string) {
        this.paymentID = paymentID;
        this.bookingID = bookingID;
        this.amount = amount;
        this.ticketPrice = ticketPrice;
        this.paymentDate = paymentDate;
    }

    public processPayment(): boolean {
        if (this.amount >= this.ticketPrice) {
            // Payment is successful
            this.paymentDate = new Date().toISOString(); // set current date
            return true;
        } else {
            // Payment failed due to insufficient amount
            return false;
        }
    }

    public getPaymentStatus(): string {
        if (this.paymentDate && this.paymentDate !== "") {
            return "Paid";
        } else {
            return "Pending";
        }
    }
}
