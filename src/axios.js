import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-be2e1-default-rtdb.firebaseio.com";

export default instance;