import axios from 'axios';
 
class UserServices{
    constructor(){
        this.baseUrl="http://localhost:3000/"
    }

    getUser(){
        return axios.get(this.baseUrl+"student/getall");
    }
    getUserbyID(id) {
        return axios.get(this.url + "student/" + id);
    }
    addUser(user) {
        return axios.post(this.url + "adduser"+ user);
    }
}
export default new UserServices;