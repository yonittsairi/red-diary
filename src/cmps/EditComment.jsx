import React, { useRef } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Avatar from '@material-ui/core/Avatar';

export default function EditComment() {

    return (
        <div> <form className="comment-input" action="">
            <input className="comment-input" name="comment" placeholder="הוספי תגובה" />

        </form><button>פרסמי</button></div>
    )
}
