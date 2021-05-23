import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import Avatar from '@material-ui/core/Avatar';
import Comments from './Comments';
import DeleteIcon from '@material-ui/icons/Delete';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ChatIcon from '@material-ui/icons/Chat';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import PanToolIcon from '@material-ui/icons/PanTool';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import Tooltip from '@material-ui/core/Tooltip';
export default function Post() {
    const [state, setstate] = useState({ red: 20, white: 10, openComments: false, comments: 8 })
    const rate = (state.red * 100 / (state.red + state.white)).toFixed(0) + '%'
    const color = state.red > state.white ? "red" : "white"
    const openComments = () => {
        setstate({ ...state, openComments: !state.openComments })
    }
    return (
        <div>

            <div className="paper">
                {/* <Avatar className="avatar" /> */}
                <div className="pattern">
                    <div contentEditable className="content">
                        יומן יקר,<br></br>
                        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט

                </div >
                </div >     <div class="bar">
                    <div class="rank" style={{ width: rate, backgroundColor: color }}>{rate}</div>
                </div>
                <div className="flex space-between align-center">
                    <div className="icon-bar flex space-between align-center">
                        <div> <FontAwesomeIcon icon={faFlag} color="red" /><span>({state.red})</span>
                        </div>
                        <div><FontAwesomeIcon icon={faFlag} color="gray" /><span>({state.white})</span></div>
                        <ChatIcon />
                    </div>
                    <div className="icon-bar flex align-center">
                        <span className="emoj">📢</span>
                        <span className="emoj">🚨</span>
                        <span className="emoj">😢</span>
                        <span className="emoj">👑</span>
                        <span className="emoj">🙏🏻</span>
                        <span className="emoj">🔔</span>
                    </div>
                </div>
                <b onClick={openComments}>{state.comments} תגובות</b>
                {state.openComments && <Comments />}
            </div >
        </div >

    )
}
