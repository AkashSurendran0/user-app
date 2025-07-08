import React from 'react'

function UserPage({userData}) {
    return (
        <div>
            <h2>Welcome to the user page</h2>
            {userData? (
                <p>Recieved user:{userData.name}, age:{userData.age}</p>
            ):(
                <p>No user recieved</p>
            )}
        </div>
    )
}

export default UserPage
