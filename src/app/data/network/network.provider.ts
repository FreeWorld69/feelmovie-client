import { Injectable } from "@angular/core";

//TODO https://stackoverflow.com/questions/60956006/how-can-i-create-an-instance-of-an-angular-service-on-the-fly
//TODO https://github.com/chihab/ngx-env
@Injectable({providedIn: 'root'})
export class NetworkProvider {
    private readonly url: string = ''
}
