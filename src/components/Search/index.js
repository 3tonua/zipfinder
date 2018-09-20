import React, { Component } from "react";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

class Block extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = () => e => {
    this.props.setSearchValue(e.target.value);
  };

  handleSubmit(e) {
    e.preventDefault();
    const value = this.props.searchValue;
    this.props.addZip(value);
  }

  render() {
    const { classes, alert, searchValue } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormControl
            className={classes.searchInput}
            error={alert.message && alert.message.length > 0}
            aria-describedby="error-text"
            variant="outlined"
          >
            <InputLabel htmlFor="search">Zip</InputLabel>
            <Input
              type="number"
              id="search"
              value={searchValue}
              onChange={this.handleChange()}
              placeholder="Enter zip code in the range 210 ~ 99950"
              variant="outlined"
            />
            <FormHelperText id="error-text">{alert.message}</FormHelperText>
          </FormControl>

          <Button
            type="submit"
            variant="fab"
            color="inherit"
            aria-label="Add"
            className={classes.button}
          >
            <AddIcon />
          </Button>
        </form>
      </div>
    );
  }
}
export default withStyles(styles)(Block);
