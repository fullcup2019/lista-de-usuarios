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
import { Grid } from "@mui/material";



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

    //     const [mainUser, setMainUser] = useState("noone");

    //     const [page, setPage] = useState(0);

    //     const [loading, setLoading] = useState(true);

    //     const [users, setUsers] = useState([
    //         { id: 1, name: "Minora" },
    //         { id: 2, name: "Ataide" },
    //     ]);

    //     useEffect(() => {
    //         fetch("https://jsonplaceholder.typicode.com/users/")
    //             .then((response) => response.json())
    //             .then((json) => { setUsers(json); setLoading(false) });
    //     });

    //     //Página inicial
    //     if (page == 0) {
    //         return (
    //             (
    //                 <div className="App">
    //                     <div className="card">
    //                         {loading ? <h2>Carregando...</h2> : null}
    //                         <nav aria-label="secondary mailbox folders">
    //                             <List
    //                                 sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    //                                 component="nav"
    //                                 aria-labelledby="Lista de usuários"
    //                                 subheader={
    //                                     <ListSubheader component="div" id="Lista de usuários">
    //                                         Lista de usuários
    //                                     </ListSubheader>
    //                                 }
    //                             >
    //                                 {users.map((user) => (
    //                                     <ListItem disablePadding>
    //                                         <ListItemButton onClick={() => {setPage(1); setMainUser(user.name)}}>
    //                                             <ListItemAvatar>
    //                                                 <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
    //                                             </ListItemAvatar>
    //                                             <ListItemText primary={user.name} />
    //                                         </ListItemButton>
    //                                     </ListItem>
    //                                 ))}
    //                             </List>
    //                         </nav>
    //                     </div>
    //                 </div>
    //             )
    //     )}

    //     //Página do usuário
    //     if (page == 1) {

    //         return (
    //                 <div className="App">
    //                     <div className="card">
    //                         <h1>{mainUser}</h1>
    //                     </div>
    //                 </div>
    //             )
    //     }
    // }

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
            <PageShow pageIndex={page} />
        </Grid>
    );
};

export default App;