import React, { useEffect } from 'react';

import './styles.css';

const UserList = () => {

    const fetchUsers = async () => {
        console.log('fetch users from api');
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            Render User list
        </div>
    )
}

export default UserList;
