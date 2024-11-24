import React, { useState } from "react";
import {
	Image,
	StyleSheet,
	View,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { Card, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/EvilIcons";

export default function HomeScreen() {
	const [postText, setPostText] = useState("");
	const [dummyPostList, setDummyPostList] = useState([
		{
			user: "user123",
			userProfile: "https://via.placeholder.com/30x30",
			title: "Header of the post",
			caption:
				"Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla quam finibus primis, viverra amet arcu. ",
			mediaLinks: ["https://via.placeholder.com/200x200"],
		},
		{
			user: "user123",
			userProfile: "https://via.placeholder.com/30x30",
			title: "Header of the post",
			caption:
				"Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla quam finibus primis, viverra amet arcu. ",
			mediaLinks: ["https://via.placeholder.com/200x200"],
		},
		{
			user: "user123",
			userProfile: "https://via.placeholder.com/30x30",
			title: "Header of the post",
			caption:
				"Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla quam finibus primis, viverra amet arcu. ",
			mediaLinks: ["https://via.placeholder.com/200x200"],
		},
		{
			user: "user123",
			userProfile: "https://via.placeholder.com/30x30",
			title: "Header of the post",
			caption:
				"Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla quam finibus primis, viverra amet arcu. ",
			mediaLinks: ["https://via.placeholder.com/200x200"],
		},
	]);

	const currentUser = {
		user: "currentUser",
		userProfile: "https://via.placeholder.com/30x30",
	};

	const handlePostSubmit = () => {
		if (postText.trim()) {
			setDummyPostList([
				{
					user: "currentUser",
					userProfile: "https://via.placeholder.com/30x30",
					title: "New Post",
					caption: postText,
					mediaLinks: [],
				},
				...dummyPostList,
			]);
			setPostText("");
		}
	};
	return (
		<ScrollView style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					source={require("../../assets/images/logo.png")}
					style={styles.logo}
				/>
			</View>
			{/* Search Bar */}
			<View style={styles.searchBarContainer}>
				<TextInput
					style={styles.searchBar}
					placeholder="Search..."
					placeholderTextColor="gray"
					onChangeText={(text) => console.log(text)}
				/>
			</View>

			{/*posting form*/}
			<View style={styles.postFormContainer}>
				<View style={styles.postHeader}>
					<Image
						source={{ uri: currentUser.userProfile }}
						style={styles.profileImage}
					/>
					<View style={styles.userInfo}>
						<Text style={styles.usernameText}>{currentUser.user}</Text>{" "}
						{/* Display user name */}
					</View>
				</View>
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
			</View>

			{/* Use .map() to render each post as a card */}
			{dummyPostList.map((post, index) => (
				<Card key={index} style={styles.card}>
					<Card.Content>
						<View style={styles.postHeader}>
							<Image
								source={{ uri: post.userProfile }}
								style={styles.profileImage}
							/>
							<View style={styles.userInfo}>
								<Text variant="titleSmall">{post.user}</Text>
							</View>
						</View>

						<Text variant="titleLarge">{post.title}</Text>
						<Text variant="bodyMedium">{post.caption}</Text>

						{/* Render media links if any */}
						{post.mediaLinks.length > 0 && (
							<TouchableOpacity onPress={() => console.log("image tapped")}>
								<View style={styles.mediaContainer}>
									{post.mediaLinks.map((link, idx) => (
										<Image
											key={idx}
											source={{ uri: link }}
											style={styles.mediaImage}
										/>
									))}
								</View>
							</TouchableOpacity>
						)}
					</Card.Content>
					{/* Action Buttons (Like, Save, Comment, Share) */}
					<View style={styles.actionContainer}>
						<TouchableOpacity style={styles.actionButton}>
							<Icon name="heart" size={30} color="#fa8072" />
						</TouchableOpacity>

						<TouchableOpacity style={styles.actionButton}>
							<Icon name="star" size={30} color="#FF9800" />
						</TouchableOpacity>

						<TouchableOpacity style={styles.actionButton}>
							<Icon name="comment" size={30} color="#696969" />
						</TouchableOpacity>

						<TouchableOpacity style={styles.actionButton}>
							<Icon name="share-apple" size={30} color="#696969" />
						</TouchableOpacity>
					</View>
				</Card>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		paddingBottom: 16,
		backgroundColor: "#faebd7",
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
	searchBar: {
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 25,
		paddingLeft: 10,
		fontSize: 16,
		backgroundColor: "#ffff",
	},
	searchBarContainer: {
		marginHorizontal: 20,
		marginBottom: 10,
		width: "90%",
		alignSelf: "center",
	},
	postFormContainer: {
		marginBottom: 12,
		marginTop: 12,
		borderRadius: 10,
		padding: 12,
		width: "90%",
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
	card: {
		marginBottom: 12,
		marginTop: 12,
		borderRadius: 10,
		padding: 12,
		width: "90%",
		elevation: 2,
		alignSelf: "center",
		backgroundColor: "#ffff",
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
	mediaContainer: {
		marginTop: 12,
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 8,
	},
	mediaImage: {
		width: 200,
		height: 200,
		borderRadius: 8,
		marginBottom: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	actionContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		paddingVertical: 10,
		borderTopWidth: 1,
		borderTopColor: "#f0f0f0",
	},
	actionButton: {
		alignItems: "center",
		paddingVertical: 5,
	},
	actionText: {
		fontSize: 14,
		color: "#555",
		marginTop: 5,
	},
});
