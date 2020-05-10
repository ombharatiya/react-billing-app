import * as React from "react";
import { connect } from "react-redux";
import { categories } from "src/utils/constants";
import "./selectBox.css";
// const options = [
//   "Select an Option",
//   "First Option",
//   "Second Option",
//   "Third Option",
// ];

export interface SelectBoxProps {
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
    if (e.target.value === "Select a Category") {
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
    // console.log(this.state);
    return (
      <div className="form-group">
        {/* <label htmlFor="select2">Select2</label> */}
        <br />
        <select
          value={this.state.value}
          onChange={this.onChange}
          className={this.state.valid ? "form-control" : "form-control invalid"}
        >
          <option value={"Select a Category"}>{"Select a Category"}</option>
          {categories.map((option) => {
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
