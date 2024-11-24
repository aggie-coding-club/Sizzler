export interface User {
	id: string;
	created_at: Date;
	user_type: string;
	email: string;
}

export interface Post {
	id: string;
	created_at: Date;
	user_id: string;
	title: string;
	caption: string;
	media_links: string[] | null;
}
