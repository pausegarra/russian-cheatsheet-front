import Keycloak from "keycloak-js";
import { AuthService } from "../contracts/auth-service.ts";
import { UserEntity } from "../user.entity.ts";

export class AuthServiceImpl implements AuthService {

  constructor(
    private readonly keycloak: Keycloak
  ) {
  }

  async init(cb: () => void) {
    const authenticated = await this.keycloak.init({
      onLoad: 'check-sso',
      pkceMethod: 'S256',
      checkLoginIframe: false,
    })

    if (!authenticated) {
      console.log('not authenticated')
    } else {
      console.log('authenticated')
    }

    cb()
  }

  async loadUserProfile(): Promise<UserEntity> {
    const data = await this.keycloak.loadUserProfile();
    return new UserEntity(data.id, data.firstName, data.lastName, data.email);
  }

  login(): void {
    this.keycloak.login();
  }

}