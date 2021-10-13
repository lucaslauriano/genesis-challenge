export class Users {
  constructor(public users: any) {}

  getUsers() {
    const users = localStorage.getItem('@users');
    return JSON.parse(users);
  }

  setUsers(users: any) {
    localStorage.setItem('@users', JSON.stringify(users));
  }
}
