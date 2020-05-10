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
  // getCurrentDate,
} from "../utils/billFormUtils";
import { Bill } from "src/model/Bill";

export interface BillFormProps {
  bill: Bill;
  onAddBill: (props: Bill) => void;
  onDiscardChanges: () => void;
}

// type BillFormState = Bill;

export interface BillFormState {
  bill: Bill;
  validFormText: boolean;
}

class BillForm extends React.Component<BillFormProps, BillFormState> {
  // constructor(props: IBillFormProps, context: any) {
  //   super(props, context);
  // }
  constructor(props: BillFormProps, context: any) {
    super(props, context);
    this.state = {
      bill: this.props.bill,
      validFormText: false,
    };
    // this.state = this.props.bill;
  }
  componentDidMount = () => {
    this.setState({
      ...this.state,
      ...this.props.bill,
    });
  };

  public render() {
    // console.log("BillsForm render state");
    // console.log(this.state);
    // const formState = this.props.bill;
    const { validFormText, bill } = { ...this.state };
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
              value={bill.description}
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
              value={bill.amount}
            />
            <Row>
              <Col sm={6} xs={12}>
                <SelectBox
                  selectedCategory={bill.category}
                  onSelectCategory={this.handleSelectCategory}
                />
              </Col>
              <Col sm={6} xs={12}>
                <div className="date-picker-dimension">
                  <DatePicker
                    selected={new Date(getReverseFormattedDate(bill.date))}
                    onChange={this.handleSelectDate}
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={3} xs={12}>
            <Row>
              <Button
                className="form-input-button button-min-width-100"
                // bsStyle="info"
                type="submit"
              >
                Save Bill
              </Button>
            </Row>
            <br />
            <Row>
              <Button
                className="form-cancel-button button-min-width-100"
                // bsStyle="info"
                type="button"
                onClick={this.props.onDiscardChanges}
              >
                Discard
              </Button>
            </Row>
            <br />
            {validFormText && (
              <Row>
                <div className="red-text">
                  Fill all the details and try again!
                </div>
              </Row>
            )}
          </Col>
        </Row>
      </form>
    );
  }

  private onAddBill() {
    // console.log("BillForm onAddBill ", this.state);
    this.props.onAddBill(this.state.bill);
    this.updateStateOnSubmit();
  }

  private updateStateOnSubmit() {
    // console.log("updateStateOnSubmit SUBMITTED");
    this.setState({
      bill: this.props.bill,
      validFormText: false,
    });
  }
  private isValidated() {
    // console.log("updateStateOnSubmit SUBMITTED");
    const { amount, description, category } = { ...this.state.bill };
    return (
      amount !== 0 &&
      amount !== null &&
      "" !== String(amount) &&
      description !== "" &&
      category !== "Select a Category"
    );
  }

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (this.isValidated()) {
      this.onAddBill();
    } else {
      this.setState({
        ...this.state,
        validFormText: true,
      });
    }
  };

  private inputChange = (e: any) => {
    const bill = {
      ...this.state.bill,
      description: e.target.value,
    };
    this.setState({
      ...this.state,
      bill,
    });
  };

  private handleAmountChange = (evt: any) => {
    const financialGoal = evt.target.validity.valid
      ? evt.target.value
      : this.state.bill.amount;
    const bill = {
      ...this.state.bill,
      amount: financialGoal,
    };
    this.setState({
      ...this.state,
      bill,
    });
  };

  private handleSelectDate = (evt: any) => {
    // console.log("handleSelectDate", evt);
    const bill = {
      ...this.state.bill,
      date: getFormattedDate(evt),
    };
    this.setState({
      ...this.state,
      bill,
    });
  };

  private handleSelectCategory = (evt: any) => {
    // console.log("handleSelectCategory", evt);
    const bill = {
      ...this.state.bill,
      category: evt,
    };
    this.setState({
      ...this.state,
      bill,
    });
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
