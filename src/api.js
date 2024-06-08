import axios from 'axios';

const fetchData = async()=>{
    const response = await axios.get('https://dashboad-backend.onrender.com/posts');
    return response.data.posts;
};

export default fetchData;