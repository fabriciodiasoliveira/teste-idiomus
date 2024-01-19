import Header from "../pages/header";
import { useState, useEffect } from "react";
import axios from "axios";
function Schedule() {
    const [results, setResults] = useState([])
    const [access_token, setAccess_token] = useState('')
    function getAccessToken(){
        axios.get('http://localhost:3001/api/v1/getAccessToken')
          .then(resposta => {
            setAccess_token(resposta.data.access_token);
          })
          .catch(erro => {
            console.log(erro)
          })
    }
    
    function getSchedule(){
        axios.get('http://localhost:3001/api/v1/getAllMatches',
        {
          headers: {
            'Authorization': `Bearer ${access_token}`
          }
        })
          .then(resposta => {
            setResults(resposta.data);
          })
          .catch(erro => {
            console.log(erro)
          })
    }
    useEffect(() => {
        getAccessToken();
        getSchedule();
        console.log(results)
      }, [])
    return (
        <div>
            <Header />
            <h1>{access_token}</h1>
        </div>
    );
}

export default Schedule