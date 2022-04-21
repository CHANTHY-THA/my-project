import { HttpErrorResponse } from '@angular/common/http';

export interface ResponseBody<T>{
    status:string
    message:String
    body:T[]
}

