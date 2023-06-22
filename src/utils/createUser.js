import axios from "axios";


export const createUser = async (body)=>{
    let options = {
        method: 'POST',
        url: 'http://localhost:5000/users',
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify(body)
      };
      
      axios.request(options).then( (response)=> {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
}
