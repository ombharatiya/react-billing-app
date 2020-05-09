import * as React from "react";
import { IBillListProps } from "../types/IBillListProps";
import { Bill } from "../../../model/Bill";
// import BillCloseButton from "../billCloseButton/BillCloseButton";
import Table from "react-bootstrap/Table";
// import { budget } from "src/utils/constants";
// import Grid from "react-bootstrap/Grid";
// import BillEditButton from "../billEditButton/BillEditButton";

class BillList extends React.Component<IBillListProps, {}> {
  // constructor(props: IBillListProps, context: any) {
  //   super(props, context);
  // }

  public render() {
    return (
      // <Grid>
      <Table striped={true} bordered={true} hover={true}>
        <thead>
          <tr>
            <th>description</th>
            <th>category</th>
            <th>date</th>
            <th>amount</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>{this.renderBills()}</tbody>
      </Table>
      //{/* </Grid> */}
    );
  }

  public renderBills = () => {
    // return budget.bills.map((bill: Bill, index: number) => {
    return (
      this.props.bills &&
      this.props.bills.map((bill: Bill, index: number) => {
        // console.log("renderBills", bill);
        return (
          <tr key={index}>
            <td>{bill.description}</td>
            <td>{bill.category}</td>
            <td>{bill.date}</td>
            <td>{bill.amount}</td>
            <td>
              {/* <BillEditButton id={bill.id} /> */}
              {/* <BillCloseButton id={bill.id} /> */}
            </td>
          </tr>
        );
      })
    );
  };
}

export default BillList;
