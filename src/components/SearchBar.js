import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name='search' size={30} style={styles.iconStyle} />
			<TextInput
				value={term}
				onChangeText={newTerm => onTermChange(newTerm)}
				style={styles.inputStyle}
				autoCapitalize='none'
				autoCorrect={false}
				placeholder='Search'
				onEndEditing={() => {
					onTermSubmit();
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: "#f0eeee",
		height: 50,
		marginTop: 10,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row"
	},
	inputStyle: {
		flex: 1,
		fontSize: 18
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: "center",
		marginHorizontal: 15
	}
});

export default SearchBar;
