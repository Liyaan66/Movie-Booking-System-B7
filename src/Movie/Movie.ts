// Dummy ShowTime class for type reference
class ShowTime {
    constructor(
        public showTimeID: number,
        public movieID: number,
        public time: string,
        public date: string
    ) {}
}

export class Movie {
    private movieID: number;
    private title: string;
    private genre: string;
    private duration: number; // in minutes
    private showTimes: ShowTime[] = [];

    constructor(movieID: number, title: string, genre: string, duration: number) {
        this.movieID = movieID;
        this.title = title;
        this.genre = genre;
        this.duration = duration;
    }

    public getShowTime(date: string): ShowTime[] {
        return this.showTimes.filter(show => show.date === date);
    }

    public getDetails(): string {
        return `Movie: ${this.title} | Genre: ${this.genre} | Duration: ${this.duration} minutes`;
    }

    // Optional: add showtime
    public addShowTime(showTime: ShowTime): void {
        this.showTimes.push(showTime);
    }

    // Optional: accessors if needed
    public get getMovieID(): number {
        return this.movieID;
    }

    public get getTitle(): string {
        return this.title;
    }

    public get getGenre(): string {
        return this.genre;
    }

    public get getDuration(): number {
        return this.duration;
    }
}

