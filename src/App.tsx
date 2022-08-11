import React, { useState, useEffect } from "react";

import Link from '@mui/material/Link';
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

    const [mainUser, setMainUser] = useState(-1);

    const [logged, setLogged] = useState(1);

    const [page, setPage] = useState(-2);

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
                <Box sx={{px:2, pt:1, pb:2}}>
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
                <Box sx={{display: 'grid',justifyContent: 'center', px:2}}>
                    <Button className="contained-button" variant="contained" onClick={() => {setPage(0); setLogged(1)}}>LOGIN</Button>
                    <Box sx={{display: 'flex',justifyContent: 'right', pr:2, pt:1}}>
                        <Typography>Não tem conta? </Typography><Link style={{color:"#00bcd4"}} onClick={()=>{setPage(-2)}}> Cadastre-se!</Link>
                    </Box>
                </Box>

            </Container>
        )
    }

    const PageSign = (props: any) => {
        
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
                <Box sx={{px:2,pt:1, pb:2}}>
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
                <Box sx={{display: 'grid',justifyContent: 'center', px:2}}>
                    <Button className="contained-button" variant="contained" onClick={() => {setPage(0); setLogged(1)}}>CADASTRE-SE</Button>
                    <Box sx={{display: 'flex',justifyContent: 'right', pr:2, pt:1}}>
                        <Typography>Já tem conta? </Typography><Link style={{color:"#00bcd4"}} onClick={()=>{setPage(-1)}}> Faça login!</Link>
                    </Box>
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
                                        <ListItemButton onClick={() => {setMainUser(user.id); setPage(2);}}>
                                            <ListItemAvatar>
                                                <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
                                            </ListItemAvatar>
                                            <ListItemText primary={user.name} />
                                        </ListItemButton>
                                        <IconButton onClick={()=>{setPage(1); setMainUser(user.id);}} aria-label="delete" sx={{color:"#bbdefb"}}>
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

        const [loading, setLoading] = useState(true);

        const [tasks, setTasks] = useState([
            { userId: 1, id: 1, title: "task", completed:false },
        ]);


        const [users, setUsers] = useState([
            { id: 1, name: "" },
            { id: 2, name: "" },
        ]);

        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/")
                .then((response) => response.json())
                .then((json) => { setUsers(json); setLoading(false) });
        });
        
        var theUser = users.find(user => {return user.id === mainUser;});
        if (theUser === undefined) {theUser = { id: 1, name: "Minora" };}
        const theUserId = theUser.id;
        let targetURL = 'https://jsonplaceholder.typicode.com/users/'+theUserId+'/todos';
        
        useEffect(() => {
            fetch(targetURL)
                .then((response) => response.json())
                .then((json) => { setTasks(json); setLoading(false) });
        });


        return (
            
            <Grid container style={{
            display: 'grid',
            width: "200%",
            alignItems: 'bottom',
            justifyContent: 'center',
            }}>
                <Grid style={{textAlign:"center"}}>
                    <h1>{theUser.name}</h1>
                    <h2>Tarefas</h2>
                </Grid>
                <Typography>{targetURL}</Typography>
                <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '50ch' },}}
                noValidate
                autoComplete="off"
                style={{display:"flex"}}   
                >
                    <Button type="button" variant="outlined" onClick={() => {tasks.push({userId:0, id:0, title:"dafault task",completed:false}); setPage(1)}}>Add</Button>
                </Box>
                
                {tasks.map((task) => (
                    <FormGroup>
                        <FormControlLabel 
                        onChange={() => {task.completed = (task.completed === true) ? false : true;}}
                        control={<Checkbox defaultChecked={task.completed} />} 
                        label={task.title} 
                        />
                    </FormGroup>
                ))}
            </Grid>
        )
    }

    const PageUserPostComments = (props: any) => {

        const [users, setUsers]         = useState([{ id: 1, name: ""}]);
        const [posts, setPosts]         = useState([{ id: 1, title: "" , body:"", userID: 0}]);
        const [comments, setComments]   = useState([{ id: 0, postId: 0 , body:"", name:"", email: "@"}]);
        const [loading, setLoading]     = useState(true);
        
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/")
                .then((response) => response.json())
                .then((json) => { setUsers(json); setLoading(false) });
        });

        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/"+(theUser!).id+"/posts")
                .then((response) => response.json())
                .then((json) => { setPosts(json); setLoading(false) });
        });
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/"+(theUser!).id+"/comments")
                .then((response) => response.json())
                .then((json) => { setComments(json); setLoading(false) });
        });

        var theUser = users.find(user => {return user.id === mainUser;});
        if (theUser === undefined) {theUser = { id: 1, name: "n"};}

        var thePost = posts.find(post => {return post.id === mainPost;});
        if (thePost === undefined) {thePost = { id: 1, title: "" , body:"", userID: 0};}

        var theComments = comments.filter(comment => {return comment.postId === (thePost!).id;});

        return (
            
            <Grid container style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box sx={{ width: "60%", b: 60, p: 2,m: 2}}>
                    <Box sx={{ b: 60, p: 2, backgroundColor: "#1565c0;",m: 2}}>
                        <Box style={{display:"flex", alignItems:"center"}} sx={{paddingBottom: 2}}>
                            <Avatar alt={(theUser!).name} src="/static/images/avatar/1.jpg" />
                            <Typography style={{ paddingLeft:"10px", fontWeight:"550 "}}>{(theUser!).name}</Typography>
                        </Box>

                        {loading ? <Box sx={{ display: 'flex', justifyContent: 'center'}}><CircularProgress sx={{color:"#bbdefb"}}/></Box> : null}
                        
                        <Typography variant="h5">{(thePost!).title}</Typography>
                        <Typography>{(thePost!).body}</Typography>
                        <Box style={{display: "flex", justifyContent:"right"}}>
                            <IconButton onClick={()=>{setPage(2)}} aria-label="delete" sx={{color:"#2196f3"}}>
                                <CommentIcon sx={{fontSize: 35}}/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box sx={{justifyContent:"right"}}>
                        {theComments.map((comment) => (
                            <Box sx={{ width: "80%", b: 60, p: 2, backgroundColor: "#1565c0;",m: 2, position:"relative", float:"right"}}>
                                <Box style={{display:"flex", alignItems:"center"}} sx={{paddingBottom: 2}}>
                                    <Avatar alt={(comment!).email} src="/static/images/avatar/1.jpg" />
                                    <Typography style={{ paddingLeft:"10px", fontWeight:"550 "}}>{(comment!).email}</Typography>
                                </Box>

                                {loading ? <Box sx={{ display: 'flex', justifyContent: 'center'}}><CircularProgress sx={{color:"#bbdefb"}}/></Box> : null}

                                <Typography variant="h6" >{comment.name}</Typography>
                                <Typography >{comment.body}</Typography>

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

        const [users, setUsers] = useState([
            { id: 1, name: "" },
            { id: 2, name: "" },
        ]);

        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/")
                .then((response) => response.json())
                .then((json) => { setUsers(json); setLoading(false) });
        }); 
        
        var theUser = users.find(user => {return user.id === mainUser;});
        if (theUser === undefined) {theUser = { id: 1, name: "Minora" };}
        
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users/'+(theUser!).id+'/posts')
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
                            <Avatar alt={(theUser!).name} src="/static/images/avatar/1.jpg" />
                            <Typography style={{ paddingLeft:"10px", fontWeight:"550 "}}>{(theUser!).name}</Typography>
                        </Box>

                        {loading ? <Box sx={{ display: 'flex', justifyContent: 'center'}}><CircularProgress sx={{color:"#bbdefb"}}/></Box> : null}

                        <Typography variant="h5" >{post.title}</Typography>
                        <Typography>{post.body}</Typography>
                        <Box style={{display: "flex", justifyContent:"right"}}>
                            <IconButton onClick={()=>{setPage(3),setMainPost(post.id),setMainUser((theUser!).id)}}aria-label="delete" sx={{color:"#bbdefb"}}>
                                <CommentIcon sx={{fontSize: 35}}/>
                            </IconButton>
                        </Box>
                    </Box>
                ))}
            </Grid>
        )
    }
    
    const PageBar = (props: any) => {
        if (props.logged) {
            return (
                <AppBar position="static">
                <Toolbar className="nav">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MY.SITE
                </Typography>
                <Box>
                    <Button onClick={() => {setPage(0)}}color="inherit">Início</Button>
                    <Button onClick={() => {setPage(-1); setLogged(0)}}color="inherit">Logout</Button>
                </Box>
                
                </Toolbar>
            </AppBar>
            )  
        }

        return (
            <AppBar position="static">
                <Toolbar className="nav">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MY.SITE
                </Typography>
                </Toolbar>
            </AppBar>
        )

    }
    const PageDisplay = (props: any) => {
        if      (props.pageIndex === 0) {return <PageUserList />} 
        else if (props.pageIndex === 1) {return <PageUserTask />}
        else if (props.pageIndex === 2) {return <PageUserPosts/>}
        else if (props.pageIndex === 3) {return <PageUserPostComments/>}
        else if (props.pageIndex ===-1) {return <PageLogin/>}
        else if (props.pageIndex ===-2) {return <PageSign/>}

        return<></>
    }

    return (
        <Grid container>

            <PageBar logged={logged}/>
            <PageDisplay pageIndex={page}/>
        </Grid>
    );
};

export default App;