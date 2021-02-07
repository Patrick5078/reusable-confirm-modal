import { Component, OnInit } from '@angular/core';
import { ModalService } from '../shared/modal.service';

@Component({
  selector: 'app-delete-something',
  templateUrl: './delete-something.component.html',
  styleUrls: ['./delete-something.component.scss']
})
export class DeleteSomethingComponent implements OnInit {

  constructor(
    private modalService: ModalService
  ) { }

  isDeleted = false;

  ngOnInit() {
    console.log("XX")
  }

  deleteSomething() {
    this.modalService.showConfirmModal({
      body: "This action can be undone in many ways!",
      title: "Are you sure you want to delete this?"
    }).subscribe(confirmWasClicked => {
      if (confirmWasClicked) {
        this.isDeleted = true;
      } else {
        this.isDeleted = false;
      }
    })
  }  
}
