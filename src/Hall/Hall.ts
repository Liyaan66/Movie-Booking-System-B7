import { Customer } from '../Users/Customer';
import { Staff } from '../Users/Staff';

export class Hall {
  private hallID: number;
  private hallName: string;
  private totalSeat: number;
  private movieID: number;
  private seatID: number;
  private customers: Customer[] = [];
  private staff: Staff[] = [];

  constructor(
    hallID: number,
    hallName: string,
    totalSeat: number,
    movieID: number,
    seatID: number
  ) {
    this.hallID = hallID;
    this.hallName = hallName;
    this.totalSeat = totalSeat;
    this.movieID = movieID;
    this.seatID = seatID;
  }

  displayDetail(): string {
    return `Hall: ${this.hallName}, Seats: ${this.totalSeat}, Movie ID: ${this.movieID}`;
  }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  addStaff(staff: Staff): void {
    this.staff.push(staff);
  }
}
