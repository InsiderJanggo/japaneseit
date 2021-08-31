/* eslint-disable  */
import React, { useState } from 'react'
import Login from '../Login'
import axios from 'axios'
import { 
    Container, 
    Form, 
    Button, 
    Row, 
    Col, 
    Image, 
    Alert, 
    Modal, 
    ProgressBar 
} from 'react-bootstrap'
import Header from '../Header'

export default function Profile() {
    const loadUser = localStorage.getItem('user')
    let user = JSON.parse(loadUser)
    
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [showError, setShowError] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [status, setStatus] = useState('')
    const [progress, setProgress] = useState(0)
    const [deleteForm, setDeleteForm] = useState(false);
    const [error, setError] = useState('')

    if(!user) {
        return <Login />
    }

    const validateUpload = () => {
        if(!selectedFile) {
            setError('Please Upload A Avatar')
            setShowError(true)
            return false
        }
        return true
    }

    const validateUsername = () => {
        if(!username) {
            setError('Username cant be empty')
            setShowError(true)
            return false
        }

        return true
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
        const isValid = validateUpload()

        if(isValid) {
            axios.post(`http://localhost:5000/api/user/upload/avatar/${user.id}`, formdata)
            .then((res) => {
                console.log(res.data);
                setProgress(Math.round((100 * res.data.loaded) / res.data.total))
                setStatus('Upload Succefully')       
            })
            .catch((err) => {
                console.error(err)
            })
        }
    }

    const deleteUser = () => {
        axios.delete(`http://localhost:5000/api/user/delete/${user.id}`)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.error(err);
        })
    }

    const ShowDeleteForm = () => setDeleteForm(true);
    const closeDeleteForm = () => setDeleteForm(false);

    const handleUsernameChange = (e) => {
        const isValid = validateUsername()

        if(isValid) {
            axios.post(`http://localhost:5000/api/user/update/username/${user.id}`, {
                username: username,
                password: password
            })
            setShowPasswordForm(false)
        }
    }

    return(
        <> 
        
                {/* Delete Form */}
                <Modal 
                    show={deleteForm} 
                    onClose={() => setDeleteForm(false)} 
                    centered
                >
                        <Modal.Header closeButton>
                                <Modal.Title>本当にございますか？</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                一度削除すると元には戻れない。
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={closeDeleteForm}>
                                キャンセル
                        </Button>
                        <Button variant="danger" onClick={deleteUser}>
                                確認
                        </Button>
                        </Modal.Footer>
                </Modal>

        <Header />
            
            <Container>
                {showError ? (
                    <Alert variant="danger" onClose={() => setShowError(false)} dismissible>    
                         {error}
                    </Alert>
                )
                : (
                    ""
                )}

                {status ? (
                    <Alert variant="success" onClose={() => setStatus('')} dismissible>    
                         {status}
                    </Alert>
                )
                : (
                    ""
                )}

                {/** UPLOAD BAR */}
                {progress ? (
                    <ProgressBar now={progress}/>
                ): (
                    ""
                )}   
                
                    

                <Form>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Your Avatar</Form.Label>
                        <Form.Control type="file" name="avatar" accept="image/*" onChange={handleChange}  />
                    </Form.Group>
                    
                <div>
                    <Button variant="primary" onClick={handleSubmit}>Upload</Button>
                </div>

                </Form>
                <Container>
               <Form>
                    <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Update Your Username</Form.Label>
                            <Form.Control className="mb-3" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}  />
                            <Button onClick={() => setShowPasswordForm(true)}>Update</Button>
                    </Form.Group>
               </Form>
                </Container>
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
                <span>Current Profile</span>
                    <Image src={"http://localhost:5000/img/" + user.avatar} alt={user.id + "-avatar"}  roundedCircle width={200} height={200} />
                </div>
                <div>
            
                    {selectedFile ?(
                        <>
                            <Container>
                                    <span>Preview Profile</span>
                                    <Row>
                                        <Col>
                                            <Image src={URL.createObjectURL(selectedFile)} alt="preview-image" roundedCircle width={200} height={200} />
                                        </Col>
                                    </Row>
                            </Container>
                        </>
                        )
                    : (
                        ""
                    )}
                </div>

                <Container>
                    <div>
                        <Button variant="danger" onClick={ShowDeleteForm}>アカウント削除</Button>
                    </div>  
                </Container>
                    
                {/* Password Form */}
                <Modal 
                    show={showPasswordForm} 
                    onHide={() => setShowPasswordForm(false)} 
                >
                    <Modal.Header closeButton>
                      <Modal.Title>Please Verified Your Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label htmlFor="password">Enter your password</Form.Label>
                        <Form.Control className="mb-3" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={() => setShowPasswordForm(false)}>
                      キャンセル
                      </Button>
                      <Button variant="primary" onClick={handleUsernameChange}>
                        保存
                      </Button>
                    </Modal.Footer>
                  </Modal>
            </Container>
        </>
    )
}