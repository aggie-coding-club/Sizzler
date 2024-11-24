import { PostCardProps } from "@/constants/PostCardTypes";
import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/EvilIcons";

const PostCard = ({ post }: PostCardProps) => {
	const LeftContent = (props: { size: number }) => (
		<Avatar.Icon {...props} icon={post.userProfile} />
	);
	return (
		<Card style={styles.card}>
			<Card.Title title={post.user} left={() => LeftContent({ size: 35 })} />
			<Card.Content>
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
	);
};

const styles = StyleSheet.create({
	postHeader: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	card: {
		marginBlock: 12,
		borderRadius: 20,
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

export default PostCard;
