import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  nombre="Giannino";
  apellido="Di Tizio";
  private edad=56;
  empresa="Overcom";
  anosservicio=4;

  getEdad(){
    return this.edad;
  }

  indicaDpto(value:String){

  }

  dptoProperty=true;
  contratadoProperty=false;
  textoContratado="No hay nadie contratado";

  getContratoUsuario(){

    this.contratadoProperty=false;
  }

  setContratoUsuario(){
    this.textoContratado="Empleado Cntratado!"
    alert("El usuario ha sido contratado");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
