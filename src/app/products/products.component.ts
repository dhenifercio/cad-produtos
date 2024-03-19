import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { item } from '../item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  itens:item []=[]

  formgroupitem : FormGroup

  constructor(private formBuilder:FormBuilder){

  this.formgroupitem = formBuilder.group({
    id: [''],
    name: [''],
    price: [''],
    amount: [''],
    description: [''],

  })
}

save(){
  this.itens.push(this.formgroupitem.value);
}

}
