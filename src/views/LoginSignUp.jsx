import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { login } from './../store/action/userActions';

export default function LoginSignUp() {
    const [state, setstate] = useState({ user: true, open: false })
    const addProff = (ev) => {
        setstate({ ...state, open: !state.open })
    }
    return (
        <div>
            |{ !state.user && <div className="login">
                <form action="">
                    <label htmlFor="">משתמש/ת  <input type="text" name="username" /></label>
                    <label htmlFor="">סיסמא     <input type="text" name="password" /></label>
                    <label htmlFor="">אני איש/ת מקצוע <input type="checkbox" /></label>
                    <button>login</button>
                </form>


            </div>}
            {state.user && <div className="signup">
                <form action="">
                    <label htmlFor="">משתמש/ת  <input type="text" name="username" /></label>
                    <label htmlFor="">סיסמא     <input type="text" name="password" /></label>
                    <label htmlFor="">אמת סיסמא     <input type="text" name="passwordV" /></label>

                    <label htmlFor="">אני איש/ת מקצוע <input type="checkbox" onChange={addProff} /></label>
                    {state.open &&
                        <div className="signup"><label htmlFor=""> שם מלא  <input type="text" name="fullname" /></label>
                            <label htmlFor="">רישיון  <input type="text" name="licenseId" /></label></div>
                    }
                    <button>login</button>
                </form>


            </div>}
        </div >

    )
}



