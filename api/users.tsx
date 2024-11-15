import axios from "axios";
import { User } from "@/constants/ResponseTypes";
import { CONFIG } from "@/config";

export const getUsers = async (): Promise<User[] | undefined> => {
	const response = await axios
		.get<User[]>(`${CONFIG.BACKEND_URL}/users`, {
			headers: {
				// Authorization: `Bearer ${}`,
			},
		})
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
