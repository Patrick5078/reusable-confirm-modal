import { Injectable } from '@angular/core';
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

  public modalResultSubject = new Subject<boolean>();
  public showConfirmModalSubject = new Subject<Modal>();

  showConfirmModal(modal: Modal) {
      this.showConfirmModalSubject.next(modal);
      
      return this.modalResultSubject.pipe(take(1));
  }

}
