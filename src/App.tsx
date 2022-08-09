import React, { useState, useEffect } from "react";

import TaskIcon from '@mui/icons-material/Task';
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
import ButtonGroup from '@mui/material/ButtonGroup';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import { Container, Grid, gridClasses } from "@mui/material";
import TextField from '@mui/material/TextField';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import CircularProgress from '@mui/material/CircularProgress';
import CommentIcon from '@mui/icons-material/Comment';


const App = () => {

    const [mainUser, setMainUser] = useState("noone");

    const [page, setPage] = useState(-1);

    const [tasks, setTasks] = useState([
        {name: "Task 1", checked: false},
        {name: "Task 2", checked: false}
    ]);

    const [mainPost, setMainPost] = useState(0);

    const PageLogin = (props: any) => {
        return (
            <Container sx={{
                alignItems: 'bottom',
                display: 'grid',
                justifyContent: 'center'}}
            >
                <Box sx={{display: 'grid',justifyContent: 'center'}}>
                    <Typography variant="h4" sx={{pb:2, pt:5, px:2}}>MY.SITE</Typography>
                </Box>
                <Box sx={{px:2}}>
                    <TextField 
                        label="E-mail" 
                        sx={{
                            input:{color:"#bbdefb"},
                            label:{color:"#bbdefb"},
                            '& label.Mui-focused' :{color:"#42a5f5", borderColor:"#bbdefb"},
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: "#bbdefb",
                                  },
                                  '&:hover fieldset': {
                                    borderColor: "#42a5f5",
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: "#42a5f5",
                                  },
                            }
                        }} 
                    ></TextField>
                </Box>
                <Box sx={{p:2}}>
                    <TextField 
                        label="Password" 
                        type="password" 
                        sx={{
                            input:{color:"#bbdefb"},
                            label:{color:"#bbdefb"},
                            '& label.Mui-focused' :{color:"#42a5f5", borderColor:"#bbdefb"},
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: "#bbdefb",
                                  },
                                  '&:hover fieldset': {
                                    borderColor: "#42a5f5",
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: "#42a5f5",
                                  },
                            }
                        }}
                    ></TextField>
                </Box>
                <Box sx={{display: 'grid',justifyContent: 'right', pr:2}}>
                    <Button className="contained-button" variant="contained" onClick={() => {setPage(0)}}>LOGIN</Button>
                </Box>

            </Container>
        )
    }
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
                                        <IconButton onClick={()=>{setPage(1)}} aria-label="delete" sx={{color:"#bbdefb"}}>
                                            <TaskIcon sx={{fontSize: 35}}/>
                                        </IconButton>
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

    const PageUserPostComments = (props: any) => {

        const [posts, setPosts] = useState([
            { id: 1, title: "" , body:"", userID: 0},
        ]);
        
        const [comments, setComments] = useState([
            { id: 1, title: "" , completed: false, userID: 0},
        ]);

        const [loading, setLoading] = useState(true);
        
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/1/posts")
                .then((response) => response.json())
                .then((json) => { setPosts(json); setLoading(false) });
        });

        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/2/todos")
                .then((response) => response.json())
                .then((json) => { setComments(json); setLoading(false) });
        });

        var found = posts.find(obj => {return obj.id === 1;});
        if (found === undefined) {found = { id: 1, title: "" , body:"", userID: 0};}

        return (
            
            <Grid container style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box sx={{ width: "60%", b: 60, p: 2,m: 2}}>
                    <Box sx={{ b: 60, p: 2, backgroundColor: "#1565c0;",m: 2}}>
                        <Box style={{display:"flex", alignItems:"center"}} sx={{paddingBottom: 2}}>
                            <Avatar alt={mainUser} src="/static/images/avatar/1.jpg" />
                            <Typography style={{ paddingLeft:"10px", fontWeight:"550 "}}>{mainUser}</Typography>
                        </Box>

                        {loading ? <Box sx={{ display: 'flex', justifyContent: 'center'}}><CircularProgress sx={{color:"#bbdefb"}}/></Box> : null}
                        
                        <Typography variant="h5">{found.title}</Typography>
                        <Typography>{found.body}</Typography>
                        <Box style={{display: "flex", justifyContent:"right"}}>
                            <IconButton onClick={()=>{setPage(2)}} aria-label="delete" sx={{color:"#2196f3"}}>
                                <CommentIcon sx={{fontSize: 35}}/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box sx={{justifyContent:"right"}}>
                        {comments.map((comment) => (
                            <Box sx={{ width: "80%", b: 60, p: 2, backgroundColor: "#1565c0;",m: 2, position:"relative", float:"right"}}>
                                <Box style={{display:"flex", alignItems:"center"}} sx={{paddingBottom: 2}}>
                                    <Avatar alt={mainUser} src="/static/images/avatar/1.jpg" />
                                    <Typography style={{ paddingLeft:"10px", fontWeight:"550 "}}>{mainUser}</Typography>
                                </Box>

                                {loading ? <Box sx={{ display: 'flex', justifyContent: 'center'}}><CircularProgress sx={{color:"#bbdefb"}}/></Box> : null}

                                <Typography variant="h6" >{comment.title}</Typography>
                            </Box>
                        ))}
                    </Box>:
                </Box>
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
            alignItems: 'center',
            justifyContent: 'center'
            }}
            >

                {posts.map((post) => (
                    <Box sx={{ width: "60%", b: 60, p: 2, backgroundColor: "#1565c0;",m: 2}}>
                        <Box style={{display:"flex", alignItems:"center"}} sx={{paddingBottom: 2}}>
                            <Avatar alt={mainUser} src="/static/images/avatar/1.jpg" />
                            <Typography style={{ paddingLeft:"10px", fontWeight:"550 "}}>{mainUser}</Typography>
                        </Box>

                        {loading ? <Box sx={{ display: 'flex', justifyContent: 'center'}}><CircularProgress sx={{color:"#bbdefb"}}/></Box> : null}

                        <Typography variant="h5" >{post.title}</Typography>
                        <Typography>{post.body}</Typography>
                        <Box style={{display: "flex", justifyContent:"right"}}>
                            <IconButton onClick={()=>{setPage(3),setMainPost(post.id)}}aria-label="delete" sx={{color:"#bbdefb"}}>
                                <CommentIcon sx={{fontSize: 35}}/>
                            </IconButton>
                        </Box>
                    </Box>
                ))}
            </Grid>
        )
    }
    
    const PageDisplay = (props: any) => {
        if      (props.pageIndex === 0) {return <PageUserList />} 
        else if (props.pageIndex === 1) {return <PageUserTask />}
        else if (props.pageIndex === 2) {return <PageUserPosts/>}
        else if (props.pageIndex === 3) {return <PageUserPostComments/>}
        else if (props.pageIndex ===-1) {return <PageLogin/>}

        return<></>
    }

    return (
        <Grid container>
            <AppBar position="static">
                <Toolbar className="nav">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MY.SITE
                </Typography>
                <Button onClick={() => {setPage(0)}}color="inherit">Início</Button>
                </Toolbar>
            </AppBar>

            <PageDisplay pageIndex={page}/>
        </Grid>
    );
};

export default App;