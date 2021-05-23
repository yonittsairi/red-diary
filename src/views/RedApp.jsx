import React from 'react'
import EditPost from '../cmps/EditPost';
import PostsList from '../cmps/PostsList';
import { Chat } from './../cmps/Chat';

export default function RedApp() {
    return (
        <div>
            <EditPost />


            <PostsList />
            <Chat />
        </div>
    )
}
