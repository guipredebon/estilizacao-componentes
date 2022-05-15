import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import TextArea from '../../TextArea';
import styles from './style';

function Home() {
	const [state, setTitle] = useState({ title: '' });
	return (
		< View style={styles.container}>
			< Text style={styles.titleHeading}> Título da anotação </ Text >
			< TextInput style={styles.titleTextInput}
				onChangeText={(title) => setTitle({ title })}
				value={state.title} />
			< Text style={styles.textAreaTitle}> Digite sua anotação
				aqui: </ Text >
			< TextArea />
		</ View >
	);
}
export default Home;
