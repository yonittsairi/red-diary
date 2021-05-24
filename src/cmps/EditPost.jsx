import React, { useRef } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux';
import { addPost } from './../store/action/postActions';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import ImageIcon from '@material-ui/icons/Image';
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

                        הנוכחות שלו מאיימת עליי כשבתוכי מערבולות אך בחוץ הן לא נראות מעולם לא היתי חוף מבטחים לאוניות תועות. אני לא רוצה בקרבתו, שיתרחק ממני ככל האפשר. נשאתי תפילה בליבי כשברקע צעקות מגיחות דוחפות ומכות בי כגלים שוב ושוב עד שאני נשברת. אך בכל זאת אינני מאבדת תקווה אני רוצה התחלה חדשה
                    </p>

                </div>
                <div className="flex align-center"><button className="triger"> <TouchAppIcon /> הוסיפי טריגר</button><div className="flex align-center"> <ImageIcon /><span>העלי תמונה</span></div> </div>
                <div className="flex align-center">
                    {/* <DeleteIcon onClick={deletePost} /> */}
                    {/* <PostAddIcon /> */}
                    <button onClick={savePost}>שתפי</button>


                </div>
            </div>


        </div>
    )
}
