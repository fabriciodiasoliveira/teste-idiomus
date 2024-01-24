import Header from "../pages/header";
import { useState, useEffect } from "react";
import axios from "axios";
import Schedule_Graph from "./schedule/schedule_graph";
function Schedule() {
    
    const [jwttoken, setJwttoken] = useState('')
    
    
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
            <div className="div_title_schedule">
                League Schedule
            </div>
            <Schedule_Graph token={jwttoken}/>
        </div>
    );
}

export default Schedule