import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Searchbar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = price => {
		return results.filter(result => {
			return result.price === price;
		});
	};

	return (
		<>
			<Searchbar
				term={term}
				onTermSubmit={() => searchApi(term)}
				onTermChange={setTerm}
			/>
			<Text>{errorMessage}</Text>
			<ScrollView>
				<ResultsList
					results={filterResultsByPrice("$")}
					title='Cost Effective'
				/>
				<ResultsList results={filterResultsByPrice("$$")} title='Bit Pricier' />
				<ResultsList
					results={filterResultsByPrice("$$$")}
					title='Big Spender'
				/>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1
	}
});

export default SearchScreen;
