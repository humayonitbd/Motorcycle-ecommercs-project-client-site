

const SaveUserInfo = (userData) => {
    fetch(`http://localhost:5000/users`,{
        method: 'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(userData)
    })
    
};

export default SaveUserInfo;