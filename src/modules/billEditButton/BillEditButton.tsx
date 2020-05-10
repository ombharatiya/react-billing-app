import * as React from "react";
import { IBillEditButtonProps } from "./types/IBillEditButtonProps";
import { Button } from "react-bootstrap";
import "./BillEditButton.css";
class BillEditButton extends React.Component<IBillEditButtonProps, {}> {
  // constructor(props: IBillEditButtonProps, context: any) {
  //   super(props, context);
  // }

  public handleClick = () => {
    this.onEditBill();
  };

  public render() {
    return (
      <Button
        className="form-edit-button"
        // bsStyle="warning"
        onClick={this.handleClick}
      >
        Edit
      </Button>
    );
  }

  public onEditBill = () => {
    this.props.onEditBill(this.props.id);
  };
}

export default BillEditButton;
// const mapActionsToProps = {
//   onEditBill: deleteBill,
// };

// export default connect(undefined, mapActionsToProps)(BillEditButton);
