import React from "react";

class Overview extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      validSubmission: false,
    };
  }

  public render() {
    return (
      <div>
        <h1>Overview</h1>
      </div>
    );
  }
}
export default Overview;
