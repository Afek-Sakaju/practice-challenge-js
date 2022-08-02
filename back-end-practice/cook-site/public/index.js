function getAllUsers(){
    const element = document.getElementById('users');
    fetch('http://localhost:3000/users/all-users')
        .then(res => {
            if(!res.ok) return null;
            if(res.redirected){
                window.location.href = res.url;
                return;
            }
            return res.json()
        })
        .then(data => {
            const result = JSON.stringify(data || {}, null, 4);
            element.innerText = result
        }).catch(err => {
            element.innerText = 'Error!' + err;
        });
}

function loginUser(){
    const username = document.querySelector('input[name=username]').value;
    const password = document.querySelector('input[name=password]').value;

    fetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" }
    })
        .then(res => {
            if(!res.ok) return null;
            if(res.redirected){
                window.location.href = res.url;
                return;
            }
            return res.json()
        })
        .then(data => {
            console.log('data', data);
        })
}
