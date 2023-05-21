import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { city } from 'src/app/model/city';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  headerForm:FormGroup = new FormGroup({});
  cities: city[] | undefined;
  selectedCity: string = 'Madurai'; 
  
  constructor() {
    
  }

  ngOnInit(): void {
    this.setFormData();
    this.initializeForm();
  }

  private initializeForm() {
    this.headerForm = new FormGroup({
      city: new FormControl({value: this.selectedCity, disabled: false})
    });
  }

  private setFormData() {
    this.cities = [{ id: 1, value: 'Madurai' }, { id: 2, value: 'Karaikudi' }];
  }
}
