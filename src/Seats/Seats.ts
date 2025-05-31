import { ZoneType } from "../Zones/Zones"; 

export class Seats {
    private seatID: number;
    private zoneID: string;
    private status: string;
    private isAvailable: boolean;
    private zoneType: ZoneType;

    constructor(seatID: number, zoneID: string, status: string, isAvailable: boolean, zoneType: ZoneType) {
        this.seatID = seatID;
        this.zoneID = zoneID;
        this.status = status;
        this.isAvailable = isAvailable;
        this.zoneType = zoneType;
    }

    // Getters
    public getSeatID(): number {
        return this.seatID;
    }

    public getZoneID(): string {
        return this.zoneID;
    }

    public getStatus(): string {
        return this.status;
    }

    public getIsAvailable(): boolean {
        return this.isAvailable;
    }

    public getZoneType(): ZoneType {
        return this.zoneType;
    }

    // Setters
    public setZoneID(zoneID: string): void {
        this.zoneID = zoneID;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public setIsAvailable(isAvailable: boolean): void {
        this.isAvailable = isAvailable;
    }

    public setZoneType(zoneType: ZoneType): void {
        this.zoneType = zoneType;
    }

    // Method to reserve a seat
    public reserve(): string {
        if (this.isAvailable) {
            this.isAvailable = false;
            this.status = "Reserved";
            return `Seat ${this.seatID} in zone ${this.zoneType.getZoneName()} has been reserved.`;
        } else {
            return `Seat ${this.seatID} is already reserved.`;
        }
    }

    // Method to release a seat
    public release(): string {
        if (!this.isAvailable) {
            this.isAvailable = true;
            this.status = "Available";
            return `Seat ${this.seatID} in zone ${this.zoneType.getZoneName()} has been released.`;
        } else {
            return `Seat ${this.seatID} is already available.`;
        }
    }
}