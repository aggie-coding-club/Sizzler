import LogIn from '../auth/log_in';
import React from "react";
import { Image, StyleSheet, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import PostCard from "@/components/PostCard";
import { fakePostsData } from "@/constants/TestData";
import { Searchbar } from "react-native-paper";
import HorizontalScroll from "@/components/HorizontalScroll";

export default function HomeScreen() {
	const router = useRouter();

	const [searchQuery, setSearchQuery] = React.useState<string>("");

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
				<Searchbar
					placeholder="Search..."
					onChangeText={setSearchQuery}
					value={searchQuery}
				/>
			</View>

			<View style={styles.recommendationBarContainer}>
				<HorizontalScroll />
			</View>

			<View style={styles.postsContainer}>
				{/* Use .map() to render each post as a card */}
				{fakePostsData.map((post, index) => (
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
		paddingInline: 15,
		marginBottom: 10,
	},
	recommendationBarContainer: {
		paddingBlock: 5,
	},
	postsContainer: {
		paddingInline: 15,
	},
});
