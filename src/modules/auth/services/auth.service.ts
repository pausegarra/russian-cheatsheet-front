import Keycloak from "keycloak-js";
import { AuthService } from "../contracts/auth-service.ts";
import { UserEntity } from "../entities/user.entity.ts";
import { IFetchService } from "@betino/fetch";

export class AuthServiceImpl implements AuthService {

  constructor(
    private readonly keycloak: Keycloak,
    private readonly http: IFetchService
  ) {
  }

  async init(cb: () => void) {
    await this.keycloak.init({
      onLoad: 'check-sso',
      pkceMethod: 'S256',
      checkLoginIframe: false,
    })

    cb()
  }

  async loadUserProfile(): Promise<UserEntity> {
    const data = await this.keycloak.loadUserProfile();
    return new UserEntity(data.id, data.firstName, data.lastName, data.email);
  }

  login(): void {
    this.keycloak.login();
  }

  logout(): void {
    this.keycloak.logout();
  }

  async getPermissions(): Promise<string[]> {
    try {
      const headers = {
        "Authorization": `Bearer ${this.keycloak.token}`
      }
      const permissions = await this.http.get<{permissions: string[]}>("/api/auth/profile/permissions", {}, headers);
      return permissions.permissions;
    } catch (e) {
      return [];
    }
  }

  isAuthenticated(): boolean {
    return this.keycloak.authenticated == true;
  }

  getAccessToken(): string | undefined {
    return this.keycloak.token
  }

}