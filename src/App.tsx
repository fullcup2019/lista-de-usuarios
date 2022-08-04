import React, { useState, useEffect } from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Container, Grid } from "@mui/material";

<<<<<<< HEAD
import CircularProgress from '@mui/material/CircularProgress';

const App = () => {

    const [page, setPage] = useState(0);
    const [mainUser, setMainUser] = useState("Noone");

    const PageUserList = (props: any) => {
=======


const App = () => {

    const [mainUser, setMainUser] = useState("noone");

    const [page, setPage] = useState(0);
    
    const PageUserList = (props: any) => {

        const [loading, setLoading] = useState(true);

        const [users, setUsers] = useState([
            { id: 1, name: "Minora" },
            { id: 2, name: "Ataide" },
        ]);

        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/")
                .then((response) => response.json())
                .then((json) => { setUsers(json); setLoading(false) });
        });
        
        return (
            <Grid>
                <Grid>
                    {loading ? <h2>Carregando...</h2> : null}
                    <nav aria-label="secondary mailbox folders">
                        <List  
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} 
                            component="nav"
                            aria-labelledby="Lista de usuários"
                            subheader={
                                <ListSubheader component="div" id="Lista de usuários">
                                    Lista de usuários
                                </ListSubheader>
                            }
                        >
                            {users.map((user) => (
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => {setPage(1); setMainUser(user.name)}}>
                                        <ListItemAvatar>
                                            <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText primary={user.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </nav>
                </Grid>
            </Grid>
        )
    }
    
    const PageUserTask = (props: any) => {
        return (
            <div className="App">
                <div className="card">
                    <h1>{mainUser}</h1>
                </div>
            </div>
        )
    }
    
    const PageShow = (props: any) => {
        if (props.pageIndex === 0) {
            return <PageUserList />
        } else if (props.pageIndex === 1) {
            return <PageUserTask />
        }
        return <></>
    }
    
    // const Page = (value : any) => {
>>>>>>> bf282e55adcb1916d41e04c90023d241046b694b

        const [users, setUsers] = useState([
            { id: 1, name: "Minora" },
            { id: 2, name: "Ataide" },
        ]);
        
        const [loading, setLoading] = useState(true);
        
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/")
                .then((response) => response.json())
                .then((json) => { setUsers(json); setLoading(false) });
        });
        
        return (

        <Container style={{
            display: 'flex',
            alignItems: 'top',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <Container style={{justifyContent: 'center',width: '50%'}}>
                <h2 style={{ textAlign: 'center'}}>Lista de usuários</h2>
                {loading ? <Box sx={{ display: 'flex' }}><CircularProgress /></Box> : null}
                <nav >
                    <List
                        component="nav"
                        style={{height:"100%"}}
                        aria-labelledby="Lista de usuários"
                        //subheader={
                            /*<ListSubheader component="div" id="Lista de usuários">
                                Lista de usuários
                            </ListSubheader>*/
                        //}
                        

                    >
                        {users.map((user) => (
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => {setPage(1); setMainUser(user.name)}}>
                                    <ListItemAvatar>
                                        <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText primary={user.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </nav>
            </Container>
        </Container>
        )
    }

    const PageUserTask = (props: any) => {
        return (
            <div className="App">
                <div className="card">
                    <h1>{mainUser}</h1>
                </div>
            </div>
        )
    }

    const PageDisplay = (props: any) => {
        if (props.pageIndex === 0) {
            return <PageUserList />
        } else if (props.pageIndex === 1) {
            return <PageUserTask />
        }

        return<></>
    }

    return (
        <Grid container>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Users
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
<<<<<<< HEAD

            <PageDisplay pageIndex={page}/>
=======
            <PageShow pageIndex={page} />
>>>>>>> bf282e55adcb1916d41e04c90023d241046b694b
        </Grid>
    );
};

export default App;