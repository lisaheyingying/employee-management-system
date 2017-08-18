import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MonthlyOendingService {


    constructor(private http: Http) { }
    getoendings(date) {
        return this.http.get("http://localhost:3000/api/monthlyoendings/" + date)
            .map(res => res.json());
    }
    addoending(info) {
        return this.http.post("http://localhost:3000/api/monthlyoending", info)
            .map(res => res.json());
    }
    getoending(id) {
        return this.http.get("http://localhost:3000/api/monthlyoending/" + id)
            .map(res => res.json());
    }
    deleteoending(id) {
        return this.http.delete("http://localhost:3000/api/monthlyoending/" + id)
            .map(res => res.json());
    }
    updateoending(id, info) {
        return this.http.put("http://localhost:3000/api/monthlyoending/" + id, info)
            .map(res => res.json());
    }
}