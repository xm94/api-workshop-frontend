import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';


const headers = new HttpHeaders();

headers.append('Content-Type', 'application/json');

export const POST_REQUEST_OPTIONS = new Object({
  headers,
  withCredentials: true,
  observe: 'response'
});

export const GET_REQUEST_OPTIONS = new Object({
  withCredentials: true,
  observe: 'response'
});

export const DELETE_REQUEST_OPTIONS = new Object({
  withCredentials: true,
  observe: 'response'
});

export const PUT_REQUEST_OPTIONS = new Object({
  withCredentials: true,
  observe: 'response'
});

const BACKEND_URL = 'https://cic-api-workshop-backend.herokuapp.com/';

@Injectable()
export class BackendServicesProxy {
    constructor(
        private readonly http: HttpClient,
      ) {}


      delete(servicePath: string): Observable<HttpResponse<Object>> {
        const response = this.http
          .delete(BACKEND_URL + servicePath, DELETE_REQUEST_OPTIONS)
          .pipe(share()) as Observable<HttpResponse<Object>>;
    
        return this.handleResponse(response);
      }
    
      get(
        servicePath: string,
        requestOptions = GET_REQUEST_OPTIONS
      ): Observable<HttpResponse<Object>> {
        const response = this.http
          .get(BACKEND_URL + servicePath)
          .pipe(share()) as Observable<HttpResponse<Object>>;
    
        return this.handleResponse(response);
      }
    
      post(servicePath: string, data: any = {}): Observable<HttpResponse<Object>> {
        const response = this.http
          .post(BACKEND_URL + servicePath, data)
          .pipe(share()) as Observable<HttpResponse<Object>>;
    
        return this.handleResponse(response);
      }
    
      put(servicePath: string, data: any = {}): Observable<HttpResponse<Object>> {
        const response = this.http
          .put(BACKEND_URL + servicePath, data, PUT_REQUEST_OPTIONS)
          .pipe(share()) as Observable<HttpResponse<Object>>;
    
        return this.handleResponse(response);
      }
    
      createRequestURL(servicePath: string): string {
        return BACKEND_URL + servicePath;
      }
    
      private handleResponse(
        response: Observable<HttpResponse<Object>>,
      ): Observable<HttpResponse<Object>> {
        response.subscribe();
        return response;
      }
    
}