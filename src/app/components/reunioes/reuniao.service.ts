import { Reuniao } from './reuniao.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReuniaoService {
  baseUrl: String = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  salvar(reuniao: Reuniao): Observable<Reuniao> {
    const url = `${this.baseUrl}/api/salas`
    return this.http.post<Reuniao>(url, reuniao);
  }

  listarTodos(): Observable<Reuniao[]> {
    const url = `${this.baseUrl}/api/salas`
    return this.http.get<Reuniao[]>(url);
  }

  buscarPorId(id: String): Observable<Reuniao> {
    const url = `${this.baseUrl}/api/salas/${id}`
    return this.http.get<Reuniao>(url)
  }

  deletar(id: String): Observable<void> {
    const url = `${this.baseUrl}/api/salas/${id}`
    return this.http.delete<void>(url)
  }

  atualizar(reuniao: Reuniao): Observable<void> {
    const url = `${this.baseUrl}/api/servicos-prestados/${reuniao.id}`
    return this.http.put<void>(url, reuniao)
  }




}
