"use strict";

require('whatwg-fetch');

var React = require('react');
var Immutable = require('immutable');

var CommentBox = React.createClass({
  getInitialState: function() {
    return {
      data: Immutable.List.of()
    }
  },

  componentDidMount: function() {
    if (this.props && this.props.data) {
      this.setState({
        data: Immutable.List(this.props.data)
      });
    } else {
      window.fetch("/comments/index.json").then(function(response) {
        return response.json();
      }).then(function(data) {
        this.setState({
          data: Immutable.List(data)
        });
      }.bind(this));
    }
  },

  render: function() {
    return (
      <div className="commentBox">
        <h1>CommentBox</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentItem = React.createClass({
  render: function() {
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var comments = this.props.data.map(function(item) {
      return (
        <CommentItem author={item.author}>{item.description}</CommentItem>
      );
    }).toJS();
    
    return (
      <div className="commnetList">
        {comments}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        CommentForm
      </div>
    );
  }
});

window.CommentBox = CommentBox;
