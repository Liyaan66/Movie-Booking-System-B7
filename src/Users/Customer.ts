import { Users } from "./User";

// Dummy Booking class
class Booking {
    constructor(
        public bookingID: number,
        public details: string
    ) {}
}

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

}
