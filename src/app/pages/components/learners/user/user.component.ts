import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/shared/services/firebase-Service/firestore.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() estudiante: any;
  @Input() proyects: any = [];

  isVisible: boolean= false;

  constructor(private _firebaseService: FirestoreService) { }

  ngOnInit(): void {
  }

  showSelect(info: boolean){
    this.isVisible = info;
  }

  updateProyect(proyect: any){
    this._firebaseService.addProyectEdit(proyect);
  }

}
