export abstract class Users {
    protected userName: string;
    protected userID: number;
    protected email: string;
    protected gender: string;
    protected password: string;

    constructor(userName: string, userID: number, email: string, gender: string, password: string) {
        this.userName = userName;
        this.userID = userID;
        this.email = email;
        this.gender = gender;
        this.password = password;
    }

    // Getters
    public get getUserName(): string {
        return this.userName;
    }

    public get getEmail(): string {
        return this.email;
    }

    public get getGender(): string {
        return this.gender;
    }

    public get getUserID(): number {
        return this.userID;
    }

    // Setters
    public set setUserName(name: string) {
        this.userName = name;
    }

    public set setEmail(email: string) {
        this.email = email;
    }

    public set setGender(gender: string) {
        this.gender = gender;
    }

    // Abstract or default method — can be overridden
    public login(email: string, password: string): boolean {
        return this.email === email && this.password === password;
    }

    public register(userName: string, email: string, password: string): boolean {
        console.log(`Registering user: ${userName}`);
        return true;
    }

    public logout(): void {
        console.log(`${this.userName} has logged out.`);
    }

    public getDetail(): string {
        return `User: ${this.userName}, Email: ${this.email}, Gender: ${this.gender}`;
    }
}
