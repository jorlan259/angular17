/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MenusInterface } from '@interfaces/menus/menus';
import { fieldsComponents } from '../../../../shared/fields/fields-components';


type FormData = {
  [key in keyof MenusInterface]: FormControl<MenusInterface[key] | unknown>
};

@Component({
  selector: 'menu-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ...fieldsComponents],
  templateUrl: './menu-form.component.html',
  styleUrl: './menu-form.component.scss'
})
export class MenuFormComponent {
  @Output() addData: EventEmitter<MenusInterface> = new EventEmitter<MenusInterface>();
  base64String : string = '' ;
  form: FormGroup<FormData> = new FormGroup<FormData>({
    id: new FormControl({ value: 0, disabled: true }),
    name: new FormControl(),
    description: new FormControl(),
    allergens : new FormControl(),
    id_category : new FormControl(),
    ingredients : new FormControl(),
    picture : new FormControl(),
    price : new FormControl(),
    production_cost : new FormControl()
  });


  constructor() {
  }

  saveData(): void {
    const data = this.form.getRawValue();
    data.picture = this.base64String;
    this.addData.next(data as MenusInterface);
  }

  onFileChange(event: any){

  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
  this.base64String = reader.result as string ;
  console.log(this.base64String);
  };

  if (file){
  reader.readAsDataURL(file);
  }

  }

}
