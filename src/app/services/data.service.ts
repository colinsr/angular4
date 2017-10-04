import { Injectable } from '@angular/core';

@Injectable()
export class DataService{
    users:string[];

    constructor(){
        this.users = ['Colin','Kim','Jordan','Colin JR','Lily','Sean','Noelle'];
    }

    getUsers(){
        return this.users;
    }
}