import { Reuniao } from './../reuniao.model';
import { ReuniaoService } from './../reuniao.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reunioes-create',
  templateUrl: './reunioes-create.component.html',
  styleUrls: ['./reunioes-create.component.css']
})
export class ReunioesCreateComponent implements OnInit {

  constructor(private service: ReuniaoService, private router: Router) { }
  reuniao: Reuniao = {
    nome: '',
    data: '',
	  horaInicio: '',
    horaTermino: '',
  }

  ngOnInit(): void {
  }

  voltar(): void {
    this.router.navigate(['/reunioes-list'])
  }

  salvar(): void {
    this.service.salvar(this.reuniao).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigate(['/reunioes-list'])
    })
  }

}
