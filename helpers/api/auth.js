import axios from "./axios";

export const signWithEmail = async (email, password) => {
    try {
        const response = await axios.post("/api/users/login", {
            email,
            password,
        });
        const { data, statusText } = response ;
        console.log(response);
        return { data, message:statusText } ;
    } catch(error) {
        console.log(error)
        const { response } = error ;
        return { message: response.data.message } ;
    }
};


export const register = async (name, email, password) => {
    try {
        const response = await axios.post("/api/users/register", {
            name,
            email,
            password,
            password_confirmation: password
        });
        const { data, statusText } = response ;

        return { data, message:statusText } ;
    } catch(error) {
        const { response } = error ;
        return { message: response.data.message } ;
    }
};


export const signWithProvider = async ( provider ) => {
    try {
        const response = await axios.post(`/api/users/${provider}`);
        console.log(response)
    } catch(error) {
        console.log(error);
    }
};

export const signOut = async () => {
    try {
        const response = await axios.post('/api/users/logout');
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

