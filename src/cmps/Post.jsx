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
import EditComment from './EditComment.jsx';
import { UtilService } from './../service/UtilService';
export default function Post({ post }) {
    const [state, setstate] = useState({ red: 20, white: 10, openComments: false, comments: 8 })
    const rate = (state.red * 100 / (state.red + state.white)).toFixed(0) + '%'
    const color = state.red > state.white ? "red" : "white"
    const openComments = () => {
        setstate({ ...state, openComments: !state.openComments })
    }

    const NUM = UtilService.getRandomInt(1, 20)

    return (
        <div>

            <div className="paper">
                <div className="flex align-center"><Avatar className="avatar" />אנונימית משתפת</div>
                <div className="pattern">
                    <div contentEditable className="content">
                        {post.data}
                    </div >
                </div >
                {/* <div className="bar">
                    <div className="rank" style={{ width: rate, backgroundColor: color }}>{rate}</div>
                </div> */}
                <div className="flex space-between align-center">
                    {/* <div className="icon-bar flex space-between align-center">
                        <div> <FontAwesomeIcon icon={faFlag} color="red" /><span>({state.red})</span>
                        </div>
                        <div><FontAwesomeIcon icon={faFlag} color="gray" /><span>({state.white})</span></div>
                    </div> */}
                    <div className="icon-bar flex align-center">
                        {/* <span className="emoj">📢</span>
                        <span className="emoj">🚨</span>
                        <span className="emoj">😢</span>
                        <span className="emoj">👑</span>
                        <span className="emoj">🙏🏻</span>
                        <span className="emoj">🔔</span> */}
                    </div>
                </div>
                <b onClick={openComments}>{NUM} תגובות</b>
                {state.openComments && <Comments />}
                <EditComment />

            </div >
        </div >

    )
}
