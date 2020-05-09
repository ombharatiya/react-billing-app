import React from "react";

class Dashboard extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      validSubmission: false,
    };
  }

  public render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}
export default Dashboard;
