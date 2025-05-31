export class ZoneType {
    private zoneID: number;
    private zoneName: string;
    private zoneType: string;

    constructor(zoneID: number, zoneName: string, zoneType: string) {
        this.zoneID = zoneID;
        this.zoneName = zoneName;
        this.zoneType = zoneType;
    }

    // Getters
    public getZoneID(): number {
        return this.zoneID;
    }

    public getZoneName(): string {
        return this.zoneName;
    }

    public getZoneType(): string {
        return this.zoneType;
    }

    // Setters
    public setZoneName(zoneName: string): void {
        this.zoneName = zoneName;
    }

    public setZoneType(zoneType: string): void {
        this.zoneType = zoneType;
    }

    // Method to choose a zone
    public chooseZone(): string {
        return `Zone ${this.zoneName} of type ${this.zoneType} has been chosen.`;
    }
}