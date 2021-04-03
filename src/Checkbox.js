import { Component } from "react";

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete: this.props.entry.completed
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const { tasks, index } = this.props;
        this.setState({
           isComplete: e.target.checked
        });
        tasks[index].completed = e.target.checked;
    }

    render() {
        return (
          <input
              type="checkbox"
              checked={this.state.isComplete}
              onChange={this.handleInputChange}
          />
        );
    }
}
export default Checkbox;