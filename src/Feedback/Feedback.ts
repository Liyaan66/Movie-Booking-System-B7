export class Feedback {
    private feedbackID: string;
  private customerNumber: string;
  private rating: number;
  private comment: string;
  private updateDate: Date;

  constructor(feedbackID: string, customerNumber: string, rating: number, comment: string) {
    this.feedbackID = feedbackID;
    this.customerNumber = customerNumber;
    this.rating = rating;
    this.comment = comment;
    this.updateDate = new Date();
  }

//   getFeedback(): void {
//     // Logic to get feedb
//   }
}