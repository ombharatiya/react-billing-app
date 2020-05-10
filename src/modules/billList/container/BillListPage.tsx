// import TodoHeader from "../todo-header/TodoHeader";
import React from "react";
import BillList from "../component/BillList";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { ApplicationState } from "src/stores/RootReducers";
import { ReducerState } from "src/stores/StoreHelper";
import { Bills } from "src/model/Bill";
import { AnyAction } from "redux";
import { BillsActions } from "../../../stores/billsStores/actions/BillsActions";
import { routes } from "src/Routes";

interface PropsFromState extends ReducerState {
  readonly bills: Bills | undefined;
}

interface PropsFromDispatch {
  readonly onInit: () => void;
  readonly onSelectBill: (id: number) => void;
  readonly onRemoveBill: (id: number) => void;
}

// interface Statee {
//   load: boolean;
// }
type PropsFromRoute = RouteComponentProps<{}>;

export type Props = PropsFromState & PropsFromRoute & PropsFromDispatch;

class BillListPage extends React.Component<Props, {}> {
  constructor(props: Props, context: any) {
    super(props, context);
    // console.log()
    this.initialize(props);
    // this.state = {
    //   load: true,
    // };
  }

  public render() {
    // console.log("render", this.props.loading);
    return (
      <div className="BillListPage">
        {/* {this.state.load && <Loading />} */}
        <BillList
          bills={this.props.bills}
          onRemoveBill={this.props.onRemoveBill}
          onEditBill={this.onSelectBill}
          onCreateNewBill={this.onCreateNewBill}
        />
      </div>
    );
  }

  private onCreateNewBill = () => {
    this.props.history.push(routes.add.view());
  };

  private onSelectBill = (id: number) => {
    // console.log("BillListPage onSelectBill ", id);
    this.props.onSelectBill(id);
    this.props.history.push(routes.add.view());
  };

  private initialize(props: Props) {
    this.props.onInit();
  }
}

const mapStateToProps: (state: ApplicationState) => PropsFromState = (
  state
) => {
  // console.log("BillsPage state", state);
  // console.log(state);
  return {
    loading: state.bills.loading,
    success: state.bills.success,
    error: state.bills.error,

    bills: state.bills.bills,
  };
};

const mapDispatchToProps: (
  dispatch: React.Dispatch<AnyAction>
) => PropsFromDispatch = (dispatch) => ({
  onInit: () => {
    // console.log("BillListPage onInit");
    dispatch(BillsActions.getBillsStart({}));
  },
  onSelectBill: (billId: number) => {
    // console.log("BillListPage onSelectBill ", billId);
    dispatch(BillsActions.setSelectedBill({ selectedBillId: billId }));
  },
  onRemoveBill: (id: number) => {
    dispatch(BillsActions.deleteBillStart({ id }));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BillListPage)
) as any;

// componentDidMount() {
//   console.log("BillListPage componentdidmount props");
//   // var abc = await Promise.all([
//   //   setTimeout(() => {
//   //     const abcd = "";
//   //   }, 5000),
//   // ]);
//   // setTimeout(() => {
//   //   console.log("BillListPage componentdidmount props2");
//   //   this.setState({ load: false });
//   // }, 5000);
//   console.log(this.props);
// }
