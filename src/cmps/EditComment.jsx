import React, { useRef } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Avatar from '@material-ui/core/Avatar';

export default function EditComment() {

    return (
        <div>
            <form action="">
                <input classname="comment-input" name="comment" placeholder="הוספי תגובה" />
                <button>פרסמי</button>
            </form>
        </div>
    )
}
