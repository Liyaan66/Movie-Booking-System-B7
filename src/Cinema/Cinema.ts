export class Cinema{
    private cinemaID: number;
    private cinemaName: string;
    private openingTime: Date;
    private closingTime: Date;
    private location: string;

    constructor( cinemaID: number, cinemaName: string, openingTime: Date, closingTime: Date, location: string){
        this.cinemaID = cinemaID;
        this.cinemaName = cinemaName;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
        this.location = location;
    }
     getDetails(): string {
    return `Cinema: ${this.cinemaName}, Open: ${this.openingTime.toLocaleTimeString()}, Close: ${this.closingTime.toLocaleTimeString()}, Location: ${this.location}`;
  }

  updateLocation(newLocation: string): void {
    this.location = newLocation;
  }
}