import * as React from "react";
import { connect } from "react-redux";
import "./selectBox.css";
// const options = [
//   "Select an Option",
//   "First Option",
//   "Second Option",
//   "Third Option",
// ];

export interface SelectBoxProps {
  readonly options: string[];
  readonly selectedCategory: string;
  readonly onSelectCategory: (props: string) => void;
}

export interface SelectBoxState {
  value: string;
  valid: boolean;
}

class SelectBox extends React.Component<SelectBoxProps, SelectBoxState> {
  constructor(props: SelectBoxProps) {
    super(props);
    this.state = {
      value: props.selectedCategory,
      valid: true,
    };
    // this.onChange = this.onChange.bind(this);
  }

  public onChange = (e: any) => {
    if (e.target.value === "Category") {
      this.setState({
        value: e.target.value,
        valid: false,
      });
    } else {
      this.setState({
        value: e.target.value,
        valid: true,
      });
      this.props.onSelectCategory(e.target.value);
    }
  };

  public render() {
    const { value, valid } = { ...this.state };
    const { options } = { ...this.props };
    // console.log(this.state);
    return (
      <div className="form-group margin-bottom-0p2rem">
        {/* <label htmlFor="select2">Select2</label> */}
        <br />
        <select
          value={value}
          onChange={this.onChange}
          className={valid ? "form-control" : "form-control invalid"}
        >
          <option value={value}>{value}</option>
          {options.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default connect(undefined, undefined)(SelectBox);
