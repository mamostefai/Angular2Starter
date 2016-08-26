import { Injectable } from "@angular/core";

@Injectable()
export class Service2Service {
    getText(): string {
        return "text from service 2";
    }
}