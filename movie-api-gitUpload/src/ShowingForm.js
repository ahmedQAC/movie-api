import React, { Component } from 'react';
import DisplayingText from './DisplayingText.js'

class ShowingForm extends Component {
    constructor() {
        super();
        this.state = {
            inputText: "",
            displayText: "Type in the text you want to display"
        }
        this.updateText = (event) => {
            this.setState({
                inputText: event.target.value
            });
        }

        this.setText = () => {
            this.setState({
                displayText: this.state.inputText
            });
        }
    }

    render() {
        return (
            <div>
                <form>
                    <DisplayingText DisplayingText={this.state.displayText} />
                    Enter Name:<input type="text" onChange={this.updateText} />
                    <button type="button" onClick={this.setText}>UpdateText</button>
                </form>
            </div>
        )
    }
}
export default ShowingForm;