import { Injectable } from "@angular/core";

@Injectable()
export class Service1Service {
    getText(): string {
        return "text from service 1";
    }
}