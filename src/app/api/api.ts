import { HttpClient } from "@angular/common/http";

export class ApiService<T> {
    endpoint: string;

    constructor(private readonly http: HttpClient, private readonly url: string) {
        this.endpoint = url;
    }

    get(id: string) {
        return this.http.get<T>(`${this.endpoint}/${id}`);
    }
}