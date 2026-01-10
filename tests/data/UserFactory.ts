export class UserFactory {
  static validUser() {
    return { username: "testuser", password: "Password123" };
  }

  static invalidUser() {
    return { username: "wronguser", password: "wrongpass" };
  }
}
