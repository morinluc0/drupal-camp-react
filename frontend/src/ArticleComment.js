import React from 'react';

const renderArticleComment = post => {
  return (
    <ul>
      {post.map(comment => <li key={comment.id}><ArticleComment comment={comment} /></li>)}
    </ul>
  );
};


const ArticleComment = ({ comment }) => {
  return (
    <div>
      <h4>{comment.commentName}</h4>
      <div><i>Comment by {comment.commentEmail}</i></div>
      <div>{comment.commentBody}</div>
    </div>
  );
}


export default renderArticleComment;
