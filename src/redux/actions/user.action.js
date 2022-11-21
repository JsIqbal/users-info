import axios from "axios";
import { getUsers } from "../reducers/user-reducer";

export const getUsersAction = () => (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            let data = res.data;
            data.sort();
            data.reverse();
            dispatch(getUsers(data));
        });
};