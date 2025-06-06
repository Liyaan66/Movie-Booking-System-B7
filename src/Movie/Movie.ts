import { Showtime } from "../Showtime/Showtime";

export class Movie {
  private movieID: number;
  private title: string;
  private genre: string;
  private duration: number;
  private showtimes: Showtime[] = [];

  constructor(movieID: number, title: string, genre: string, duration: number) {
    this.movieID = movieID;
    this.title = title;
    this.genre = genre;
    this.duration = duration;
  }

  public addShowtime(showtime: Showtime): void {
    if (showtime.getMovieID() === this.movieID) {
      this.showtimes.push(showtime);
    }
  }

  public getShowtimes(): Showtime[] {
    return this.showtimes;
  }

  public getTitle(): string {
    return this.title;
  }

  public getMovieID(): number {
    return this.movieID;
  }

  public getDuration(): number {
    return this.duration;
  }

  public getDetails(): string {
  return `Movie: ${this.title} | Genre: ${this.genre} | Duration: ${this.duration} mins`;
}

}


