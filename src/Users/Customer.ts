import { Users } from "./User";
import { Booking } from "../Booking/Booking";

export class Customer extends Users {
    private bookings: Booking[] = [];

    constructor(
        customerFullName: string,
        customerID: number,
        email: string,
        gender: string,
        password: string
    ) {
        super(customerFullName, customerID, email, gender, password);
    }

    public login(email: string, password: string): boolean {
        return this.getEmail === email && this.checkPassword(password);
    }

    public register(userName: string, email: string, password: string): boolean {
        this.setUserName = userName;
        this.setEmail = email;
        this.setPassword(password); // using a method to set password
        console.log(`Customer ${userName} registered successfully.`);
        return true;
    }

    public logout(): void {
        console.log(`Customer ${this.getUserName} has logged out.`);
    }

    public viewBookings(): Booking[] {
        return this.bookings;
    }

    public updateProfile(name: string, email: string, password: string): void {
        this.setUserName = name;
        this.setEmail = email;
        this.setPassword(password);
        console.log("Profile updated successfully.");
    }

    public addBooking(booking: Booking): void {
        this.bookings.push(booking);
    }

    // Optional secure password handling (no direct get)
    private checkPassword(input: string): boolean {
        return this.getPassword === input;
    }


    public get getPassword(): string {
        return this.password;
    }

    public setPassword(pw: string): void {
        this.password = pw;
    }
    getCustomerID(): number {
        return this.userID;
    }

    public getName(): string{
        return this.userName;
    }
    
    viewUpcomingBookings(): Booking[] {
        const now = new Date(); // Current date: June 6, 2025, 20:53 +07
        return this.bookings.filter(booking => {
            const showDate = new Date(booking.showtime.getDetails());
            return showDate > now;
        });
    }
    viewPastBookings(): Booking[] {
        const now = new Date();
        return this.bookings.filter(booking => booking.bookingDate < now);
    }
    displayBookings(booking: Booking[], type: string): void {
        if (booking.length === 0) {
            console.log(`No ${type} bookings.`);
            return;
        }
        console.log(`\n${type} Bookings for ${this.userName}:`);
        booking.forEach(booking => {
            const details = booking.getBookingDetails();
            console.log(
                "Booking ID: " + details.bookingID +
                "\nMovie: " + details.movie +
                "\nShowtime: " + details.showtime +
                "\nSeat: " + details.seat +
                "\nBooking Date: " + details.bookingDate +
                "\nTotal Price: " + details.totalPrice
            )
        });
    }
}
