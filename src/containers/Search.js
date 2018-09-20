import React, { Component } from "react";
import { connect } from "react-redux";

import Search from "../components/Search";

import { addZip, setSearchValue } from "../actions";

const mapStateToProps = state => ({
  searchValue: state.searchValue ? Number(state.searchValue) : "",
  zips: state.zips.zips,
  alert: state.zips.alert
});

const mapDispatchToProps = dispatch => ({
  addZip: value => dispatch(addZip(value)),
  setSearchValue: data => dispatch(setSearchValue(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
