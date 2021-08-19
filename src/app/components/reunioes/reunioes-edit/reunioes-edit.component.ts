import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reuniao } from '../reuniao.model';
import { ReuniaoService } from '../reuniao.service';

@Component({
  selector: 'app-reunioes-edit',
  templateUrl: './reunioes-edit.component.html',
  styleUrls: ['./reunioes-edit.component.css']
})
export class ReunioesEditComponent implements OnInit {
  reuniao: Reuniao = {
    nome: '',
    data: '',
    horaInicio: '',
    horaTermino: ''
  }

  constructor(private service: ReuniaoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.reuniao.id! = this.route.snapshot.paramMap.get('id')!
    this.buscarPorId()
  }

  atualizar(): void {
    this.service.atualizar(this.reuniao).subscribe((resposta) => {
      this.router.navigate(['reunioes-list'])
    })
  }

  buscarPorId(): void {
    this.service.buscarPorId(this.reuniao.id!).subscribe((resposta) => {
      this.reuniao = resposta
    })
  }

  voltar(): void {
    this.router.navigate(['reunioes-list'])
  }

}
