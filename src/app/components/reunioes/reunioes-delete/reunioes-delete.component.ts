import { ReuniaoService } from './../reuniao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reuniao } from '../reuniao.model';

@Component({
  selector: 'app-reunioes-delete',
  templateUrl: './reunioes-delete.component.html',
  styleUrls: ['./reunioes-delete.component.css']
})
export class ReunioesDeleteComponent implements OnInit {
  reuniao: Reuniao = {
    id:'',
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

  buscarPorId(): void {
    this.service.buscarPorId(this.reuniao.id!).subscribe((resposta) => {
      this.reuniao = resposta
    })
  }

  deletar(): void {
    this.service.deletar(this.reuniao.id!).subscribe((resposta) => {
      this.router.navigate(['reunioes-list'])
    })
  }

  voltar(): void {
    this.router.navigate(['reunioes-list'])
  }

}
