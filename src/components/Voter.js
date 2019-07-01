import React, { Component } from "react";
import * as api from "./api";
import { blue, red } from "@material-ui/core/colors";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import IconButton from "@material-ui/core/IconButton";

class Voter extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <>
        <IconButton
          color="primary"
          onClick={() => this.handleVote(1)}
          disabled={voteChange > 0}
        >
          <ThumbUpIcon />
        </IconButton>

        <p>Votes: {votes + voteChange}</p>
        <IconButton
          color="secondary"
          onClick={() => this.handleVote(-1)}
          disabled={voteChange < 0}
        >
          <ThumbDownIcon />
        </IconButton>
      </>
    );
  }
  handleVote = increment => {
    const { id, type } = this.props;
    this.setState(prevState => ({
      voteChange: prevState.voteChange + increment
    }));
    api.patchVotes(id, increment, type).catch(err => {
      this.setState(prevState => ({
        voteChange: prevState.voteChange - increment
      }));
    });
  };
}

export default Voter;
