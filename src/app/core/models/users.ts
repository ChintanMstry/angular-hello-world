export class Users {

    public id : Number;
    public firstname: string;
    public lastname: string;
    public email: string;
    public roleID: Number;
    public role: string;

    constructor(){
        this.id = 0;
        this.email="";
        this.firstname="";
        this.lastname = "";
        this.roleID = 0;
        this.role = "";
    }
}

export enum Roles {
  Seller=1, 
  Buyer=2, 
  Renter=3, 
  Owner_landloard=4
}
