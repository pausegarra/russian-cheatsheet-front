import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://auth.pausegarra.es",
  realm: "principal",
  clientId: "russian-cheatsheet",
});

function initKeycloak(cb: () => void) {
  keycloak.init({
    onLoad: 'check-sso',
    pkceMethod: 'S256',
    checkLoginIframe: false,
  }).then((authenticated) => {
    console.log(authenticated)
    cb()
  })
}

export {
  keycloak,
  initKeycloak
}