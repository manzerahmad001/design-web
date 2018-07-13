import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { User } from '../d-web-dataModel/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DWebCommonService {

  public userList: User[];
	public add_subject = new Subject<String>();

	constructor(private http : HttpClient){
		this.userList = []
	}

	addUsers(item){
		return this.http.post('/api/addUser',item)
		// .pipe(map(this.extractData))
	}

	getUser(item){
		return this.http.post('/api/getUser',item)
		// .pipe(map(this.extractData))
	}
	private extractData(res: Response) {
    let body = res.json();
    // console.warn("Response Data :: " + JSON.stringify(body));
    return body || [];
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // PrgToastMessageService.getInstance().setToastMessage({ severity: 'error', summary: 'Server Error', detail: errMsg });
    console.error("Response Error :: " + errMsg);
    return Observable.throw(errMsg);
  }
}
