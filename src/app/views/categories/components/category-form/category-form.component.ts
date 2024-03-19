import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { fieldsComponents } from '../../../../shared/fields/fields-components';
import { Categories } from '@interfaces/categories/categories';

type FormData = {
  [key in keyof Categories]: FormControl<Categories[key] | null>
};

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ...fieldsComponents],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent {
  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();

  form: FormGroup<FormData> = new FormGroup<FormData>({
    id: new FormControl({ value: 0, disabled: true }),
    name: new FormControl(),
    description: new FormControl(),
    state: new FormControl(),
  });


  constructor() {
  }

}
