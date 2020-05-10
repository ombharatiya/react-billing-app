import * as React from "react";
import { IBillCloseButtonProps } from "./types/IBillCloseButtonProps";
import { Button } from "react-bootstrap";
import "./BillCloseButton.css";

class BillCloseButton extends React.Component<IBillCloseButtonProps, {}> {
  // constructor(props: IBillCloseButtonProps, context: any) {
  //   super(props, context);
  // }

  public handleClick = () => {
    this.onRemoveBill();
  };

  public render() {
    return (
      <span>
        <Button
          className="form-delete-button"
          //  bsStyle="danger"
          onClick={this.handleClick}
        >
          Delete
        </Button>
      </span>
    );
  }

  public onRemoveBill = () => {
    this.props.onRemoveBill(this.props.id);
  };
}

export default BillCloseButton;
