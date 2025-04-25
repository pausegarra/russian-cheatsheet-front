import Keycloak from "keycloak-js";
import { AuthServiceImpl } from "./services/auth.service";
import type { AuthService } from "./contracts/auth-service";

const keycloak = new Keycloak({
  url: "https://auth.pausegarra.es",
  realm: "principal",
  clientId: "russian-cheatsheet",
});

export const authService: AuthService = new AuthServiceImpl(keycloak);