const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: { "slug": "Cris" },
			users: [],
			contacts: [],
			mensaje: "mensaje inicial",
			selectedUser: "",
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			 // Mostrar usuarios de la API (GET)

			showUsers: () => {
				fetch("https://playground.4geeks.com/contact/agendas?offset=0&limit=100")
				.then(response => response.json)
				.then(data => {
					console.log(data.agendas)})
				.catch(error => { console.error('Error fetching users:', error); })
			},

			getContactList: () => {
				fetch(`https://playground.4geeks.com/contact/agendas/${getStore().user.slug}/contacts`)
				.then(response => { return response.json(); })
				.then(data => { setStore({ "contacts": data.contacts }); })
				.catch(error => { console.error('Error fetching contacts:', error); });
			},
			newUser: (username) => {
				const config = { 
					method: "POST",
					body: JSON.stringify({ "slug": username }),
					headers: { "Accept": "application/json" }
				}

				fetch(`https://playground.4geeks.com/contact/agendas/${username}`, config)
				.then(() => { getActions().loadContactList(username); setStore({ "user": username }); })
				.catch(error => { console.error('Error fetching contacts:', error); });
			},

			newContact: (name, email, phone, address) => {
				
				const contact = {
					"name": name,
					"phone": phone,
					"email": email,
					"address": address,
				}

				const config = { 
					method: "POST",
					body: JSON.stringify(contact),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				}

				fetch(`https://playground.4geeks.com/contact/agendas/${getStore().user.slug}/contacts`, config)
				.then(response => { return response.json(); })
				.then(() => getActions().getContactList())
				.catch(error => { console.error('Error fetching contacts:', error); });
			},


			cambiarTexto: () => {
				console.log("cambia el texto");
				setStore({mensaje: "nuevo mensaje"})
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
