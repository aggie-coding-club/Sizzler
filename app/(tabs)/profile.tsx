import React, { useState } from "react";
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

export default function ProfileScreen() {
    const router = useRouter();
    const userInformation = {
        username: "exampleUser",
        firstName: "first",
        lastName: "last",
        bio: "Example bio"
    
    }
    //document.getElementById('user').innerHTML = userInformation.username;

    return (
        <ScrollView style={styles.container}>
			<View style={[styles.viewContainer, styles.logoContainer]}>
				<Image
					source={require("@/assets/images/logo.png")}
					style={styles.logo}
				/>
			</View>
            <View style = {[styles.viewContainer, styles.logoContainer]}>
                <Image
                    source = {require("@/assets/images/pfp.png")}
                    style={styles.profileImage}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.offsetText}>@{userInformation.username}</Text>
                <Text style={styles.alignedText}>{userInformation.firstName} {userInformation.lastName}</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.postActions}>
					    <TouchableOpacity style={styles.editButton}>
					    <Text style={styles.postButtonText}>Edit Profile</Text>
					    </TouchableOpacity>
				    </View>
                    <View style={styles.postActions}>
					    <TouchableOpacity style={styles.deleteButton}>
					    <Text style={styles.postButtonText}>Delete Profile</Text>
					    </TouchableOpacity>
				    </View>
                </View>
            </View>
            
        </ScrollView>
    )
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
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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
	editButton: {
		backgroundColor: "#fa8072",
		paddingHorizontal: 40,
		paddingVertical: 8,
		borderRadius: 25,
        marginRight: 200
	},
    deleteButton: {
		backgroundColor: "#fa8072",
		paddingHorizontal: 40,
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
		width: 200,
		height: 200,
		borderRadius: 100,
		marginRight: 10,
	},
	userInfo: {
		flexDirection: "column",
	},
	usernameText: {
        textAlign: "center",
        marginRight: 200,
		fontSize: 16,
		fontWeight: "bold",
	},
    nameText: {
        textAlign:"center",
        marginRight: 200,
        fontSize: 16,
        fontWeight: "bold"
    },
    textContainer: {
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
        margin: "auto",
    },
    offsetText: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 200,
        padding: 0,
    },
    alignedText: {
        fontSize: 16,
        color: "gray",
        margin: 0,
        padding: 0,
    }
});