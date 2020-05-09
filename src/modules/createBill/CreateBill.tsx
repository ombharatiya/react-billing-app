import React from "react";

class CreateBill extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      validSubmission: false,
    };
  }

  public render() {
    return (
      <div>
        <h1>Create Bill</h1>
      </div>
    );
  }
}
export default CreateBill;
