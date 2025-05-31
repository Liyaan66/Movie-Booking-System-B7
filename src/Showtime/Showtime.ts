// export class Showtime{
//     public showtimeID: number;
//     private movie: Movie;
//     private cinemaID: number;
//     private date: Date;
//     private startTime: Date;
//     private endTime: Date;
    

//     constructor(showtimeID: number, movie: Movie, cinemaID: string, date: Date, startTime: Date, endTime: Date) {
//         this.showtimeID = showtimeID;
//         this.movie = movie;
//         this.cinemaID = cinemaID;
//         this.date = date;
//         this.startTime = startTime;
//         this.endTime =endTime;

//     }
    
// }


class Showtime {
  showtimeID: number;
  movie: Movie;
  cinemaID: number;
  startTime: Date;
  endTime: Date;
  seats: Map<string, Seat>; // key could be like "A1", "B2", etc.

  constructor(
    showtimeID: number,
    movie: Movie,
    cinemaID: number,
    startTime: Date,
    endTime: Date,
    seats: Map<string, Seat>
  ) {
    this.showtimeID = showtimeID;
    this.movie = movie;
    this.cinemaID = cinemaID;
    this.startTime = startTime;
    this.endTime = endTime;
    this.seats = seats;
  }

  getSeatMap(): Map<string, Seat> {
    return this.seats;
  }

  getAvailableSeats(): Seat[] {
    const availableSeats: Seat[] = [];
    for (const seat of this.seats.values()) {
      if (seat.status === 'available') {
        availableSeats.push(seat);
      }
    }
    return availableSeats;
  }