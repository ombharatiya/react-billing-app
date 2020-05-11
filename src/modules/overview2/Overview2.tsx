import React from "react";

class Overview2 extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      validSubmission: false,
    };
  }

  public render() {
    return (
      <div>
        <h1>Overview2</h1>
      </div>
    );
  }
}
export default Overview2;
