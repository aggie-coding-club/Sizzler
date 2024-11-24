export interface CreatePost {
	created_at: Date;
	user_id: string;
	title: string;
	caption: string;
	media_links: string[] | null;
}

export interface UpdatePost {
	id: string;
	created_at?: Date;
	user_id?: string;
	title?: string;
	caption?: string;
	media_links?: string[] | null;
}

export interface DeletePost {
	id: string;
}
