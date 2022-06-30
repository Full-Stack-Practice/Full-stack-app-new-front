export async function getAlbums() {
    try {
        const rawresponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/albums`)
    const albumData = await rawresponse.json();

    return albumData; } catch (e) {
        console.log(e);
        return {
            statusCode: 500,
            body: JSON.stringify({ e: 'Failed to fetch album data' }),
        };
    }
};

export async function getUsers() {
    try {
    const rawresponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`)
    const userData = await rawresponse.json();

    return userData; }
    catch (e) {
        console.log(e);
        return{
            statusCode: 500,
            body: JSON.stringify({ e: 'Failed to fetch user data' }),
        };
    };
};

export async function signUpUser(username, email, password) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password }),
        });
        const userData = await response.json();
        console.log(userData);
        return userData;
    } catch (e) {
        console.log(e);
    }
} 

export async function signInUser(email, password) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/sessions`, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        });
        const userData = await response.json();
        console.log(userData);
        return userData;
    } catch (e) {
        console.log(e);
    }
} 
