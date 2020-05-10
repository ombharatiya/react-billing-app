import * as React from "react";
import { IBillCloseButtonProps } from "./types/IBillCloseButtonProps";
import { Button } from "react-bootstrap";
import "./BillCloseButton.css";

class BillCloseButton extends React.Component<IBillCloseButtonProps, {}> {
  // constructor(props: IBillCloseButtonProps, context: any) {
  //   super(props, context);
  // }

  public handleClick = () => {
    console.log("got id: ", this.props.id);
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
          delete
        </Button>
      </span>
    );
  }

  public onRemoveBill = () => {
    this.props.onRemoveBill(this.props.id);
  };
}

export default BillCloseButton;

// const mapActionsToProps = {
//   onRemoveBill: deleteBill,
// };

// const mapDispatchToProps: (dispatch: React.Dispatch<AnyAction>) => any = (
//   dispatch
// ) => ({
//   onRemoveBill: (id: number) => {
//     dispatch(BillsActions.deleteBillStart({ id }));
//   },
// });

// export default connect(undefined, mapDispatchToProps)(BillCloseButton);
