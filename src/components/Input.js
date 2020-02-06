import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             text: ""
        }
    }
    

    onChange(e) {
        this.setState({text: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.text !== "") {
            this.props.onSendMessage(this.state.text);
            this.setState({text: ""});
        }
        else {}
    }

    render() {
        return (
            <div className = "Input">
                <form onSubmit = {e => this.onSubmit(e)}>
                    <input
                        onChange = {e => this.onChange(e)}
                        value = {this.state.text}
                        type = "text"
                        placeholder = "Enter your message and press ENTER"
                        autoFocus = {true}
                    />
                    <button type = "submit">Send</button>
                </form>                
            </div>
        )
    }
}

export default Input
