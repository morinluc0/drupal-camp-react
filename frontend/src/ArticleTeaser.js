import React from 'react';
import renderArticleComment from './ArticleComment';
import renderArticleTags from './ArticleTags';

const ArticleTeaser = ({ article }) => {
  const articleComment = renderArticleComment(article.placeholderComment);
  const articleTags = renderArticleTags(article.fieldTags);

  return (
    <div className="article-teaser">
      <div>
        <h2>{article.title}</h2>
        <i>Created by {article.uid.entity.name}</i>
      </div>
      <div>
        <div className="col-1">
          <div>{article.body.value}</div>
          <h3>Comments: </h3>
          { articleComment }
        </div>
        <div className="col-2">
          <h3>Tags: </h3>
          { articleTags }
        </div>
      </div>
    </div>
  );
};

export default ArticleTeaser;
