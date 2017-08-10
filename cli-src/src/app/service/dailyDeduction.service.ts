import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DailyDeductionService {


    constructor(private http: Http) { }
    getDeductions(date) {
        return this.http.get("http://localhost:3000/api/deductions/" + date)
            .map(res => res.json());
    }
    addDeduction(info) {
        return this.http.post("http://localhost:3000/api/deduction", info)
            .map(res => res.json());
    }
    getDeduction(id) {
        return this.http.get("http://localhost:3000/api/deduction/" + id)
            .map(res => res.json());
    }
    deleteDeduction(id) {
        return this.http.delete("http://localhost:3000/api/deduction/" + id)
            .map(res => res.json());
    }
    updateDeduction(id, info) {
        return this.http.put("http://localhost:3000/api/deduction/" + id, info)
            .map(res => res.json());
    }
}