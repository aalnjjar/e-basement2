import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';

interface Category {
    name: string ;
    code: string;
}
interface SubCategory {
  name: string ;
  code: string;
}
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})

export class AddItemComponent implements OnInit {
  uploadedFiles: any[] = [];
  val1: string;
  value: Date;
  Categories: Category[];
  subCategories: SubCategory[];
  selectedCategory: Category;
  selectedsubCategory: SubCategory;
  // dialog
  display = false;

  showDialog() {
      this.display = true;
  }

  constructor(private messageService: MessageService) {
    this.Categories = [
      {name: 'phones', code: 'ph'},
      {name: 'labtop', code: 'lap'},
      {name: 'electronics', code: 'elec'},
  ];
  this.subCategories = [
    {name: 'iphone', code: 'iph'},
    {name: 'samsung', code: 'sam'},
    {name: 'electronics', code: 'elec'},
];
  }
  onUpload(event) {
    for (const file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
  ngOnInit() {
  }

}
