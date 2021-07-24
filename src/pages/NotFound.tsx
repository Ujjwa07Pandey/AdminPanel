import * as React from "react";
import { Box, Typography } from "@material-ui/core";


const NotFound = () => {
    return (
        <Box style={{ width: '100%', height: '100vh', scrollBehavior: 'unset', backgroundColor: '#ccc' }}>
            <Box height="100%" display="flex" flexGrow={1} justifyContent="center" alignItems="center">
                <Typography variant="h4" gutterBottom align="center">
                    Oops Sorry... Page Not Found | Error: 404
                </Typography>
            </Box>
        </Box>
    );
}

export default NotFound;