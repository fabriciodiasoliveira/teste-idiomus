import Header from "../pages/header";
import { useState, useEffect } from "react";
import axios from "axios";
import Leaderboard_Graph from "./leaderboard/leaderboard_graph";
function Leaderboard() {
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
            <Leaderboard_Graph token={jwttoken}/>
        </div>
    );
}

export default Leaderboard