import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'dataservicesandbox',
  templateUrl: './dataservicesandbox.component.html',
  styleUrls: ['./dataservicesandbox.component.css']
})
export class DataservicesandboxComponent implements OnInit {
  users:string[];
  data:any[] = [];
  fakeUsers:any[];
  user = {
    name: '',
    email: '',
    phone: '',
    id: ''
  }
  isEdit:boolean = false;

  constructor(public dataService:DataService) {
    console.log(this.dataService.getUsers());
    this.users = this.dataService.getUsers();
    this.dataService.getFakeUsers().subscribe(u => {
      console.log(u);
      this.fakeUsers = u;
    });

    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.data.push(data);
    });
  }

  onSubmit(isEdit){
    if(isEdit){
      this.dataService.editUser(this.user).subscribe(user => {
        for(let i =0;i < this.fakeUsers.length;i++){
          console.log(this.fakeUsers[i]);
          if(this.fakeUsers[i].id == this.user.id){
            this.fakeUsers.splice(i,1);
          }
        }
        this.fakeUsers.unshift(this.user);
      });
    } else {
      this.dataService.addUser(this.user).subscribe(user => {
        console.log(user);
        this.fakeUsers.unshift(user);
      });
    }
  }

  onEditClick(user){
    this.isEdit = true;
    this.user = user;
  }

  onDeleteClick(id){
    this.dataService.deleteUser(id).subscribe(res => {
      for(let i =0;i < this.fakeUsers.length;i++){
        console.log(this.fakeUsers[i]);
        if(this.fakeUsers[i].id == id){
          this.fakeUsers.splice(i,1);
        }
      }
    });
  }

  ngOnInit() {
  }

}
