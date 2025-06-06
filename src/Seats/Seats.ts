// interface ZoneType {
//   getZoneName(): string;
// }

// // Mock ZoneType implementation
// class MockZoneType implements ZoneType {
//   private zoneName: string;

//   constructor(zoneName: string) {
//     this.zoneName = zoneName;
//   }

//   getZoneName(): string {
//     return this.zoneName;
//   }
// }

// export class Seats {
//   private seatID: number;
//   private zoneID: string;
//   private status: string;
//   private isAvailable: boolean;
//   private zoneType: ZoneType;

//   constructor(seatID: number, zoneID: string, status: string, isAvailable: boolean, zoneType: ZoneType) {
//     this.seatID = seatID;
//     this.zoneID = zoneID;
//     this.status = status;
//     this.isAvailable = isAvailable;
//     this.zoneType = zoneType;
//   }

//   public getSeatID(): number {
//     return this.seatID;
//   }

//   public getZoneID(): string {
//     return this.zoneID;
//   }

//   public getStatus(): string {
//     return this.status;
//   }

//   public getIsAvailable(): boolean {
//     return this.isAvailable;
//   }

//   public getZoneType(): ZoneType {
//     return this.zoneType;
//   }

//   public setZoneID(zoneID: string): void {
//     this.zoneID = zoneID;
//   }

//   public setStatus(status: string): void {
//     this.status = status;
//   }

//   public setIsAvailable(isAvailable: boolean): void {
//     this.isAvailable = isAvailable;
//   }

//   public setZoneType(zoneType: ZoneType): void {
//     this.zoneType = zoneType;
//   }

//   public getSeatDetails(): string {
//     return `Seat ${this.seatID} in zone ${this.zoneType.getZoneName()} - Status: ${this.status}`;
//   }

//   public chooseAndReserve(): string {
//     if (this.isAvailable) {
//       this.isAvailable = false;
//       this.status = "Reserved";
//       return `Seat ${this.seatID} in zone ${this.zoneType.getZoneName()} has been successfully chosen and reserved.`;
//     } else {
//       return `Seat ${this.seatID} in zone ${this.zoneType.getZoneName()} is not available for selection.`;
//     }
//   }

//   public release(): string {
//     if (!this.isAvailable) {
//       this.isAvailable = true;
//       this.status = "Available";
//       return `Seat ${this.seatID} in zone ${this.zoneType.getZoneName()} has been released.`;
//     } else {
//       return `Seat ${this.seatID} in zone ${this.zoneType.getZoneName()} is already available.`;
//     }
//   }
// }

interface ZoneType {
  getZoneName(): string;
  getZoneType(): string;
}

class MockZoneType implements ZoneType {
  private zoneName: string;
  private zoneType: string;

  constructor(zoneName: string, zoneType: string) {
    this.zoneName = zoneName;
    this.zoneType = zoneType;
  }

  getZoneName(): string {
    return this.zoneName;
  }

  getZoneType(): string {
    return this.zoneType;
  }
}

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
    // Ensure consistency between status and isAvailable
    if (this.isAvailable && this.status !== "Available") {
      this.status = "Available";
    } else if (!this.isAvailable && this.status !== "Reserved") {
      this.status = "Reserved";
    }
  }

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

  public getSeatDetails(): string {
    return `Seat ${this.seatID} in zone ${this.zoneType.getZoneName()} in ${this.zoneType.getZoneType()} - Status: ${this.status}`;
  }

  public chooseAndReserve(): string {
    if (this.isAvailable) {
      this.isAvailable = false;
      this.status = "Reserved";
      return `Seat ${this.seatID} in zone ${this.zoneType.getZoneName()} has been successfully chosen and reserved.`;
    } else {
      return `Seat ${this.seatID} in zone ${this.zoneType.getZoneName()} is not available for selection.`;
    }
  }

  public release(): string {
    if (!this.isAvailable) {
      this.isAvailable = true;
      this.status = "Available";
      return `Seat ${this.seatID} in zone ${this.zoneType.getZoneName()} has been released.`;
    } else {
      return `Seat ${this.seatID} in zone ${this.zoneType.getZoneName()} is already available.`;
    }
  }
}