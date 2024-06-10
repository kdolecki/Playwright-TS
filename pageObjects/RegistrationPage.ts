import { BasePage } from './BasePage';

export class RegistrationPage extends BasePage {
  async register(username: string, email: string, password: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }
}
