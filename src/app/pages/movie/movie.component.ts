import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movieForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sanitaizer: DomSanitizer,
    private movieService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.movieForm = this.fb.group({
      title: [null, Validators.required],
      release: [null, Validators.required],
      description: [null, Validators.required],
      image: [null, Validators.required]
    });
  }

  // One-liner methods
  showImg = (image: any) => this.sanitaizer.bypassSecurityTrustResourceUrl(image);
  updateImg = (imagen: any) => this.movieForm.controls.image.setValue(imagen.data);

  onSubmit(form: any) {
    try {
      if (form.status === 'VALID') {
        const data = this.movieForm.getRawValue();
        this.movieService.save(data);
        this.router.navigate(['home']);
      } else {
        throw new Error('It is not valid');
      }
    } catch (e) {
      console.error(`[Error saving movie] : ${e}`);
    }
  }

  onImage(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader: FileReader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        const base: string = reader.result as string;
        const base64 = base.split(',');

        const dataFile = {
          name: file.name,
          type: file.type,
          data: `data:${file.type};base64,${base64[1]}`
        };

        this.updateImg(dataFile);
      };
    }
  }
}
