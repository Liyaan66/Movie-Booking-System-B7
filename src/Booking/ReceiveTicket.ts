import QRCode from 'qrcode';
import { Booking } from "./Booking";

// ------------ BookingAdapter Interface ------------
interface BookingAdapter {
    getId(): string;
    getShowtime(): {
        getMovie(): { getTitle(): string };
        getCinema(): { getName(): string };
        getDateTime(): Date;
    };
    getSeats(): { getNumber(): string }[];
}
export { BookingAdapter };

// ------------ ReceiveTicket Class ------------
export class ReceiveTicket {
    constructor(
        private id: string,
        private booking: BookingAdapter,
        private referenceNumber: string,
        private qrCode: string
    ) {}

    public getQrCode(): string {
        return this.qrCode;
    }

    public getReferenceNumber(): string {
        return this.referenceNumber;
    }
}

// ------------ QRCodeManager Class ------------
export class QRCodeManager {
    public async generateQRCode(data: object): Promise<string> {
        try {
            return await QRCode.toDataURL(JSON.stringify(data), {
                errorCorrectionLevel: 'H',
                margin: 2,
                color: { dark: '#000000', light: '#FFFFFF' }
            });
        } catch (err) {
            throw new Error("QR generation failed: " + (err as Error).message);
        }
    }

    public async generateTicket(booking: BookingAdapter): Promise<ReceiveTicket> {
        const referenceNumber = `REF${Date.now()}`;
        const data = {
            bookingId: booking.getId(),
            showtime: {
                movie: booking.getShowtime().getMovie().getTitle(),
                cinema: booking.getShowtime().getCinema().getName(),
                dateTime: booking.getShowtime().getDateTime().toISOString()
            },
            seats: booking.getSeats().map(s => s.getNumber()),
            referenceNumber
        };
        const qrCode = await this.generateQRCode(data);
        return new ReceiveTicket(`TICK${Date.now()}`, booking, referenceNumber, qrCode);
    }
}

// ------------ Adapter Implementation ------------
export class BookingAdapterImpl implements BookingAdapter {
    constructor(private booking: Booking) {}

    getId(): string {
        return this.booking.bookingID.toString();
    }

    getShowtime() {
        return {
            getMovie: () => ({ getTitle: () => "Avengers: Endgame" }),
            getCinema: () => ({ getName: () => "Cinema XYZ" }),
            getDateTime: () => new Date(this.booking.showTime),
        };
    }

    getSeats() {
        return [
            { getNumber: () => "A1" },
            { getNumber: () => "A2" }
        ];
    }
}