import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Dz3.css';
import Header from './modules/common/header/Header';
import Footer from './modules/common/footer/Footer';
import { Grid } from 'semantic-ui-react'
import PostList from './modules/PostList/PostList';
import AuthorInfo from './modules/AuthorInfo/AuthorInfo';
import scrollToRef from './shared/utils/scrollToRef';

export default function Dz3() {
  const [selectedAuthorId, setSelectedAuthorId] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handlePostSelect = (post, elemRef) => {
    console.log('handlePostSelect');
    setSelectedAuthorId(post.userId);
    setSelectedPostId(post.id);
    setTimeout(() => {
      scrollToRef(elemRef);
    }, 0);
  }

  return (
    <div className='app'>
      <Header />
      <div className='app-content'>
        <Grid className='blog'>
          <Grid.Column width={6}>
            <PostList onPostSelect={handlePostSelect} selectedPostId={selectedPostId} />
          </Grid.Column>
          <Grid.Column width={8} className='author-column'>
            <AuthorInfo authorId={selectedAuthorId} />
          </Grid.Column>
        </Grid>
      </div>
      <Footer />
    </div>
  )
}
