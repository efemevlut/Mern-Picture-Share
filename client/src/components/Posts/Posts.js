import React from "react";
import {Grid, CircularProgress} from '@material-ui/core';

import Post from "./Post/Post";
import {useSelector} from 'react-redux'
import useStyles from './Posts.styles'

const Posts = () => {
  const posts = useSelector((state)=>state.posts)
  const classes = useStyles();

  console.log(posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post)=>(
          <Grid item key={post.id} xs={12} sm={6}>
            <Post post={post}/>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
