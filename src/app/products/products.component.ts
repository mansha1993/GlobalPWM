import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(private formBuilder: FormBuilder) {}

  userForm:any = FormGroup;
  public productForm:any = FormGroup;
  

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      age: ['', [Validators.required, Validators.min(20), Validators.max(50)]],
      gender: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.userForm?.valid) {
      console.log('Form data:', this.userForm.value);
    }
  }

}
