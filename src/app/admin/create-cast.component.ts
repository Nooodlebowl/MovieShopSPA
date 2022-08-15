import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../core/services/admin.service';
import { CreateCast } from '../shared/models/CreateCast';

@Component({
  selector: 'app-create-cast',
  templateUrl: './create-cast.component.html',
  styleUrls: ['./create-cast.component.css']
})
export class CreateCastComponent implements OnInit {

  createCastForm: FormGroup;
  submitted:boolean = false;
  flag:boolean = false;

  constructor(private fb:FormBuilder, private adminService:AdminService) { }

  ngOnInit(): void {
    this.createCastForm = this.fb.group({
      gender: ['', Validators.required],
      name:['', Validators.required],
      tmdbUrl:['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    if (this.createCastForm.valid){
      console.table(this.createCastForm.value);
      const createCast:CreateCast = {
        gender: this.createCastForm.controls['gender']. value,
        name: this.createCastForm.controls['name']. value,
        tmdbUrl: this.createCastForm.controls['tmdbUrl']. value
      };
      this.flag = true;
    };
  }

}
