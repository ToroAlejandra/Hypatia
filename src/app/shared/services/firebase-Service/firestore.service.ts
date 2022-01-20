import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import * as firestore from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private projectA$ = new Subject<any>();

  constructor(private firebase: AngularFirestore) { }

  getUsers(): Observable<any>{
    return this.firebase.collection('listado').snapshotChanges();
  }

  getLearners(): Observable<any>{
    return this.firebase.collection('usuarios').snapshotChanges();
  }

  getProyects(): Observable<any>{
    return this.firebase.collection('proyectos').snapshotChanges();
  }

  deleteProyect(id: string): Promise<any>{
    return this.firebase.collection('usuarios').doc(id).delete();
  }

  editProyect(id: string, proyect: any): Promise<any>{
    console.log("este es el id ", id, "este es el proyecto ", proyect);

    return this.firebase.collection('proyectos').doc(id).update({proyecto: firestore.arrayUnion(id)});
  }

  addProyectEdit(project:any){
    this.projectA$.next(project);
  }

  getProyectEdit(): Observable<any>{
    return this.projectA$.asObservable();
  }
}
