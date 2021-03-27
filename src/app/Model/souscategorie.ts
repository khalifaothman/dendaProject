import { Category } from '../Model/categorie';
export class souscategorie{
    idCategory:number;
    name:String;
    image:String;
    showacceuil:boolean;
    Category: Category;


    constructor(CategoryResponse:any){
        this.idCategory=CategoryResponse.id;
        this.name=CategoryResponse.name;
        this.image=CategoryResponse.image;
        this.showacceuil=CategoryResponse.showacceuil;
        this.Category=CategoryResponse.Category;

    }
    }