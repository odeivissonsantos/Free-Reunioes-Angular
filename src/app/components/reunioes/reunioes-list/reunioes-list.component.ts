import { Reuniao } from './../reuniao.model';
import { Router } from '@angular/router';
import { ReuniaoService } from './../reuniao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reunioes-list',
  templateUrl: './reunioes-list.component.html',
  styleUrls: ['./reunioes-list.component.css']
})
export class ReunioesListComponent implements OnInit {
 reuniao: Reuniao[] = []

  constructor(private service: ReuniaoService, private router: Router) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): void {
    this.service.listarTodos().subscribe(resposta => {
      this.reuniao = resposta;
    })
  }

}
