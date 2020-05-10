import * as React from "react";
import { IBillListProps } from "../types/IBillListProps";
import { IBillListState } from "../types/IBillListState";
import { Bill } from "../../../model/Bill";
// import BillCloseButton from "../billCloseButton/BillCloseButton";
import Table from "react-bootstrap/Table";
import BillCloseButton from "src/modules/billCloseButton/BillCloseButton";
import BillEditButton from "src/modules/billEditButton/BillEditButton";
import SelectBox from "src/components/SelectBox/SelectBox";
import "./../style/BillList.css";
import { categories } from "src/utils/constants";
import Button from "react-bootstrap/Button";
// import { budget } from "src/utils/constants";
// import Grid from "react-bootstrap/Grid";
// import BillEditButton from "../billEditButton/BillEditButton";

const ALL_CATEGORIES = "All Categories";

class BillList extends React.Component<IBillListProps, IBillListState> {
  constructor(props: IBillListProps, context: any) {
    super(props, context);
    this.state = {
      selectedCategory: ALL_CATEGORIES,
    };
  }

  public render() {
    const { selectedCategory } = { ...this.state };
    console.log("selectedCategory", selectedCategory);
    return (
      // <Grid>
      <Table striped={true} bordered={true} hover={true}>
        <thead>
          {/* <tr>
            <div>
              <h2>Add bill details</h2>
            </div>
          </tr> */}
          <tr>
            <th>description</th>
            <th>
              <div className="">
                <SelectBox
                  options={this.getAllCategories()}
                  selectedCategory={selectedCategory}
                  onSelectCategory={this.handleSelectCategory}
                />
              </div>
            </th>
            <th>date</th>
            <th>amount</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>{this.renderBills()}</tbody>
        <tbody>{this.footerTable()}</tbody>
      </Table>
      //{/* </Grid> */}
    );
  }

  public renderBills = () => {
    const billsList = this.getBillsListFiltered();
    // return budget.bills.map((bill: Bill, index: number) => {
    if (billsList.length > 0)
      return billsList.map((bill: Bill, index: number) => {
        // console.log("renderBills", bill);
        return (
          <tr key={index}>
            <td>{bill.description}</td>
            <td>{bill.category}</td>
            <td>{bill.date}</td>
            <td>{bill.amount}</td>
            <td>
              {/* <div className="flex-row justify-content-space-evenly align-items-center max-width-stretch"></div> */}
              <BillEditButton id={bill.id} onEditBill={this.props.onEditBill} />
              &nbsp;&nbsp;
              <BillCloseButton
                id={bill.id}
                onRemoveBill={this.props.onRemoveBill}
              />
            </td>
          </tr>
        );
      });
    else
      return (
        <tr>
          <td align={"center"} colSpan={5}>
            {"No Bill Present"}
          </td>
        </tr>
      );
  };

  public footerTable = () => {
    return (
      <tr>
        <td align={"center"} colSpan={5}>
          <Button
            className="form-edit-button button-min-width-100"
            // bsStyle="info"
            type="button"
            onClick={this.props.onCreateNewBill}
          >
            Create a New Bill
          </Button>
        </td>
      </tr>
    );
  };

  private getBillsListFiltered = () => {
    const { bills } = { ...this.props };
    const { selectedCategory } = { ...this.state };
    if (bills) {
      if (selectedCategory === ALL_CATEGORIES) return bills;
      else
        return bills.filter((bill: Bill) => bill.category === selectedCategory);
    } else return [];
  };

  private getAllCategories = () => {
    const newCategories = [ALL_CATEGORIES, ...categories];
    return newCategories;
  };

  // private get

  private handleSelectCategory = (selectedCategory: string) => {
    // console.log("handleSelectCategory", evt);
    this.setState({
      selectedCategory,
    });
  };
}

export default BillList;
