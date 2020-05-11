// import TodoHeader from "../todo-header/TodoHeader";
import React from "react";
import Overview from "../component/Overview";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { ApplicationState } from "src/stores/RootReducers";
import { ReducerState } from "src/stores/StoreHelper";
import { Bills } from "src/model/Bill";
import { AnyAction } from "redux";
import { BillsActions } from "../../../stores/billsStores/actions/BillsActions";
import { routes } from "src/Routes";
import { getProcessedChartData } from "src/utils/utilities";

interface PropsFromState extends ReducerState {
  readonly bills: Bills | undefined;
}

interface PropsFromDispatch {
  readonly onInit: () => void;
  readonly onSelectBill: (id: number) => void;
  readonly onRemoveBill: (id: number) => void;
}

interface Statee {
  bills: Bills | undefined;
  chartData: number[];
  chartLabels: string[];
}
type PropsFromRoute = RouteComponentProps<{}>;

export type Props = PropsFromState & PropsFromRoute & PropsFromDispatch;

class OverviewPage extends React.Component<Props, Statee> {
  constructor(props: Props, context: any) {
    super(props, context);
    // console.log()
    this.state = {
      bills: undefined,
      chartData: [],
      chartLabels: [],
    };
    this.initialize(props);
  }

  componentWillReceiveProps(nextProps: Props) {
    // console.log("componentWillReceiveProps", nextProps);
    if (
      this.state.bills !== nextProps.bills &&
      nextProps.success === true &&
      nextProps.bills !== undefined
    ) {
      const processedChartData = this.onProcessChartData(nextProps.bills);
      this.setState({
        ...this.state,
        bills: nextProps.bills,
        chartData: processedChartData.data,
        chartLabels: processedChartData.labels,
      });
    }
  }

  public render() {
    // const processedChartData = this.onProcessChartData();
    const { chartData, chartLabels } = { ...this.state };
    // console.log("render", this.state);
    return (
      <div className="OverviewPage">
        {/* {this.state.load && <Loading />} */}
        <Overview
          bills={this.props.bills}
          onRemoveBill={this.props.onRemoveBill}
          onEditBill={this.onSelectBill}
          onCreateNewBill={this.onCreateNewBill}
          chartData={chartData}
          chartLabels={chartLabels}
        />
      </div>
    );
  }

  private onCreateNewBill = () => {
    this.props.history.push(routes.add.view());
  };

  private onProcessChartData = (bills: Bills) => {
    // const { bills } = { ...this.props };
    // console.log("onProcessChartData", bills);
    return getProcessedChartData(bills);
  };

  private onSelectBill = (id: number) => {
    // console.log("OverviewPage onSelectBill ", id);
    this.props.onSelectBill(id);
    this.props.history.push(routes.add.view());
  };

  private initialize = (props: Props) => {
    this.props.onInit();
  };
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
    // console.log("OverviewPage onInit");
    dispatch(BillsActions.getBillsStart({}));
  },
  onSelectBill: (billId: number) => {
    // console.log("OverviewPage onSelectBill ", billId);
    dispatch(BillsActions.setSelectedBill({ selectedBillId: billId }));
  },
  onRemoveBill: (id: number) => {
    dispatch(BillsActions.deleteBillStart({ id }));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OverviewPage)
) as any;
