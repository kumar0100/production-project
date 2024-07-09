import { LOCAL_STORAGE_THEME_KEY } from "app/providers/theme-provider/lib/ThemeContext";
import axios from "axios";

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || '',
    },
});
