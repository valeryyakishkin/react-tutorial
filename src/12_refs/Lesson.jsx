import React, { Component, Fragment } from "react";

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

  inputRef = React.createRef();
  textareaRef = React.createRef();
  selectRef = React.createRef();

  componentWillMount() {
    console.log('cwm', this.inputRef);
  }

  componentDidMount() {
    console.log('cdm', this.inputRef);
  }

  handleChange = () => {
    this.setState({
        inputText: this.inputRef.current.value,
        textareaText: this.textareaRef.current.value,
        selectText: this.selectRef.current.value,
    })
  }

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
              onChange={this.handleChange}
              ref={this.inputRef}
            />
          </label>
          <br />
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            value={textareaText}
            onChange={this.handleChange}
            ref={this.textareaRef}
          />
          <select value={selectText} onChange={this.handleChange} ref={this.selectRef}>
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
