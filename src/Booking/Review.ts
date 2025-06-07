export class Review {
    private rating: number; // 1-5 stars
    private comment: string;
    private bookingID: number;
    private reviewDate: Date;

    constructor(bookingID: number, rating: number, comment: string) {
        if (rating < 1 || rating > 5) {
            throw new Error("Rating must be between 1 and 5 stars.");
        }
        this.bookingID = bookingID;
        this.rating = rating;
        this.comment = comment;
        this.reviewDate = new Date();
    }

    public getReviewDetails(): { bookingID: number, rating: number, comment: string, reviewDate: Date } {
        return {
            bookingID: this.bookingID,
            rating: this.rating,
            comment: this.comment,
            reviewDate: this.reviewDate
        };
    }
}