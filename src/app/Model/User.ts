export class user{
    id:number;
    name:String;
    password:String;
    role:boolean;
    constructor(UserResponse:any){
        this.id=UserResponse.id;
        this.name=UserResponse.name;
        this.password=UserResponse.password;
        this.role=UserResponse.role;
    }
    }