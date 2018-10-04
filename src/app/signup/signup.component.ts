import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../assets/css/animate/animate.min.css',
  '../../assets/css/reset.css',
  '../../assets/css/components.css',
  '../../assets/css/default.theme.css',
  '../../assets/css/sign.css',
  '../../assets/css/custom.css',
  '../../assets/css/chosen/chosen.min.css'

]
})
export class SignupComponent implements OnInit {
  country: string [] = ['italy' , 'egypt' , 'ksa'];
  city: string[] = ['asyut', 'cairo', 'shrouk', 'luxor'];

  constructor() {
   }

  ngOnInit() {
    $('.langSelect').chosen();
   }

}
