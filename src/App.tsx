import React, { useState, useEffect } from "react";

import Input from '@mui/material/Input';
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

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import { Container, Grid, gridClasses } from "@mui/material";
import TextField from '@mui/material/TextField';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import CircularProgress from '@mui/material/CircularProgress';


const App = () => {

    const [mainUser, setMainUser] = useState("noone");

    const [page, setPage] = useState(0);

    const [tasks, setTasks] = useState([
        {name: "Task 1", checked: false},
        {name: "Task 2", checked: false}
    ]);

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
                        >
                            {users.map((user) => (
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => {setPage(2); setMainUser(user.name)}}>
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
            
            <Grid container style={{
            display: 'grid',
            width: "200%",
            alignItems: 'bottom',
            justifyContent: 'center',
            }}>
                <Grid style={{textAlign:"center"}}>
                    <h1>{mainUser}</h1>
                    <h2>Tarefas</h2>
                </Grid>
                
                <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '50ch' },}}
                noValidate
                autoComplete="off"
                style={{display:"flex"}}   
                >
                    <Input placeholder="add task" type="text" style={{width:"200%"}}/>
                    <Button type="button" variant="outlined" onClick={() => {tasks.push({name:"dafault task",checked:false}); setPage(1)}}>Add</Button>
                </Box>
                
                {tasks.map((task) => (
                    <FormGroup>
                        <FormControlLabel 
                        onChange={() => {task.checked = (task.checked === true) ? false : true;}}
                        control={<Checkbox defaultChecked={task.checked} />} 
                        label={task.name} 
                        />
                    </FormGroup>
                ))}

                <Stack spacing={2} direction="row" style={{
                display: 'grid',
                width: "200%",
                alignItems: 'bottom',
                justifyContent: 'center',
                }}>
                    <Button variant="contained" onClick={() => {setPage(0)}}>Home</Button>
                </Stack>
            </Grid>
        )
    }

    const PageUserPosts = (props: any) => {

        const [loading, setLoading] = useState(true);

        const [posts, setPosts] = useState([
            { id: 1, title: "" , body:"", userID: 0},
        ]);

        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/1/posts")
                .then((response) => response.json())
                .then((json) => { setPosts(json); setLoading(false) });
        });
        
        return (
            <Grid container style={{
            display: 'grid',
            width: "200%",
            alignItems: 'top',
            justifyContent: 'center',
            }}
            >
                {posts.map((post) => (
                    <Box sx={{ p: 2, border: '1px solid grey'}}>
                        <Box style={{display:"flex", alignItems:"center"}}>
                            <Avatar alt={mainUser} src="/static/images/avatar/1.jpg" />
                            <Typography style={{ paddingLeft:"10px"}}>{mainUser}</Typography>
                        </Box>
                        
                        <Typography variant="h5" >{post.title}</Typography>
                        <Typography>{post.body}</Typography>
                    </Box>
                ))}
            </Grid>
        )
    }
    
    const PageDisplay = (props: any) => {
        if      (props.pageIndex === 0) {return <PageUserList />} 
        else if (props.pageIndex === 1) {return <PageUserTask />}
        else if (props.pageIndex === 2) {return <PageUserPosts/>}

        return<></>
    }

    return (
        <Grid container>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Users
                </Typography>
                <Button onClick={() => {setPage(0)}}color="inherit">Início</Button>
                </Toolbar>
            </AppBar>

            <PageDisplay pageIndex={page}/>
        </Grid>
    );
};

export default App;