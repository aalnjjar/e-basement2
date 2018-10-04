import { Component, OnInit } from '@angular/core';
import 'src/assets/js/jquery.validate.min.js';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/animate/animate.min.css',
  '../../assets/css/reset.css',
  '../../assets/css/components.css',
  '../../assets/css/default.theme.css',
  '../../assets/css/sign.css',
  '../../assets/css/custom.css'
]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
