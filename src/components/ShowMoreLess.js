import React from "react";
class ShowMoreLess extends React.Component {
  constructor() {
    super();
    var a =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime.";
    this.state = { name: "ReadMore", content: "", aa: a };
  }
  update = () => {
    if (this.state.name == "ReadMore") {
      this.setState({
        name: "ReadLess",
        content: this.state.aa,
      });
    } else {
      this.setState({
        name: "ReadMore",
        content: "",
      });
    }
  };

  render() {
    return (
      <div>
        <div className="classbased">
        <h1> Question-2 </h1>
        <hr />
          <h2>Welcome to Lorem..!!</h2>
          <h3>Click on Button to see More | Less</h3>
          <p>{this.state.content}</p>
          <button className="bnt" onClick={this.update}>
            {this.state.name}
          </button>
        </div>
      </div>
    );
  }
}
export default ShowMoreLess;
