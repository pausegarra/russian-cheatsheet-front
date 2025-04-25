export interface AuthService {

  init(cb: () => void): Promise<void>;

  loadUserProfile(): Promise<{  }>;

  login(): void;

}