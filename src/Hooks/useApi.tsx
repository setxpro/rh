import axios from 'axios';

const uri = axios.create({
    baseURL: 'https://rhexpert-api.herokuapp.com',
})

export const useApi = () => ({
    signin: async (email: string, password: string) => {

        try 
        {
            const { data: { data: dados } } = await uri.post('/users/login', { email, password });
            return dados;
        } 
        catch (error) 
        {
            console.log(error);
        }
    },
    findAllUser: async () => {
        const { data: {data: dados} } = await uri.get('/users');
        return dados;
    },
    updateUser: async () => {
        const { data: { data: dados } } = await uri.post('');
        return dados;
    },
    deleteUser: async (_id: string) => {
        const { data: {data: dados} } = await uri.delete(`/users/${_id}`);
        return dados;
    }
})