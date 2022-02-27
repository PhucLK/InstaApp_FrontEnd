import React from 'react'
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
    logo: {
        textAlign: 'center',
        fontWeight: 600,
        letterSpacing: 3,
        fontSize: 72,
        color: 'rgba(0, 0, 0, 0.8)',
        fontFamily: 'Italianno'
    }
})


function Logo({ children, ...props }) {
    const classes = useStyle()
    return (
        <Typography {...props} className={classes.logo} >
            <Box >{children}</Box>
        </Typography>
    )
}

export default Logo