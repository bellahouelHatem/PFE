import axios from 'axios';
const Form_API = "http://localhost:8081/api/Forms";
class FormService {
    getForms() {
        return axios.get(Form_API);
    }
    addForm(body){
        return axios.post(Form_API,body);
    }
    updateForm(id,body){
       const url = Form_API+"/"+id;
       return axios.put(url,body);
    }
    deleteForm(id){
        const url = Form_API+"/"+id;
        return axios.delete(url);
    }
    AddFormUse(body){
        return axios.post(Form_API,body);
    }
    
}

export default new FormService();s