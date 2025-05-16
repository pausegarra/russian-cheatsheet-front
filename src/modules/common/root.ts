import { FetchService } from "@betino/fetch";
import { NotificationsService } from "./services/notifications.service.tsx";

export const fetchService = new FetchService(import.meta.env.VITE_API_URL);
export const notificationsService = new NotificationsService();
