import React , { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged , passwordChanged , loginUser } from '../actions';
import { Card , Input , CardSection , Button} from './common';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPsswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const {email , password} = this.props;

		this.props.loginUser({ email , password});
	}

	render() {
		return(
			<Card>
				<CardSection>
					<Input 
						label="Email :"
						placeholder="email@email.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input 
						secureTextEntry
						label="Password :"
						placeholder="password"
						onChangeText={this.onPsswordChange.bind(this)}
						value={ this.props.password}
					/>
				</CardSection>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
}


const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password
	};
};

export default connect(mapStateToProps , { 
	emailChanged , passwordChanged , loginUser 
})(LoginForm);









