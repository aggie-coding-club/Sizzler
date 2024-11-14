import axios from "axios";
import { User } from "@/constants/ResponseTypes";

export const getUsers = async (): Promise<User[] | undefined> => {
	const response = await axios
		.get<User[]>(`${process.env.EXPO_PUBLIC_BACKEND_URL}/users`, {
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
