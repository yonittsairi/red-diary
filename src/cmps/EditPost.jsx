import React, { useRef } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Avatar from '@material-ui/core/Avatar';

export default function EditPost() {
    const ref = useRef('')
    const savePost = () => {
        console.log(ref.current.innerText);

    }
    const deletePost = () => {
        ref.current.innerText = "  מה בראשך?"

    }

    return (
        <div>
            <div className="paper">
                {/* <Avatar className="avatar" /> */}
                <div className="pattern">
                    <p ref={ref} contentEditable className="content">

                        מה בראשך?
                    </p>

                </div>
                <DeleteIcon onClick={deletePost} />
                <PostAddIcon onClick={savePost} />
            </div>


        </div>
    )
}
