import { Booking } from "../Booking/Booking";

export class Payment {
  private paymentID: number;
  private booking: Booking;
  private amount: number;
  private paymentDate: string = "";

  constructor(paymentID: number, booking: Booking) {
    this.paymentID = paymentID;
    this.booking = booking;
    this.amount = this.booking.getTotalPrice();
    
  }


  public processPayment(): boolean {
    if (this.amount >= this.booking.getTotalPrice()) {
      this.paymentDate = new Date().toISOString();
      return true;
    } else {
      return false;
    }
  }

  public getPaymentStatus(): string {
    return this.paymentDate !== "" ? "Paid" : "Pending";
    
  }

  public getPaymentDetails(): string {
    return `
      Payment ID: ${this.paymentID}
      Booking ID: ${this.booking.getBookingID()}
      Customer ID: ${this.booking.getCustomerID()}
   
      Status: ${this.getPaymentStatus()}
      Date: ${this.paymentDate || "N/A"}
    `;
  }
}
