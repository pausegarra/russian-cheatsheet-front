import { UserEntity } from "../entities/user.entity.ts";

export interface AuthService {

  init(cb: () => void): Promise<void>;

  loadUserProfile(): Promise<UserEntity>;

  login(): void;

  getPermissions(): Promise<string[]>;

  isAuthenticated(): boolean;

  logout(): void;

  getAccessToken(): string | undefined;

}