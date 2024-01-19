import Header from "../pages/header";
import { useState, useEffect } from "react";
import axios from "axios";
import Schedule_Graph from "./schedule/schedule_graph";
function Schedule() {
    
    const [jwttoken, setJwttoken] = useState('')
    function getAccessToken(){
        
    }
    
    
    useEffect(() => {
        axios.get('http://localhost:3001/api/v1/getAccessToken')
            .then(resposta => {
                const token = resposta.data.access_token;
                setJwttoken(token)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    return (
        <div>
            <Header />
            <h1><Schedule_Graph token={jwttoken}/></h1>
        </div>
    );
}

export default Schedule