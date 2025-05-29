class Movie{
    private movie_id: number;
    private title: string;
    private genre: string;
    private duration: number;
    private rating: string;

    constructor(movie_id: number, title: string, genre: string, duration: number, rating: string){
        this.movie_id= movie_id;
        this.title = title;
        this.genre = genre;
        this.duration = duration;
        this.rating = rating;

    }
}

