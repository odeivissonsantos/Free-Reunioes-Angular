import { Convidado } from './convidado.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConvidadoService {

  constructor(private http: HttpClient) { }

  baseUrl: String = environment.baseUrl;

  salvar(convidado: Convidado): Observable<Convidado> {
    const url = `${this.baseUrl}/api/convidados`
    return this.http.post<Convidado>(url, convidado);
  }

  listarTodos(): Observable<Convidado[]> {
    const url = `${this.baseUrl}/api/convidados`
    return this.http.get<Convidado[]>(url);
  }

  buscarPorId(id: String): Observable<Convidado> {
    const url = `${this.baseUrl}/api/convidados/${id}`
    return this.http.get<Convidado>(url)
  }

  deletar(id: String): Observable<void> {
    const url = `${this.baseUrl}/api/convidados/${id}`
    return this.http.delete<void>(url)
  }

  atualizar(convidado: Convidado): Observable<void> {
    const url = `${this.baseUrl}/api/convidados/${convidado.id}`
    return this.http.put<void>(url, convidado)
  }

}
