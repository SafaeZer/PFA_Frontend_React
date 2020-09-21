import API from "../../config/axios";
import {User_endpoint} from "../endpoint";

export const getUser = () => API.get(User_endpoint)
.then(function (response){
	console.log(response);
})
.catch(function (error){
	console.log(error);
})