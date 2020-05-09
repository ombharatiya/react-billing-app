import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "src/Routes";
import Dashboard from "../../modules/dashboard/Dashboard";
import CreateBill from "../../modules/createBill/CreateBill";
// import Overview from "../../modules/overview/Overview";
import AppNavBar from "./AppNavBar";
import BillListPage from "src/modules/billList/container/BillListPage";
// import BillList from "src/modules/billList/component/BillList";
// import { connect } from "react-redux";
// import { Name } from "src/model/Name";

class LayoutComponent extends React.Component<any, any> {
  public constructor(props: any, context: any) {
    super(props, context);
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="*">
              <div>
                <AppNavBar />
                <Switch>
                  <Route
                    path={routes.home.view()}
                    exact={true}
                    component={Dashboard}
                  />
                  <Route
                    path={routes.add.view()}
                    exact={true}
                    component={CreateBill}
                  />
                  <Route
                    path={routes.bills.view()}
                    exact={true}
                    component={BillListPage}
                  />
                  <Route path="*">
                    <p>404 - not a valid path</p>
                  </Route>
                </Switch>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default LayoutComponent;
// const mapStateToProps = (state: LayoutState) => ({
//   name: state.name.name,
// });

// export default connect(mapStateToProps)(LayoutComponent);
