import LogIn from '../auth/log_in';
import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform
} from "react-native";
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import { Card, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/EvilIcons";
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
          onChangeText={(text) => console.log(text)}
        />
      </View>

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
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "#ffff",
  },
  searchBarContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
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
