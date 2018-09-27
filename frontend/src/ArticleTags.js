import React from 'react';

const renderArticleTags = post => {
  console.log(post);
  if (typeof post === "undefined" || post.length === 0) {
    return (<div></div>);
  } else {
    console.log(post.map);
    return (
      <ul>
        {post.map(tags => <li key={tags.entity.wikipediaContent[0].id}><ArticleTags tags={tags} /></li>)}
      </ul>
    );
  }
};


const ArticleTags = ({ tags }) => {
  return (
    <div>
      <h3>{tags.entity.entityLabel}</h3>
      <p>{tags.entity.wikipediaContent[0].pageContent}</p>
    </div>
  );
}


export default renderArticleTags;
