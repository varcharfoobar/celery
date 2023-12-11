import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react'



// Main Function
export default function App() {

	// for keeping the state of the content
	const [enteredGoalText, setEnteredGoalText] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	// Touchable Opacity Button
	const AppButton = ({ onPress, title }) => (
		<TouchableOpacity
		  activeOpacity={0.8}
		  onPress={onPress}
		  style={styles.appButtonContainer}
		>
		  <Text style={styles.appButtonText}>{title}</Text>
		</TouchableOpacity>
	  );

	// the input handler
	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText)

		// console.log(enteredText); // for debugging 
	};

	// add button hander
	function addGoalHandler() {
		setCourseGoals(currentCourseGoals => [...courseGoals, enteredGoalText]); // recommended way to update your state
		// console.log(enteredGoalText) // for debugging
	};


  /**
   * This is where the app structure is held
   */
	return (
		<View style={styles.appContainer}>
			
			<View style={styles.inputContainer}>
				<TextInput 
					styles={styles.customInput}
					placeholder='Your course goal!!'
					onChangeText={goalInputHandler} />

				<AppButton onPress={addGoalHandler} title="Add Goal"></AppButton>
		
			</View>

			<View style={styles.goalsContainer}>
				{courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)} 
			</View>
		</View>
	);
}


// Our stylesheet object
const styles = StyleSheet.create({

	// the main container
	appContainer: {
		flex: 1,
		gap: 30,
		padding: 60,
		paddingHorizontal: 20,
	},

	// the input container
	inputContainer: { 
		flex: 1,
		backgroundColor: "#eeeeee",
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		alignItems: 'center',
		borderRadius: 15,
		borderBottomColor: '#cccccc',
		
	},

	// for text input container
	customInput: {
		borderWidth: 2,
		borderColor: '#cccccc',
		width: '80%',
		marginRight: 8,
		padding: 8
	},

	// goals container
	goalsContainer: {
		flex: 5,
		padding: 30,
		backgroundColor: "#eeeeee",
		borderRadius: 15,
	},

	/**
	 * Button styles go here
	 */
	appButtonContainer: {
		elevation: 8,
		backgroundColor: "#009688",
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12
	},
	appButtonText: {
		fontSize: 18,
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase"
	}
});