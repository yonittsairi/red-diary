import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import { UtilService } from './../service/UtilService';
export function Comments() {
    return (
        <div>  <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment /></div>

    )
}





export default function Comment() {

    return (
        <div>
            {/* <Accordion> */}
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" >
                <div className="flex align-center"><Avatar /> <h4 style={{ margin: 0, textAlign: "left", dir: "rtl" }}>אנונימית</h4></div>
            </AccordionSummary>
            <h4> היי חברה...</h4>
            <AccordionDetails>
                {/* <Paper style={{ padding: "40px 20px" }}> */}
                <Grid container wrap="nowrap" spacing={2}>
                    {/* <Grid item> */}
                    {/* </Grid> */}
                    <Grid >

                        <p >
                            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט

קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סט.{" "}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                            פורסם לפני 5 דקות
            </p>
                    </Grid>
                </Grid>
                {/* </Paper> */}
            </AccordionDetails>
            {/* </Accordion> */}


        </div >
    );
}