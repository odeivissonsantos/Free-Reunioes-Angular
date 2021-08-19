import { ActivatedRoute, Router } from '@angular/router';
import { ReuniaoService } from './../reuniao.service';
import { Component, OnInit } from '@angular/core';
import { Reuniao } from '../reuniao.model';

@Component({
  selector: 'app-reunioes-details',
  templateUrl: './reunioes-details.component.html',
  styleUrls: ['./reunioes-details.component.css']
})
export class ReunioesDetailsComponent implements OnInit {
  reuniao: Reuniao = {
    nome: '',
    data: '',
    horaInicio: '',
    horaTermino: ''
  }

  constructor(private service: ReuniaoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reuniao.id = this.route.snapshot.paramMap.get('id')!
    this.buscarPorId()
  }

  buscarPorId(): void {
    this.service.buscarPorId(this.reuniao.id!).subscribe((resposta) => {
      this.reuniao = resposta;
    })
  }

  voltar(): void{
    this.router.navigate(['/reunioes-list'])
  }

}
