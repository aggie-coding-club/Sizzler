export interface UserPost {
	user: string;
	userProfile: string;
	title: string;
	caption: string;
	mediaLinks: string[];
}

export interface PostCardProps {
	post: UserPost;
}
