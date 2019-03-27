import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WebserviceProvider {
  data: any;

  constructor(public http: Http) {
  }

  loadRepositories() {
    if (this.data) {
      return Promise.resolve(this.data);
    }  
    return new Promise(resolve => {
      this.http.get('https://api.github.com/repositories')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

}
