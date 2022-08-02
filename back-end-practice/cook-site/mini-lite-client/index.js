function getAllUsers(){
    const element = document.getElementById('users');
    fetch('http://localhost:3000/users/all-users')
        .then(res => res.json())
        .then(data => {
            element.innerText = JSON.stringify(data || {}, null, 4)
        }).catch(err => {
            element.innerText = 'Error!' + err;
        });
}

