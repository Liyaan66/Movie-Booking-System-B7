import QRCode from 'qrcode';
import { CustomerTicket } from './CustomerTicket';

// ------------ ReceiveTicket Class ------------
export class ReceiveTicket {
    constructor(
        private id: string,
        private customerTicket: CustomerTicket,
        private referenceNumber: string,
        private qrCode: string
    ) {}

    public getQrCode(): string {
        return this.qrCode;
    }

    public getReferenceNumber(): string {
        return this.referenceNumber;
    }

    public getTicket(): CustomerTicket {
        return this.customerTicket;
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

    public async generateTicket(customerTicket: CustomerTicket): Promise<ReceiveTicket> {
        const referenceNumber = `REF${Date.now()}`;
        const data = {
            ticketID: customerTicket.ticketID,
            customerID: customerTicket.customerID,
            seatID: customerTicket.seatID,
            movieName: customerTicket.movieName,
            hallName: customerTicket.hallName,
            duration: `${customerTicket.duration} minutes`,
            bookingDate: customerTicket.bookingDate.toISOString(),
            ticketPrice: `$${customerTicket.ticketPrice.toFixed(2)}`,
            referenceNumber
        };

        const qrCode = await this.generateQRCode(data);
        return new ReceiveTicket(`TICK${Date.now()}`, customerTicket, referenceNumber, qrCode);
    }
}
