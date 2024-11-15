import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from "react-native-paper";
import { getUsers } from "@/api/users";
import {
	getPostByID,
	getPosts,
	getPostsByUserID,
	createPost,
	updatePost,
	deletePost,
} from "@/api/posts";
import { Post } from "@/constants/ResponseTypes";
import { v4 as uuidv4 } from "uuid";

export default function HomeScreen() {
	const testPost: Post = {
		id: "7c9a2d6f-8e67-4ffe-aa6e-895c66871dbd",
		created_at: new Date("2024-11-15T06:29:02.822633+00:00"),
		user_id: "94eb06b1-35c4-426c-a8cb-e610dd4ed5cf",
		title: "test title",
		caption: "test caption",
		media_links: null,
	};
	const updatedPost: Post = {
		id: "7c9a2d6f-8e67-4ffe-aa6e-895c66871dbd",
		created_at: new Date(),
		user_id: "94eb06b1-35c4-426c-a8cb-e610dd4ed5cf",
		title: "hello",
		caption: "testing caption hello",
		media_links: null,
	};

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
			headerImage={
				<Image
					source={require("@/assets/images/partial-react-logo.png")}
					style={styles.reactLogo}
				/>
			}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Welcome to sizzler</ThemedText>
				<HelloWave />
			</ThemedView>
			<Button onPress={getUsers}>Get Users</Button>
			<Button onPress={getPosts}>Get Posts</Button>
			<Button
				onPress={() => getPostByID("688ae4d0-2401-4ad8-af0d-6f268467e88a")}
			>
				Get Specific Post
			</Button>
			<Button
				onPress={() => getPostsByUserID("94eb06b1-35c4-426c-a8cb-e610dd4ed5cf")}
			>
				Get Posts By User
			</Button>
			<Button onPress={() => createPost(testPost)}>Create Post</Button>
			<Button onPress={() => updatePost(updatedPost)}>Update Post</Button>
			<Button
				onPress={() => {
					deletePost(testPost);
				}}
			>
				Delete Post
			</Button>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Step 1: Try it</ThemedText>
				<ThemedText>
					Edit{" "}
					<ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
					to see changes. Press{" "}
					<ThemedText type="defaultSemiBold">
						{Platform.select({ ios: "cmd + d", android: "cmd + m" })}
					</ThemedText>{" "}
					to open developer tools.
				</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Step 2: Explore</ThemedText>
				<ThemedText>
					Tap the Explore tab to learn more about what's included in this
					starter app.
				</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
				<ThemedText>
					When you're ready, run{" "}
					<ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
					to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
					directory. This will move the current{" "}
					<ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
					<ThemedText type="defaultSemiBold">app-example</ThemedText>.
				</ThemedText>
			</ThemedView>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
