import * as React from 'react';
import { useState, useEffect } from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography, makeStyles, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import { signOut } from '../service/auth_service';
import Service from '../service/ServiceWrapper';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
    title: {
        flexGrow: 1,
    },
    table: {
        minWidth: 650,
    },
});

const Dashboard = () => {
    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        async function fetchUsers() {
            await Service.get(`https://reqres.in/api/users?page=${page}`, (status: any, res: any) => setUsers(res.data));

        }
        fetchUsers();
    }, [page]);
    const PageChange = (event: any, value: any) => {
        setPage(value);
    };

    return (

        <Box flexGrow={1}>
            <AppBar position="static" color="transparent">
                <Toolbar style={{ padding: '0rem 6rem' }}>
                    <Typography variant="h5" className={classes.title}>
                        Dashboard
                    </Typography>
                    <Button variant="outlined" onClick={() => signOut()}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Container >
                <Box my="2rem">
                    <Typography variant="h4" >
                        Welcome <span style={{ color: "#1DA1F2" }}>Admin</span> to Your Dashboard !!!
                    </Typography>
                </Box>
                <Box my="6rem">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>

                                    <TableCell align="left" > <Typography variant="h5" >
                                        ID
                                    </Typography></TableCell>
                                    <TableCell align="left"> <Typography variant="h5" >
                                        Email
                                    </Typography></TableCell> <TableCell align="left"> <Typography variant="h5" >
                                        FirstName
                                    </Typography></TableCell> <TableCell align="left"> <Typography variant="h5" >
                                        LastName
                                    </Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell align="left" component="th" scope="row"> <Typography variant="h6" >
                                            {user.id}
                                        </Typography></TableCell>
                                        <TableCell align="left"> <Typography variant="h6" >
                                            {user.email}
                                        </Typography></TableCell>
                                        <TableCell align="left"> <Typography variant="h6" >
                                            {user.first_name}
                                        </Typography></TableCell>
                                        <TableCell align="left"> <Typography variant="h6" >
                                            {user.last_name}
                                        </Typography></TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    my="1.5rem"
                >
                    <Pagination
                        count={2}
                        color="primary"
                        page={page}
                        onChange={PageChange}
                    />
                </Box>
            </Container>
        </Box>
    );
}

export default Dashboard;