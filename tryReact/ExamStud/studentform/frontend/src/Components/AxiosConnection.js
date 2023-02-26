import axios from 'axios';
 
class UserServices{
    constructor(){
        this.baseUrl="http://localhost:3000/"
    }

    getUser(){
        return axios.get(this.baseUrl+"student/data");
    }
}
export default new UserServices();