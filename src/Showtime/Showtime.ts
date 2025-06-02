import { Movie } from '../Movie/Movie';

class Seat {
  constructor(
    public id: string,
    public isAvailable: boolean = true
  ) {}
}

export class Showtime {
  private seatMap: Map<string, Seat> = new Map();

  constructor(
    private showtimeID: number,
    private movie: Movie,
    private cinemaID: number,
    private date: Date,
    private startTime: Date,
    private endTime: Date
  ) {
    this.initializeSeats();
  }

  private initializeSeats(): void {
    // Simulate a basic seat layout: A1 to A5
    ['A1', 'A2', 'A3', 'A4', 'A5'].forEach(seatId => {
      this.seatMap.set(seatId, new Seat(seatId));
    });
  }

  public getSeatMap(): Map<string, Seat> {
    return this.seatMap;
  }

  public getAvailableSeats(): Seat[] {
    return Array.from(this.seatMap.values()).filter(seat => seat.isAvailable);
  }
}
