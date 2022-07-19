
import axios from 'axios';

const journalApi = axios.create({
    baseURL: 'https://vue-journal-216cd-default-rtdb.firebaseio.com'
})


export default journalApi

