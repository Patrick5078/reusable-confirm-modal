import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

export interface Modal {
    body: string;
    title: string;
    confirmText?: string;
    cancelText?: string;
  }
  

@Injectable({providedIn: 'root'})
export class ModalService {

  constructor() { }

  public modalResultEmitter = new EventEmitter<boolean>();
  public showConfirmModalEmitter = new EventEmitter<Modal>();


  showConfirmModal(modal: Modal) {
      this.showConfirmModalEmitter.emit(modal);
      
      return this.modalResultEmitter.pipe(take(1));
  }

}
