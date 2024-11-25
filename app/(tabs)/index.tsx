import React, { useEffect, useState } from "react";
import {
	Image,
	StyleSheet,
	View,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { fakePostsData } from "@/constants/TestData";
import { Avatar, Card, Searchbar } from "react-native-paper";
import PostCard from "@/components/PostCard";
import HorizontalScroll from "@/components/HorizontalScroll";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/EvilIcons";
import { DashboardPost } from "@/constants/PostCardTypes";
import { getDashboardPosts } from "@/api/posts";

export default function HomeScreen() {
	const router = useRouter();

	const [searchQuery, setSearchQuery] = React.useState<string>("");
	const [postText, setPostText] = useState("");
	const [postList, setPostList] = useState<DashboardPost[]>([]);

	useEffect(() => {
		const getDashboardPostData = async () => {
			const dashboardPosts = await getDashboardPosts();
			if (dashboardPosts) {
				setPostList(dashboardPosts!);
			}
		};
		getDashboardPostData();
	}, []);

	const currentUser = {
		user: "currentUser",
		userProfile: "https://via.placeholder.com/30x30",
	};

	const handlePostSubmit = () => {
		if (postText.trim()) {
			setPostList([
				{
					user: "currentUser",
					userProfile: "https://via.placeholder.com/30x30",
					title: "New Post",
					caption: postText,
					mediaLinks: [],
					createdAt: new Date(),
				},
				...postList,
			]);
			setPostText("");
		}
	};

	const CreatePostLeftContent = (props: { size: number }) => (
		<Avatar.Icon {...props} icon={currentUser.userProfile} />
	);

	return (
		<ScrollView style={styles.container}>
			<View style={[styles.viewContainer, styles.logoContainer]}>
				<Image
					source={require("@/assets/images/logo.png")}
					style={styles.logo}
				/>
			</View>

			{/* Search Bar */}
			<View style={[styles.viewContainer, styles.searchBarContainer]}>
				<Searchbar
					placeholder="Search..."
					onChangeText={setSearchQuery}
					value={searchQuery}
					// style={styles.searchBar}
				/>
			</View>

			{/* Recommendation Bar */}
			<View style={[styles.viewContainer, styles.recommendationBarContainer]}>
				<HorizontalScroll />
			</View>

			{/* Create Post Form */}
			<View style={[styles.viewContainer, styles.postFormContainer]}>
				<Card style={styles.postFormCard}>
					<Card.Title
						title={currentUser.user}
						left={() => CreatePostLeftContent({ size: 35 })}
					/>
					<Card.Content>
						<TextInput
							style={styles.postInput}
							placeholder="What's happening?"
							placeholderTextColor="gray"
							multiline
							value={postText}
							onChangeText={(text) => setPostText(text)}
							maxLength={280}
						/>
						<TouchableOpacity style={styles.imageButton}>
							<Icon name="image" size={30} color="#696969" />
						</TouchableOpacity>
						<View style={styles.postActions}>
							<TouchableOpacity
								style={styles.postButton}
								onPress={handlePostSubmit}
							>
								<Text style={styles.postButtonText}>Post</Text>
							</TouchableOpacity>
						</View>
					</Card.Content>
				</Card>
			</View>

			{/* List of Posts */}
			<View style={[styles.viewContainer, styles.postsContainer]}>
				{postList.map((post, index) => (
					<PostCard key={index} post={post} />
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		paddingBottom: 16,
		backgroundColor: "#faebd7",
	},
	viewContainer: {
		maxWidth: 650,
		width: "90%",
		marginInline: "auto",
	},
	logo: {
		width: 200,
		height: 80,
		resizeMode: "contain",
	},
	logoContainer: {
		alignItems: "center",
		marginBottom: 20,
	},
	postHeader: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	searchBarContainer: {
		marginBottom: 10,
	},
	recommendationBarContainer: {
		paddingBlock: 5,
	},
	postsContainer: {
		paddingInline: 15,
		marginBottom: 10,
		alignSelf: "center",
	},
	postFormContainer: {
		paddingInline: 15,
		marginBottom: 10,
		alignSelf: "center",
	},
	postFormCard: {
		width: "100%",
		marginBlock: 12,
		borderRadius: 20,
		padding: 12,
		elevation: 2,
		alignSelf: "center",
		backgroundColor: "#ffff",
	},
	postInput: {
		height: 100,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 8,
		padding: 10,
		fontSize: 16,
		textAlignVertical: "top",
	},
	postActions: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	postButton: {
		backgroundColor: "#fa8072",
		paddingHorizontal: 20,
		paddingVertical: 8,
		borderRadius: 25,
	},
	postButtonText: {
		color: "white",
		fontWeight: "bold",
	},
	imageButton: {
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	profileImage: {
		width: 30,
		height: 30,
		borderRadius: 20,
		marginRight: 10,
	},
	userInfo: {
		flexDirection: "column",
	},
	usernameText: {
		fontSize: 16,
		fontWeight: "bold",
	},
});
