import React from "react";

class Second extends React.Component {
    state = {
        disabled: false
    }
  
    disableButton = () => {
        this.setState({
            disabled: true
        });
    }

    enableButton = () => {
        this.setState({
            disabled: false
        });
    }

    render() {
        return (
            <div>
                <input type="text" disabled={this.state.disabled} />
                <button onClick={this.disableButton} disabled={this.state.disabled}>
                    Disable
                </button>
                <button onClick={this.enableButton}>
                    Enable
                </button>
            </div>
        );
    }
}

export default Second;

