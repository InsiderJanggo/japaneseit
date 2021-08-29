/* eslint-disable  */
import React, { useState } from 'react'
import Login from '../Login'
import axios from 'axios'

export default function Profile() {
    const loadUser = localStorage.getItem('user')
    let user = JSON.parse(loadUser)
    
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

    if(!user) {
        return <Login />
    }

    /**
     * @param {Event} event 
     */
    const handleChange = (event) => {
        setSelectedFile(event.target.files[0])
        setIsFilePicked(true)
    }

    const handleSubmit = () => {
        const formdata = new FormData()
        formdata.append('avatar', selectedFile)

        axios.post(`http://localhost:5000/api/user/upload/avatar/${user.id}`, formdata)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.error(err)
        })
    }

    return(
        <>  
            <input type="file" name="avatar" accept="image/*" onChange={handleChange} />
            {selectedFile ?
                <div>
                    <p>Filename: {selectedFile.name}</p>

                    <p>Filetype: {selectedFile.type}</p>

                    <p>Size in bytes: {selectedFile.size}</p>

                    <p>

                        lastModifiedDate:{' '}

                        {selectedFile.lastModified}

                    </p>

                </div>
            : (
                <p>Select a file to show details</p>
            )}
            
            <div>
                <button onClick={handleSubmit}>Upload</button>
            </div>

            <div>
            <span>Current Profile</span>
            <img src={"http://localhost:5000/img/" + user.avatar} alt={user.id + "-avatar"} width={200} height={200} />
            </div>
        </>
    )
}