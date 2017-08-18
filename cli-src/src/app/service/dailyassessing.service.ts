import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DailyAssessingService {


    constructor(private http: Http) { }
    getAssessings(date) {
        return this.http.get("http://localhost:3000/api/dailyassessings/" + date)
            .map(res => res.json());
    }
    addAssessing(info) {
        return this.http.post("http://localhost:3000/api/dailyassessing", info)
            .map(res => res.json());
    }
    getAssessing(id) {
        return this.http.get("http://localhost:3000/api/dailyassessing/" + id)
            .map(res => res.json());
    }
    deleteAssessing(id) {
        return this.http.delete("http://localhost:3000/api/dailyassessing/" + id)
            .map(res => res.json());
    }
    updateAssessing(id, info) {
        return this.http.put("http://localhost:3000/api/dailyassessing/" + id, info)
            .map(res => res.json());
    }
}