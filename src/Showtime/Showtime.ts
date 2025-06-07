import { Movie } from "../Movie/Movie";
import { Hall } from "../Hall/Hall";

export class Showtime {
  private showtimeID: number;
  private movie: Movie;
  private hall: Hall;
  private date: string;
  private startTime: string;
  private endTime: string;

  constructor(showtimeID: number, movie: Movie, hall: Hall, date: string, startTime: string, endTime: string) {
    this.showtimeID = showtimeID;
    this.movie = movie;
    this.hall = hall;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  public getDetails(): string {
    return `${this.date} ${this.startTime} - ${this.endTime} in Hall ${this.hall.getHallName()}`;
  }

  public getMovieID(): number {
    return this.movie.getMovieID();
  }

  
}
