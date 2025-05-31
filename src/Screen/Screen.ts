export class Screen {
  screenID: number;
  screenName: string;
  cinemaID: number;

  constructor(screenID: number, screenName: string, cinemaID: number) {
    this.screenID = screenID;
    this.screenName = screenName;
    this.cinemaID = cinemaID;
  }
}