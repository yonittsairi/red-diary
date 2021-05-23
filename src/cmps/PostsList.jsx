import { Repeat } from '@material-ui/icons'
import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux';

export default function PostsList() {
    const { posts } = useSelector(state => state.postModule)

    return (
        posts.map(post => <Post key={post.time} post={post} />)
    )
}
