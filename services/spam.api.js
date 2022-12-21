import axios from "axios";

const BASE_URL = "https://spam.tharindukanchan.repl.co/spam_detection_path/";
class SpamService {
  checkIfSpamOrHam(query) {
    return axios.get(BASE_URL + query);
  }
}

// export as a EmployeeService object
export default new SpamService();