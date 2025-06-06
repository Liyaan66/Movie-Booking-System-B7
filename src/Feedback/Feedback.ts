import { Customer } from "../Users/Customer";

export class Feedback {
  private customer: Customer;
  private feedbackID: string;
  private customerNumber: string;
  private rating: number;
  private comment: string;
  private updateDate: Date;

  constructor(customer: Customer, feedbackID: string, customerNumber: string, rating: number, comment: string) {
        this.customer = customer;
        this.feedbackID = feedbackID;
        this.customerNumber = customerNumber;
        this.rating = rating;
        this.comment = comment;
        this.updateDate = new Date();
    }


}