import React from "react";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const referenceTable = reference => {
  const table = {
    "Created At": "created_at",
    "Comment Count": "comment_count",
    Votes: "votes",
    "A-Z": "asc",
    "Z-A": "desc"
  };

  return table[reference];
};

const SortBar = ({ updateSorting, updateOrder }) => {
  const listOfQueries = ["Created At", "Comment Count", "Votes"];
  const ascendingOrDescending = ["A-Z", "Z-A"];
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel>Sort By</InputLabel>
        <Select
          native
          onChange={event => {
            updateSorting(referenceTable(event.target.value));
          }}
        >
          {listOfQueries.map(query => {
            return <option key={query}>{query}</option>;
          })}
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel>A - Z</InputLabel>
        <Select
          native
          variant="filled"
          className={classes.formControl}
          onChange={event => {
            updateOrder(referenceTable(event.target.value));
          }}
        >
          {ascendingOrDescending.map(query => {
            return <option key={query}>{query}</option>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SortBar;
