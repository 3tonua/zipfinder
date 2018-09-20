import React, { Component } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";

import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

class ZipList extends Component {
  deleteZip = zip => e => {
    this.props.deleteZip(zip);
  };

  handleToggle = zip => () => {
    if (this.props.selectedZip === zip) {
      return this.props.selectZip(null);
    }
    return this.props.selectZip(zip);
  };

  render() {
    const { classes, zips, selectedZip } = this.props;
    return (
      <div>
        <List className={classes.zipList}>
          {zips.map(zip => {
            const zipNmb = zip[`post code`] || "";
            const zipInfo =
              zip.places
                .map(
                  place =>
                    `${place[`place name`]}, ${place[`state abbreviation`]}`
                )
                .join("; ") || "";
            return (
              <ListItem
                className={classes.zipListItem}
                key={zipNmb}
                button
                onClick={this.handleToggle(zipNmb)}
              >
                <Checkbox
                  checked={selectedZip === zipNmb}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={zipNmb} secondary={zipInfo} />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label="Delete"
                    onClick={this.deleteZip(zipNmb)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(ZipList);
