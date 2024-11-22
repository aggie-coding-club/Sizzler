import LogIn from '../auth/log_in';
import React from "react";
import { Image, StyleSheet, View, TextInput, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import PostCard from "@/components/PostCard";

export default function HomeScreen() {
	const router = useRouter();
	const dummyPostList = [
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
	];

	return (
		<ScrollView style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					source={require("@/assets/images/logo.png")}
					style={styles.logo}
				/>
			</View>
			{/* Search Bar */}
			<View style={styles.searchBarContainer}>
				<TextInput
					style={styles.searchBar}
					placeholder="Search..."
					onChangeText={(text) => console.log(text)}
				/>
			</View>
			{/* Use .map() to render each post as a card */}

			{dummyPostList.map((post, index) => (
				<PostCard key={index} post={post} />
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
	searchBar: {
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 8,
		paddingLeft: 10,
		fontSize: 16,
		backgroundColor: "#ffff",
	},
	searchBarContainer: {
		marginHorizontal: 20,
		marginBottom: 10,
	},
});
