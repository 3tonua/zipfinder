import React, { Component } from "react";
import { connect } from "react-redux";

import ZipList from "../components/ZipList";

import { deleteZip, setSearchValue, selectZip } from "../actions";

const mapStateToProps = state => ({
  zips: state.zips.zips,
  selectedZip: state.zips.selectedZip
});

const mapDispatchToProps = dispatch => ({
  deleteZip: zip => dispatch(deleteZip(zip)),
  setSearchValue: data => dispatch(setSearchValue(data)),
  selectZip: zip => dispatch(selectZip(zip))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ZipList);
