import { Users } from "./User";

// Dummy Ticket class for type reference
class Ticket {
    constructor(
        public ticketID: number,
        public isValid: boolean
    ) {}
}

export class Staff extends Users {
    private staffID: number;
    private position: string;

    constructor(
        staffName: string,
        staffID: number,
        email: string,
        gender: string,
        password: string,
        position: string
    ) {
        super(staffName, staffID, email, gender, password);
        this.staffID = staffID;
        this.position = position;
    }

    public get getStaffID(): number {
        return this.staffID;
    }

    public get getPosition(): string {
        return this.position;
    }

    public set setPosition(pos: string) {
        this.position = pos;
    }

    public verifyTicket(ticket: Ticket): boolean {
        console.log(`Verifying ticket ${ticket.ticketID}`);
        return ticket.isValid;
    }

    public login(email: string, password: string): boolean {
        return this.getEmail === email && this.getPassword === password;
    }

    public register(userName: string, email: string, password: string): boolean {
        this.setUserName = userName;
        this.setEmail = email;
        this.setPassword(password);
        console.log(`Staff ${userName} registered successfully.`);
        return true;
    }

    public logout(): void {
        console.log(`Staff ${this.getUserName} has logged out.`);
    }

    

    public get getPassword(): string {
        return this.password;
    }

    public setPassword(pw: string): void {
        this.password = pw;
    }
}
