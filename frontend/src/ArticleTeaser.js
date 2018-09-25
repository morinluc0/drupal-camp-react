import React from 'react';
import renderArticleComment from './ArticleComment';

const ArticleTeaser = ({ article }) => {
  const articleComment = renderArticleComment(article.placeholderComment);

  return (
    <div>
      <h2>{article.title}</h2>
      <i>Created by {article.uid.entity.name}</i>
      <div>{article.body.value}</div>
      <h3>Comments: </h3>
      { articleComment }
    </div>
  );
};

export default ArticleTeaser;
