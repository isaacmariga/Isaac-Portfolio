import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
  NgForm,
} from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from '../api/projects';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  data = [];
  alert: boolean = false;
  url = environment.allComments;
  id = '';
  project: Projects;

  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),
    design_rating: new FormControl(0, Validators.required),
    user_rating: new FormControl(0, Validators.required),
    content_rating: new FormControl(0, Validators.required),
    project: new FormControl('', Validators.required),
  });

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.myForm.patchValue({
      project: this.id,
    });
  }

  getText(data: any) {
    if (this.myForm.valid) {
      this.myForm.reset();
      this.alert = true;
    }
    this.http
      .post(this.url, data)
      .toPromise()
      .then((data) => {});
    console.log(data);
  }

  ctrl = new FormControl<number | null>(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
}
