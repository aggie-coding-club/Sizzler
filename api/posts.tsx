import axios from "axios";
import { Post, User } from "@/constants/ResponseTypes";
import { CONFIG } from "@/config";

export const getPosts = async (): Promise<Post[] | undefined> => {
	const response = await axios
		.get<Post[]>(`${CONFIG.BACKEND_URL}/posts/read`, {
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

export const getPostByID = async (
	postID: string
): Promise<Post | undefined> => {
	const response = await axios
		.get<Post>(`${CONFIG.BACKEND_URL}/posts/read/post/${postID}`, {
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

export const getPostsByUserID = async (
	userID: string
): Promise<Post[] | undefined> => {
	console.log(`getUserByID: ${CONFIG.BACKEND_URL}/posts/read/user/${userID}`);
	const response = await axios
		.get<Post[]>(`${CONFIG.BACKEND_URL}/posts/read/user/${userID}`, {
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

export const createPost = async (post: Post) => {
	await axios
		.post<Post>(`${CONFIG.BACKEND_URL}/posts/create`, post, {
			headers: {
				"Content-Type": "application/json",
				// Authorization: `Bearer ${}`,
			},
		})
		.catch((error) => {
			console.error("Error creating post:", error);
		});
};

export const updatePost = async (post: Post) => {
	await axios
		.post<Post>(`${CONFIG.BACKEND_URL}/posts/update`, post, {
			headers: {
				"Content-Type": "application/json",
				// Authorization: `Bearer ${}`,
			},
		})
		.catch((error) => {
			console.error("Error updating post:", error);
		});
};

export const deletePost = async (post: Post) => {
	console.log("delete:", post);
	await axios
		.post<Post>(`${CONFIG.BACKEND_URL}/posts/delete`, post, {
			headers: {
				"Content-Type": "application/json",
				// Authorization: `Bearer ${}`,
			},
		})
		.catch((error) => {
			console.error("Error deleting post:", error);
		});
};
