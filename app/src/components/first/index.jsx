import React from "react";

class First extends React.Component {
    state = {
        text: "",
        color: ""
    };

    handleChange = (e) => {
        const newText = e.target.value;
        this.setState({ text: newText
        });

        let color = "grey";

        if (newText.length >= 30) {
            color = "green";
        } else if (newText.length >= 15) {
            color = "red";
        }

        this.setState ({color:color})
    }

    render() {
        const { text, color } = this.state;
        const textStyle = { color: color };

        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <p style={textStyle}>{text}</p>
            </div>
        );
    }
}

export default First;

