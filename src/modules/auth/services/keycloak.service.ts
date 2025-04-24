import Keycloak, {KeycloakProfile} from "keycloak-js";

export class KeycloakService {

  constructor(
    private readonly keycloakInstance: Keycloak,
    private userProfile: KeycloakProfile
  ) {
  }

  public async init() {
    const authenticated = await this.keycloakInstance.init({
      onLoad: "login-required",
      responseMode: 'query',
      pkceMethod: 'S256',
      flow: 'standard',
      checkLoginIframe: false
    });

    console.log(authenticated)
    if (authenticated) {
      console.log(this.keycloakInstance.token)
    }
  }

  public async login() {
    await this.keycloakInstance.login({
      redirectUri: "http://localhost:5173/alphabet",
    });
  }

  public getToken() {
    return this.keycloakInstance.token;
  }

  public async getUserData() {
    return this.keycloakInstance.loadUserInfo();
  }

}