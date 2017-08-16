import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MonthlyMendingService {


    constructor(private http: Http) { }
    getMendings(date) {
        return this.http.get("http://localhost:3000/api/monthlymendings/" + date)
            .map(res => res.json());
    }
    addMending(info) {
        return this.http.post("http://localhost:3000/api/monthlymending", info)
            .map(res => res.json());
    }
    getMending(id) {
        return this.http.get("http://localhost:3000/api/monthlymending/" + id)
            .map(res => res.json());
    }
    deleteMending(id) {
        return this.http.delete("http://localhost:3000/api/monthlymending/" + id)
            .map(res => res.json());
    }
    updateMending(id, info) {
        return this.http.put("http://localhost:3000/api/monthlymending/" + id, info)
            .map(res => res.json());
    }
}