import React, { Component } from "react";
import * as api from "./api";

class Voter extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <>
        <button onClick={() => this.handleVote(1)} disabled={voteChange > 0}>
          Vote up
        </button>
        <p>Votes: {votes + voteChange}</p>
        <button onClick={() => this.handleVote(-1)} disabled={voteChange < 0}>
          Vote down
        </button>
      </>
    );
  }
  handleVote = increment => {
    const { id, type } = this.props;
    this.setState(prevState => ({
      voteChange: prevState.voteChange + increment
    }));
    api.patchArticleVotes(id, increment, type).catch(err => {
      this.setState(prevState => ({
        voteChange: prevState.voteChange - increment
      }));
    });
  };
}

export default Voter;
