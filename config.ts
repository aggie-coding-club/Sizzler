const BACKEND_HOST =
	process.env.EXPO_PUBLIC_WIFI_HOST || process.env.EXPO_PUBLIC_TAMU_WIFI_HOST;
const BACKEND_PORT = process.env.EXPO_PUBLIC_BACKEND_PORT || "8081";

export const CONFIG = {
	BACKEND_URL: `http://${BACKEND_HOST}:${BACKEND_PORT}`,
};
