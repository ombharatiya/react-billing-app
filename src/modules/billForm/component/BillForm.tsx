import * as React from "react";
// import { IBillFormProps } from "../types/IBillFormProps";
// import { Bill } from "../../../model/Bill";
import "./../style/BillForm.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SelectBox from "../../../components/SelectBox/SelectBox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getReverseFormattedDate,
  getFormattedDate,
  getCurrentDate,
} from "../utils/billFormUtils";
import { Bill } from "src/model/Bill";

export interface BillFormProps {
  bill: Bill;
  onAddBill: (props: Bill) => void;
}

type BillFormState = Bill;

class BillForm extends React.Component<BillFormProps, BillFormState> {
  // constructor(props: IBillFormProps, context: any) {
  //   super(props, context);
  // }
  constructor(props: BillFormProps, context: any) {
    super(props, context);
    this.state = {
      ...this.props.bill,
    };
    // this.state = this.props.bill;
  }
  componentDidMount = () => {
    console.log(
      "||||||||||||||||||||||||BillsForm componentDidMount state",
      this.state
    );
    this.setState({
      ...this.state,
      ...this.props.bill,
    });
  };

  public render() {
    // console.log("BillsForm render state");
    // console.log(this.state);
    // const formState = this.props.bill;
    const { description, amount, category, date } = { ...this.state };
    return (
      <form onSubmit={this.handleSubmit} className="padding-20px">
        <Row>
          <Col sm={9} xs={12}>
            <label htmlFor="billform">Add bill details</label>
            <br />
            <br />
            <input
              className="form-input max-width-window"
              type="text"
              placeholder="description"
              onChange={this.inputChange}
              value={description}
            />
            <br />
            <br />
            <input
              className="form-input max-width-window"
              type="text"
              placeholder="amount"
              pattern="^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$"
              // pattern="[0-9]*"
              onChange={this.handleAmountChange}
              value={amount}
            />
            <Row>
              <Col sm={6} xs={12}>
                <SelectBox
                  selectedCategory={category}
                  onSelectCategory={this.handleSelectCategory}
                />
              </Col>
              <Col sm={6} xs={12}>
                <div className="date-picker-dimension">
                  <DatePicker
                    selected={new Date(getReverseFormattedDate(date))}
                    onChange={this.handleSelectDate}
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={3} xs={12}>
            <Button
              className="form-input-button"
              // bsStyle="info"
              type="submit"
            >
              Add Bill
            </Button>
          </Col>
        </Row>
      </form>
    );
  }

  private onAddBill() {
    // console.log("BillForm onAddBill ", this.state);
    this.props.onAddBill(this.state);
    this.updateStateOnSubmit();
  }

  private updateStateOnSubmit() {
    // console.log("updateStateOnSubmit SUBMITTED");
    this.setState({
      ...this.props.bill,
    });
  }

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.onAddBill();
  };

  private inputChange = (e: any) => {
    this.setState({
      description: e.target.value,
    });
  };

  private handleAmountChange = (evt: any) => {
    const financialGoal = evt.target.validity.valid
      ? evt.target.value
      : this.state.amount;
    this.setState({ amount: financialGoal });
  };

  private handleSelectDate = (evt: any) => {
    // console.log("handleSelectDate", evt);
    const newdate = getFormattedDate(evt);
    this.setState({ date: newdate });
  };

  private handleSelectCategory = (evt: any) => {
    // console.log("handleSelectCategory", evt);
    this.setState({ category: evt });
  };
}

export default BillForm;

// componentDidMount = () => {
//   console.log("||||||||||||||||||||||||BillsForm componentDidMount state", this.state);
//   this.setState({
//     ...this.props.bill,
//   });
// };

// componentWillReceiveProps(nextProps: BillFormProps) {
//   if (this.state.id !== nextProps.bill.id) {
//     console.log(
//       "%%%888888%%%%% BillForm  componentWillReceiveProps",
//       nextProps
//     );
//     var bill = { ...this.state };
//     bill.id = nextProps.bill.id ? nextProps.bill.id : 888;
//     this.setState({
//       ...this.state,
//       ...bill,
//     });
//   }
// }

// this.setState(this.defaultBillState());
// this.setState({
//   description: "",
//   nextBillId: this.state.nextBillId + 1,
// });

// private onEditBill() {
//   this.props.onAddBill(this.state);
//   // this.props.onAddBill({
//   //   id: this.state.nextBillId,
//   //   description: this.state.description,
//   // });
//   this.updateStateOnSubmit();
// }
// private onAddBill() {
//   // console.log("BillForm onAddBill ", this.state);
//   this.props.onAddBill(this.state);
//   // this.props.onAddBill({
//   //   id: this.state.nextBillId,
//   //   description: this.state.description,
//   // });
//   this.updateStateOnSubmit();
// }
