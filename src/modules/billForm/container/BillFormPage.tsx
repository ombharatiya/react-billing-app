import React from "react";
import BillForm from "../component/BillForm";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { ApplicationState } from "src/stores/RootReducers";
import { ReducerState } from "src/stores/StoreHelper";
import { Bills, Bill } from "src/model/Bill";
import { AnyAction } from "redux";
import { BillsActions } from "src/stores/billsStores/actions/BillsActions";
import { getCurrentDate } from "../utils/billFormUtils";
import { routes } from "src/Routes";

// export interface IProps {
//   bills: Bill[];
// }

interface PropsFromState extends ReducerState {
  readonly bills: Bills | undefined;
  readonly selectedBillId: number | undefined;
  readonly newBillId: number | undefined;
}

interface PropsFromDispatch {
  readonly onAddBill: (newBill: Bill) => void;
  readonly onInit: () => void;
}

export interface IState {
  bill: Bill;
}

// interface BillFormState {
//   readonly newBillId: number;
// }

type PropsFromRoute = RouteComponentProps<{}>;

export type Props = PropsFromState & PropsFromRoute & PropsFromDispatch;

class BillFormPage extends React.Component<Props, IState> {
  constructor(props: Props, context: any) {
    super(props, context);
    // console.log()
    this.state = {
      bill: this.defaultBillState(),
    };
    this.initialize(props);
  }

  // componentDidMount() {
  //   console.log("BillFormPage componentdidmount props");
  //   console.log(this.props);
  //   if (this.props.success) {
  //     console.log("*************BillFormPage componentdidmount props success");
  //     const bill = this.defaultBillState();
  //     this.setState({
  //       bill,
  //     });
  //   }
  // }
  componentWillReceiveProps(nextProps: Props) {
    if (this.state.bill.id !== nextProps.newBillId) {
      var bill = this.state.bill;
      bill.id = nextProps.newBillId ? nextProps.newBillId : 999;
      this.setState({
        ...this.state,
        bill,
      });
    }
  }

  public render() {
    const newBillState = this.state.bill;
    // const newBillState = this.defaultBillState();
    // console.log("BillFormPage render newBillState", newBillState);
    return (
      <div className="BillFormPage">
        {this.props.success && (
          <BillForm bill={newBillState} onAddBill={this.onAddBill} />
        )}
      </div>
    );
  }

  private initialize(props: Props) {
    this.props.onInit();
  }

  private defaultBillState = () => ({
    id: this.props.newBillId ? this.props.newBillId : 2000,
    description: "",
    amount: 0,
    category: "Select a Category",
    date: getCurrentDate(),
  });

  private onAddBill = (bill: Bill) => {
    // console.log("BillFormPage onAddBill ", bill);
    this.props.onAddBill(bill);
    this.props.history.push(routes.bills.view());
  };
}

const mapStateToProps: (state: ApplicationState) => PropsFromState = (
  state
) => {
  console.log("BillsFormPage state", state);
  // console.log(state);
  return {
    loading: state.bills.loading,
    success: state.bills.success,
    error: state.bills.error,

    bills: state.bills.bills,
    selectedBillId: state.bills.selectedBillId,
    newBillId: state.bills.newBillId,
  };
};

const mapDispatchToProps: (
  dispatch: React.Dispatch<AnyAction>
) => PropsFromDispatch = (dispatch) => ({
  onAddBill: (newBill: Bill) => {
    // console.log("BillFormPage onAddBill");
    dispatch(BillsActions.addBillsStart({ bill: newBill }));
  },
  onInit: () => {
    console.log("BillFormPage despatch onInit");
    dispatch(BillsActions.getNewBillIdStart({}));
    dispatch(BillsActions.getBillsStart({}));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BillFormPage)
) as any;

// getSelectedBill() {
//   throw new Error("Method not implemented.");
// }

// private getSelectedBill = () => {
//   const selectedBillId = this.props.selectedBillId;
//   if (
//     selectedBillId === -1 ||
//     selectedBillId === undefined ||
//     this.props.bills === undefined
//   ) {
//     this.props.onUpdateBillid();
//     return this.defaultBillState();
//   } else {
//     const bill = this.props.bills.filter(
//       (bill) => bill.id === selectedBillId
//     );
//     if (bill === []) {
//       this.props.onUpdateBillid();
//       return this.defaultBillState();
//     } else return bill[0];
//   }
// };

// const mapDispatchToProps: (
//   dispatch: React.Dispatch<AnyAction>
// ) => PropsFromDispatch = (dispatch) => ({
//   // onSelectBill: (billId: string) => {
//   //   dispatch(BillsActions.getSelectedBill({ selectedBillId: billId }));
//   // },
//   onUpdateBillid: () => {
//     dispatch(BillsActions.getNewBillId({}));
//   },
//   onInit: (props: Props) => {
//     console.log("BillFormPage onInit");
//     dispatch(BillsActions.getBillsStart({}));
//     dispatch(BillsActions.getSelectedBill({}));
//   },
// });

// const mapStateToProps: (state: ApplicationState) => PropsFromState = (
//   state
// ) => {
//   // console.log("BillsPage state");
//   // console.log(state);
//   return {
//     loading: state.bills.loading,
//     success: state.bills.success,
//     error: state.bills.error,

//     bills: state.bills.bills,
//     selectedBillId: state.bills.selectedBillId,
//     newBillId: state.bills.newBillId,
//   };
// };
