import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DailyProductionService {


    constructor(private http: Http) { }
    getProductions(date) {
        return this.http.get("http://localhost:3000/api/productions/" + date)
            .map(res => res.json());
    }
    addProduction(info) {
        return this.http.post("http://localhost:3000/api/production", info)
            .map(res => res.json());
    }
    getProduction(id) {
        return this.http.get("http://localhost:3000/api/production/" + id)
            .map(res => res.json());
    }
    deleteProduction(id) {
        return this.http.delete("http://localhost:3000/api/production/" + id)
            .map(res => res.json());
    }
    updateProduction(id, info) {
        return this.http.put("http://localhost:3000/api/production/" + id, info)
            .map(res => res.json());
    }
}