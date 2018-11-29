import React, { Component } from "react";
import { getCurationsList } from "./CurationListContainer.thunk";
import { connect } from "react-redux";
import CurationList from "../../components/CurationList/CurationList";

class CurationWrapper extends Component {
  async componentDidMount() {
    await this.props.getCurationsList();
  }

  render() {
    return <CurationList curations={this.props.curations} />;
  }
}

const mapStateToProps = ({ curationListContainer }) => ({
  curations: curationListContainer.curations
});

const mapDispatchToProps = {
  getCurationsList
};

const CurationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurationWrapper);

export default CurationListContainer;
