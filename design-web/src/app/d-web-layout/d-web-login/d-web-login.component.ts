import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DWebCommonService } from '../d-web-shared/d-web-services/d-web-common.service';
import { User, getUser, UserSignUpValidation } from '../d-web-shared/d-web-dataModel/user.model';

@Component({
  selector: 'app-d-web-login',
  templateUrl: './d-web-login.component.html',
  styleUrls: ['./d-web-login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DWebLoginComponent implements OnInit {
  sucessStatusMatch: boolean = false;
  showpsw: boolean = false;
  showpsw1: boolean = false;
  clicked = [true, false];
  model = new User('', '', '', '');
  model1 = new getUser('', '', '');
  model2 = new UserSignUpValidation('', '');
  private userList: User[]
  promptText: string;
  constructor(private commonservice: DWebCommonService) { }

  ngOnInit() {
  }
  //toggle signup and login
  loadLoginSignUp(status) {
    if (status === "signup") {
      this.clicked[1] = false;
      this.clicked[0] = true;
    } else if (status === "login") {
      this.clicked[0] = false;
      this.clicked[1] = true;
    }
  }

  adduser() {
    let self = this;
    this.model2 = new UserSignUpValidation(this.model.username, this.model.email);
    // {"status":"success","data":[]}
    //{"status":"success","data":[{"_id":"5b42f01a5f04551600fd893e","name":"Manzar Ahmed","email":"akimran3@gmail.com","username":"manzer786","password":"abcde"}]}
      this.commonservice.getUser(this.model2).subscribe(
        function (success) {
          console.log(JSON.stringify(self.model2));
          console.log(JSON.stringify(success));
          console.log(JSON.stringify(self.model2.username));
          console.log(Object.values(success['data']));

          console.log(Object.values(success['data']).indexOf(self.model2.username) > -1 );
          console.log(Object.values(success['data']).indexOf(self.model2.email) > -1 );

          if(success['data'].length > 0 && Object.keys(success['data']).length > 0){
            if( Object.values(success['data']).indexOf(self.model2.username) > -1){
              alert('hi')
              self.sucessStatusMatch = true; 
              self.promptText = "User Name already exists";
            }
            if( Object.values(success['data']).indexOf(self.model2.email) > -1 ){
              self.sucessStatusMatch = true;
              self.promptText = "Email already exists";
            }
          }else{
            self.sucessStatusMatch = false;
          }
        }
      )

    //   if (this.sucessStatusMatch === false) {
    //   this.commonservice.addUsers(this.model).subscribe(res => {
    //     this.commonservice.add_subject.next();
    //   })
    //   this.model = new User('', '', '', '');
    // }
  }

  getuser() {
    this.commonservice.getUser(this.model1).subscribe(
      function (success) {
        console.log(Object.keys(success['data']).length);
        console.log(success['data'].length);
        console.log(JSON.stringify(success));
      }
    )
    this.model1 = new getUser('', '', '');
  }

  showpasw(status) {
    this.showpsw = status;
  }
  showpasw1(status) {
    this.showpsw1 = status;
  }
}
