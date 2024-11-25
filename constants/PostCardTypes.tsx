export interface DashboardPost {
	user: string;
	userProfile: string;
	title: string;
	caption: string;
	mediaLinks: string[];
	createdAt: Date;
}

export interface PostCardProps {
	post: DashboardPost;
}
