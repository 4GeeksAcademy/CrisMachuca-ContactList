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
				fetch(`https://playground.4geeks.com/contact/agendas?offset=0&limit=100`)
				.then(response => { return response.json(); })
				.then(data => { setStore({ "users": [getStore(), ...data.agendas] }) })
				.catch(error => { console.error('Error fetching users:', error); });
			},

			// Mostrar usuario seleccionado 
			getSelectedUser: (value) => {
				const [slug, id] = value.split("_");
				const selectedUser = { slug, id };
				setStore({ user: selectedUser });
			},
			// Mostrar lista de contactos del usuario 
			getContactList: () => {
				fetch(`https://playground.4geeks.com/contact/agendas/${getStore().user.slug}/contacts`)
				.then(response => { return response.json(); })
				.then(data => { setStore({ "contacts": data.contacts }); })
				.catch(error => { console.error('Error fetching contacts:', error); });
			},

			//Crear usuario
			newUser: (username) => {
				const config = { 
					method: "POST",
					body: JSON.stringify({ "slug": username }),
					headers: { "Accept": "application/json" }
				}

				fetch(`https://playground.4geeks.com/contact/agendas/${username}`, config)
				.then(() => { getActions().getContactList(username); setStore({ "user": username }); })
				.catch(error => { console.error('Error fetching contacts:', error); });
			},
			// Crear contacto
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
			
			// Borrar contacto
			deleteContact: (id) => {
				const store = getStore();
				fetch(`https://playground.4geeks.com/contact/agendas/${store.user.slug}/contacts/${id}`, {
					method: 'DELETE'
				})
				.then(response => {
					console.log("Response status:", response.status);
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					// No intentes analizar la respuesta si recibes un código 204
					if (response.status !== 204) {
						return response.json();
					}
				})
				.then(() => {
					const updatedContacts = store.contacts.filter(contact => contact.id !== id);
					setStore({ contacts: updatedContacts });
					getActions().getContactList()
				})
				.catch(error => { 
					console.error('Error deleting contact:', error); 
				});
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