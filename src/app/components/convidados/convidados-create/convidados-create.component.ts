import { ConvidadoService } from './../convidado.service';
import { Router } from '@angular/router';
import { Convidado } from './../convidado.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convidados-create',
  templateUrl: './convidados-create.component.html',
  styleUrls: ['./convidados-create.component.css']
})
export class ConvidadosCreateComponent implements OnInit {

  constructor(private service: ConvidadoService, private router: Router) { }
  

  convidado: Convidado = {
    id: '',
    nomeCompleto: '',
    telefone: ''

  }

  ngOnInit(): void {

  }

  voltar(): void {
    this.router.navigate(['/reunioes-list'])
  }

  salvar(): void {
    this.service.salvar(this.convidado).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigate(['/reunioes-list'])
    })
  }


}
