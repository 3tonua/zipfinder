import React, { Component } from "react";
import { connect } from "react-redux";

import Alert from "../components/Alert";

import { closeAlert } from "../actions";

const mapStateToProps = state => ({
  open: state.zips.alert.open,
  message: state.zips.alert.message
});

const mapDispatchToProps = dispatch => ({
  closeAlert: () => dispatch(closeAlert())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert);
