import * as React from "react";
import { IBillEditButtonProps } from "./types/IBillEditButtonProps";
import { Button } from "react-bootstrap";

class BillEditButton extends React.Component<IBillEditButtonProps, {}> {
  // constructor(props: IBillEditButtonProps, context: any) {
  //   super(props, context);
  // }

  public handleClick = () => {
    console.log("got id: ", this.props.id);
    this.onEditBill();
  };

  public render() {
    return (
      <Button
        // bsStyle="warning"
        onClick={this.handleClick}
      >
        edit
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
