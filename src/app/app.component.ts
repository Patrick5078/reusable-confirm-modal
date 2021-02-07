import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Modal, ModalService } from './shared/modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    public modalService: ModalService
  ) {}
  
  modal?: Modal;
  showModal = false;

  ngOnInit() {
    this.modalService.showConfirmModalEmitter.subscribe(modal => {
      this.modal = modal;
      this.showModal = true
    });
  }
}
