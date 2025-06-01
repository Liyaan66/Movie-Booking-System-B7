export class Hall{
    public hallId: number;
    private hallName: string;
    private totalSeat: number;
    private movieId: number;
    private seatId: number;
    
    constructor(hallId: number, hallName: string, totalSeat: number, movieId: number, seatId: number){
        this.hallId = hallId;
        this.hallName = hallName;
        this.totalSeat = totalSeat;
        this.movieId = movieId;
        this.seatId = seatId;
    }
}