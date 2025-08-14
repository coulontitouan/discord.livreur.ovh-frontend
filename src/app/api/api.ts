import { HttpClient } from "@angular/common/http";
import { APIUser } from "discord-api-types/v10";
import { API, appConfig } from "../app.config";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

type UserId = `${number}` | '@me';

@Injectable({ providedIn: 'root' })
export class ApiService {
    private readonly endpoint: string = API;
    private user: APIUser | null = null;

    constructor(private readonly http: HttpClient) { }

    getUser(id: UserId): Observable<APIUser> {
        return new Observable<APIUser>(subscriber => {
            let emittedInitial = false;

            if (this.user !== null) {
                subscriber.next(this.user);
                emittedInitial = true;
            }

            this.http.get<APIUser>(`${this.endpoint}/user/${id}`).subscribe((user) => {
                this.user = user;
                if (!emittedInitial || user !== this.user) {
                    subscriber.next(user);
                }
                subscriber.complete();
            });
        });
    }

    getBanner(): string {
        return  this.user?.avatar_decoration_data?.asset;
    }
}

