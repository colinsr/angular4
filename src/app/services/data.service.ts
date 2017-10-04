import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{
    data:Observable<any>;
    users:string[];


    constructor(public http:Http){
        this.users = ['Colin','Kim','Jordan','Colin JR','Lily','Sean','Noelle'];
    }

    getFakeUsers(){
        return this.http.get('http://jsonplaceholder.typicode.com/users')
                        .map(res => res.json());
    }

    getUsers(){
        return this.users;
    }

    addUser(user){
        return this.http.post('http://jsonplaceholder.typicode.com/users', user)
                        .map(res => res.json());
    }

    getData(){
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next(1);
            },1000);

            setTimeout(() => {
                observer.next(2);
            },2000);

            setTimeout(() => {
                observer.next(3);
            },3000);

            setTimeout(() => {
                observer.next('Hello');
            },4000);

            setTimeout(() => {
                observer.complete();
            },5000);
        });

        return this.data;
    }
}