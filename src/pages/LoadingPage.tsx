import * as React from "react";
import { CircularProgress, Typography } from '@material-ui/core';

const LoadingPage = () => {
    return (
        <>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'calc(100vh - 64px - 17px)',
                    justifyContent: 'center',
                    width: 'calc(100vw - 57px)',
                }}
            >
                <CircularProgress size={50} />
                <Typography style={{ marginTop: '1rem' }} variant={'body1'}>
                    Getting your things ready . . .
                </Typography>
            </div>
        </>
    );
};

export default LoadingPage;
