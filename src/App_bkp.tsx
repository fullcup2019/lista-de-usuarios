import { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';


const App = () => {

	
	const Page = (value : any) => {

		const [mainUser, setMainUser] = useState("noone");

		const [page, setPage] = useState(0);

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

		//Página inicial
		if (page == 0) {
			return (
				(
					<div className="App">
						<div className="card">
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
												<ListItemText primary={user.name} />
											</ListItemButton>
										</ListItem>
									))}
								</List>
							</nav>
						</div>
					</div>
				)
		)}

		//Página do usuário
		if (page == 1) {

			return (
					<div className="App">
						<div className="card">
							<h1>{mainUser}</h1>
						</div>
					</div>
				)
		}
	}

	return (
		<div className="App">
			{Page(0)}
		</div>
	);
};

export default App; 