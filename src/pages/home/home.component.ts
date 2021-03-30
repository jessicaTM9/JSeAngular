import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

/*
Requests

 FRONT --- API ---- BANCO


Get - Pegar algo da API

Post - Registrar algo na na API

Put - Alterar algum dado da API

Delete - Deletar dados da API

200 - Sucesso

404 - Not Found - /user, (users) não encontrou a /user

500 - A requisição chegou na api mas falhou 



*/

interface typeIdUser {
  name: string;
  id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() data: any;
  users: any[] = [];
  talk: any;

  constructor(private router: Router) {}

  ngOnInit() {
    // const dataUser = {
    //   name: 'Jessica',
    //   age: 27,
    //   email: 'jessica@g.com.br',
    // };
    // const idUsers: typeIdUser[] = [
    //   { name: 'Jessica', id: 1 },
    //   { name: 'Jessica1', id: 2 },
    //   { name: 'Jessica2', id: 3 },
    //   { name: 'Jessica3', id: 4 },
    //   { name: 'Jessica4', id: 5 },
    // ];
    // const { id }: any = idUsers.find((user) => user.name == 'Jessica');
    // const requestPut = await axios.put(`route/user/${id}`, dataUser);
    // await axios.delete(`route/user/${id}`);
  }

  async mostrarDados() {
    const route = `https://api.github.com/repos/${this.talk}`;

    const { data } = await axios.get(`${route}`);

    this.users.push(data);
  }

  toInfo(repo: any) {
    this.router.navigate([`${repo.full_name}`]);
  }
}
