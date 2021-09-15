import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import './App.css';
import { Grid } from "@material-ui/core";
import {Link } from "react-router-dom";

function Page1() {
    return (
        <div className = "bday-video">
            <Grid container justifyContent="center">
                <Grid item-xs={12}>
                    <iframe src="https://drive.google.com/file/d/11mNsABFlMnver2ht-nEhH3WxItrNnPQb/preview" allow="autoplay"></iframe>
                </Grid>
            </Grid>
        </div>
    );
}

export default Page1;