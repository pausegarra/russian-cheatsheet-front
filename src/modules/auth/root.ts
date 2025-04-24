import Keycloak from "keycloak-js";
import {KeycloakService} from "./services/keycloak.service.ts";

const keycloakConfig = new Keycloak({
  url: "https://auth.pausegarra.es",
  realm: "principal",
  clientId: "russian-cheatsheet",
});

export const keycloakService = new KeycloakService(keycloakConfig);