import { FetchService } from "@betino/fetch";

export const fetchService = new FetchService(import.meta.env.VITE_API_URL);