import React, { useRef, useState, useEffect } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux';
import { addPost } from './../store/action/postActions';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import ImageIcon from '@material-ui/icons/Image';

export default function EditPost() {
    const [text, setstate] = useState(' ')
    const dispatch = useDispatch('')
    const ref = useRef('')
    const savePost = () => {
        dispatch(addPost({ data: ref.current.innerText, user_id: 22 }))

    }
    const deletePost = () => {
        ref.current.innerText = "שתפי אותנו בסיפור שלך"

    }

    const txt = 'הנוכחות שלו מאיימת עליי כשבתוכי מערבולות אך בחוץ הן לא נראות מעולם לא היתי חוף מבטחים לאוניות תועות. אני לא רוצה בקרבתו, שיתרחק ממני ככל האפשר. נשאתי תפילה בליבי כשברקע צעקות מגיחות דוחפות ומכות בי כגלים שוב ושוב עד שאני נשברת. אך בכל זאת אינני מאבדת תקווה אני רוצה התחלה חדשה'
    const typeWriter = () => {
        const t = txt.split('')
        t.forEach(l => {
            const g = text + l
            setTimeout(setstate((g), 1050)



            )
        }
        )
    }
    useEffect(() => {
        typeWriter()
        return () => {

        }
    }, [])

    return (
        <div>
            <div className="paper">
                <div className="pattern">
                    <p ref={ref} contentEditable className="content">

                        {txt}
                    </p>

                </div>
                <div className="flex align-center"><button className="triger"> <TouchAppIcon /> הוסיפי טריגר</button><div className="flex align-center"> <ImageIcon /><span>העלי תמונה</span></div> </div>
                <div className="flex align-center">

                    <button onClick={savePost}>שתפי</button>


                </div>
            </div>


        </div>
    )
}
