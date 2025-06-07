import { Customer } from "../Users/Customer";
import { Staff } from "../Users/Staff";
import { Seats } from "../Seats/Seats";

export class Hall {
  private hallID: number;
  private hallName: string;
  private seats: Seats[] = [];
  private customers: Customer[] = [];
  private staff: Staff[] = [];

  constructor(hallID: number, hallName: string) {
    this.hallID = hallID;
    this.hallName = hallName;
  }

  public addSeat(seat: Seats): void {
    this.seats.push(seat);
  }

  public addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  public addStaff(staff: Staff): void {
    this.staff.push(staff);
  }

  public getHallName(): string {
    return this.hallName;
  }

  public getSeatList(): Seats[] {
    return this.seats;
  }

  public displayDetail(): string {
    return `Hall: ${this.hallName}, Total Seats: ${this.seats.length}`;
  }
}
