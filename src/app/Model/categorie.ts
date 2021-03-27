export class Category{
    id:number;
    name:String;
    image:String;
    acceuil:boolean;
   
    constructor(id:number, name:string, image:string,acceuil:boolean){
        this.id=id;
        this.name=name;
        this.image=image;
        this.acceuil=acceuil;
    }
 }