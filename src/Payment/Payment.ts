export class Payment{
    private paymentID: number;
    private bookingID: number;
    private amount: number;
    private ticketPrice: number;
    private paymentDate: string;

    constructor(paymentID: number, bookingID: number, amount: number,ticketPrice: number, paymentDate: string) {
       this.paymentID = paymentID;
       this.bookingID = bookingID;
       this.amount = amount;
       this.ticketPrice = ticketPrice;
       this.paymentDate = paymentDate; 
    }
}