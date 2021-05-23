import React, { useRef } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux';
import { addPost } from './../store/action/postActions';

export default function EditPost() {
    const dispatch = useDispatch('')
    const ref = useRef('')
    const savePost = () => {
        dispatch(addPost({ data: ref.current.innerText, user_id: 22 }))

    }
    const deletePost = () => {
        ref.current.innerText = "שתפי אותנו בסיפור שלך"

    }

    return (
        <div>
            <div className="paper">
                {/* <Avatar className="avatar" /> */}
                <div className="pattern">
                    <p ref={ref} contentEditable className="content">

                        שתפי אותנו בסיפור שלך
                    </p>

                </div>
                <div className="flex align-center">  <DeleteIcon onClick={deletePost} />
                    {/* <PostAddIcon /> */}
                    <button onClick={savePost}>שתפי</button></div>
            </div>


        </div>
    )
}
