import * as React from "react";
import { IBillCloseButtonProps } from "./types/IBillCloseButtonProps";
// import { connect } from "react-redux";
// import { AnyAction } from "redux";
import { Button } from "react-bootstrap";
// import { BillsActions } from "src/stores/billsStores/actions/BillsActions";

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
      <Button
        //  bsStyle="danger"
        onClick={this.handleClick}
      >
        x
      </Button>
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
