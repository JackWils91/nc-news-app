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

const SortBar = ({ updateSorting, updateOrder }) => {
  const listOfQueries = ["created_at", "comment_count", "votes"];
  const ascendingOrDescending = ["asc", "desc"];
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel>Sort By</InputLabel>
        <Select
          native
          onChange={event => {
            updateSorting(event.target.value);
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
            updateOrder(event.target.value);
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
