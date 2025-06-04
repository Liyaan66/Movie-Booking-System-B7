import { Booking } from "./Booking";
export class BookingManager {
    private bookings: Booking[] = [];

    // Add a booking to the system
    addBooking(booking: Booking): void {
        this.bookings.push(booking);
    }

    // Get upcoming bookings for a customer
    getUpcomingBookings(customerID: number, currentDate: Date): Booking[] {
        return this.bookings.filter(
            (booking) =>
                booking.customerID === customerID && booking.showTime > currentDate
        );
    }

    // Get past bookings for a customer
    getPastBookings(customerID: number, currentDate: Date): Booking[] {
        return this.bookings.filter(
            (booking) =>
                booking.customerID === customerID && booking.showTime <= currentDate
        );
    }
}

