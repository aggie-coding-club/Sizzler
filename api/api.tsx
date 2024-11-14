import axios from "axios";
import { User } from "@/constants/ResponseTypes";

export const getUsers = async (): Promise<User[] | undefined> => {
	console.log(
		`http://${
			process.env.EXPO_PUBLIC_LOCAL_WIFI_HOST ||
			process.env.EXPO_PUBLIC_TAMU_WIFI_HOST
		}:${process.env.EXPO_PUBLIC_BACKEND_PORT}/users`
	);
	const response = await axios
		.get<User[]>(
			`http://${
				process.env.EXPO_PUBLIC_LOCAL_WIFI_HOST ||
				process.env.EXPO_PUBLIC_TAMU_WIFI_HOST
			}:${process.env.EXPO_PUBLIC_BACKEND_PORT}/users`,
			{
				headers: {
					// Authorization: `Bearer ${}`,
				},
			}
		)
		.then((response) => {
			console.log(response);
			return response.data;
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
			return undefined;
		});
	console.log(response);
	return response;
};
