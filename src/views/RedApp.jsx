import React from 'react'
import EditPost from '../cmps/EditPost';
import PostsList from '../cmps/PostsList';
import { Chat } from './../cmps/Chat';

export default function RedApp() {
    return (
        <div className="flex column align-center">
            {/* <h1>את לא לבד</h1> */}
            <div className="flex space-between align-center">
                <div className="flex column align-center card">
                    <div>1006</div>
                    <span>אוזניים קשובות</span>
                </div>
                <div className="flex column align-center card">
                    <div>108</div>
                    <span>סיפורים ששותפו</span>
                </div>
                <div className="flex column align-center card">
                    <div>75</div>
                    <span>אנשי מקצוע מוסמכים</span>
                </div>

            </div>
            <EditPost />
            <PostsList />
        </div>
    )
}
