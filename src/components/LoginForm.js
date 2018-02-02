import React , { Component } from 'react';
import { emailChanged } from '../actions';
import { Card , Input , CardSection , Button} from './common';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}


	render() {
		return(
			<Card>
				<CardSection>
					<Input 
						label="Email :"
						placeholder="email@email.com"
						onChangeText={this.onEmailChange.bind(this)}
					/>
				</CardSection>

				<CardSection>
					<Input 
						secureTextEntry
						label="Password :"
						placeholder="password"
					/>
				</CardSection>

				<CardSection>
					<Button>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default connect(null , { emailChanged })(LoginForm);








