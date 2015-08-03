"use strict";

require('whatwg-fetch');

var React = require('react');
var Immutable = require('immutable');

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Immutable.List.of()
    };
  }

  componentDidMount() {
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
  }

  render() {
    return (
      <div className="commentBox">
        <h1>CommentBox</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
}

class CommentItem extends React.Component {
  render() {
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

class CommentList extends React.Component {
  render() {
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
}

class CommentForm extends React.Component {
  render() {
    return (
      <div className="commentForm">
        CommentForm
      </div>
    );
  }
}

window.CommentBox = CommentBox;
