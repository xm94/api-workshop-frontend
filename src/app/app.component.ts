import { Component, Input } from '@angular/core';
import { BackendServicesProxy } from './backend.service.proxy'
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BackendServicesProxy],
})
export class AppComponent {

  
  title = 'api-workshop-frontend';
  list = []
  constructor( 
    private readonly proxyService: BackendServicesProxy){
      this.proxyService.get("").subscribe((res) =>{this.list=res as any})
    }

    journalForm = new FormGroup({
      name: new FormControl(''),
      text: new FormControl(''),
    });
    submit(){
      let req = {"name":this.journalForm.get('name').value,"body":this.journalForm.get('text').value}
      this.proxyService.post("",req).subscribe((res) =>{console.log(res);
        this.proxyService.get("").subscribe((res) =>{this.list=res as any})});
       
    }
    refresh(){
      this.proxyService.get("").subscribe((res) =>{this.list=res as any}) 
    }
}
