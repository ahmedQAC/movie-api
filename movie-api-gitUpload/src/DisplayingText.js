import React, { Component } from 'react';

class DisplayingText extends Component{
    render(){
        return(
            <div className = "App-header">
                <h1>
                {this.props.DisplayingText}
                </h1>
                </div>
        )
    }
}
export default DisplayingText;