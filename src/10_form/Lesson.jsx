import { Component, Fragment } from "react";

const POSITIONS = [
  {
    id: "fd",
    value: "Front-end Developer",
    title: "Front-end Developer",
  },
  {
    id: "bd",
    value: "Back-end Developer",
    title: "Back-end Developer",
  },
];

class Form extends Component {
  state = {
    inputText: "",
    textareaText: "",
    selectText: "",
    showData: {
      name: "",
      text: "",
      position: "",
    },
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      inputText: value,
    });
  };

  handleTextareaChange = ({ target: { value } }) => {
    this.setState({
      textareaText: value,
    });
  };

  handleSelectChange = ({ target: { value } }) => {
    this.setState({
      selectText: value,
    });
  };

  handleShow = (e) => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;
    this.setState({
      inputText: "",
      textareaText: "",
      selectText: "",
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      },
    });
  };

  render() {
    const { inputText, textareaText, selectText, showData } = this.state;
    const { name, text, position } = showData;
    return (
      <Fragment>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={inputText}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            value={textareaText}
            onChange={this.handleTextareaChange}
          />
          <select value={selectText} onChange={this.handleSelectChange}>
            {POSITIONS.map(({ id, value, title }) => (
              <option key={id} value={value}>
                {title}
              </option>
            ))}
          </select>
          <br />
          <button onClick={this.handleShow}>Show</button>
          <h2>{name}</h2>
          <h3>{text}</h3>
          <h3>{position}</h3>
        </form>
      </Fragment>
    );
  }
}

export default Form;
