/* global React */
"use strict"

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>CommentBox</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});


var CommentList = React.createClass({
  render: function() {
    var data = [
      { author: "Author", description: "Hello!" }
    ];

    var comments = data.map(function(item) {
      return (
        <Comment author={item.author}>{item.description}</Comment>
      );
    });
    
    return (
      <div className="commnetList">
        {comments}
      </div>
    );
  }
});

var Comment = React.createClass({
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

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        CommentForm
      </div>
    );
  }
});
