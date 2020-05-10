// import TodoHeader from "../todo-header/TodoHeader";
import React from "react";
import BillList from "../component/BillList";
// import { connect } from "react-redux";
// import { IAppState } from "../../store/AppStore";
// import { default as BillForm } from "../billForm/BillForm";
// import NameForm from "../name-form/NameForm";
// import { Bill } from "src/model/Bill";
// import { IBillListProps } from "../types/IBillListProps";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { ApplicationState } from "src/stores/RootReducers";
import { ReducerState } from "src/stores/StoreHelper";
import { Bills } from "src/model/Bill";
import { AnyAction } from "redux";
import { BillsActions } from "../../../stores/billsStores/actions/BillsActions";
// import Loading from "src/components/loading/Loading";

// export interface IProps {
//   bills: Bill[];
// }

interface PropsFromState extends ReducerState {
  readonly bills: Bills | undefined;
}

interface PropsFromDispatch {
  readonly onInit: () => void;
  readonly onSelectBill: (val: string) => void;
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

  componentDidMount() {
    console.log("BillListPage componentdidmount props");
    // var abc = await Promise.all([
    //   setTimeout(() => {
    //     const abcd = "";
    //   }, 5000),
    // ]);
    // setTimeout(() => {
    //   console.log("BillListPage componentdidmount props2");
    //   this.setState({ load: false });
    // }, 5000);
    console.log(this.props);
  }

  public render() {
    console.log("render", this.props.loading);
    return (
      <div className="BillListPage">
        {/* {this.state.load && <Loading />} */}
        <BillList bills={this.props.bills} />
      </div>
    );
  }
  private initialize(props: Props) {
    this.props.onInit();
  }
}

const mapStateToProps: (state: ApplicationState) => PropsFromState = (
  state
) => {
  console.log("BillsPage state", state);
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
  onSelectBill: (billId: string) => {
    dispatch(BillsActions.getSelectedBill({ selectedBillId: billId }));
  },
  onInit: () => {
    console.log("BillListPage onInit");
    dispatch(BillsActions.getBillsStart({}));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BillListPage)
) as any;
