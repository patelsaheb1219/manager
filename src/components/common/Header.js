//Import libraries to make a new components
import React from 'react';
import  {Text , View} from 'react-native';

//Create a Component
const Header = (props) => {
	const { textStyle , viewStyle } = styles;
	return(
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	); 
}

const styles = {
	viewStyle:{
		backgroundColor:'#F2F2F2',
		justifyContent:'center',
		alignItems: 'center',
		height: 60,
		padding:15,
		shadowColor:'#000',
		shadowOffset: { width:0 , height: 2},
		shadowOpacity: 0.2
	},
	textStyle: {
		fontSize: 30
	}
};

///Make a component useable to other app
export {Header};