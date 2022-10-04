import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Table from './common/table.component';

function UserList (props) { 
    const [users, setUsers] = useState([]);
    const [searchedText, setSearchedText] = useState("");

    const columns = [ 
        { label: "ID", path: "id", content: (item, path) => <> {item[path]} </> }, 
        { label: "Name", path: "name", content: (item, path) => <> {item[path]} </> }, 
        { label: "Email", path: "email", content: (item, path) => <> {item[path]} </> },
        { label: "Company Name", path: "company.name", content: (item, path) => <> {item.company.name} </> },
        { label: "Zip", path: 'address.zipcode', content: (item, path) => <> {item.address.zipcode} </> },
    ];

    function filterUsers () {
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchedText.toLowerCase()) || user.email.toLowerCase().includes(searchedText.toLowerCase()));
        return filteredUsers;
    }

    useEffect(() => {
        async function getUsers () {
            try {
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

                setUsers(data);
            }
            catch(err) {
                console.log(err);
                alert("Error Happened In Fetching Data");
            }   
        }
        getUsers();
    }, []);

    const filteredUsers = filterUsers();

    return (
        <div>
            <div className='col-lg-3'>
                <input onChange={(event) => setSearchedText(event.target.value)} />
            </div>
            <Table 
                items={filteredUsers}
                columns={columns}
            />
        </div>
    );
}
 
export default UserList;