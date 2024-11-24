import React from "react";
import { Surface, Text, Title } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { fakeRestaurantsData } from "@/constants/TestData";

const HorizontalScroll = () => {
	return (
		<View>
			<Title style={styles.title}>Top Restaurants</Title>
			<ScrollView horizontal style={styles.horizontalScrollContainer}>
				{fakeRestaurantsData.map((restaurant, index) => (
					<Surface key={index} style={styles.icon} elevation={3}>
						<Text>{restaurant.nickname}</Text>
					</Surface>
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		paddingInline: 15,
	},
	horizontalScrollContainer: {
		padding: 15,
	},
	icon: {
		height: 75,
		width: 75,
		borderRadius: 20,
		marginRight: 15,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default HorizontalScroll;
