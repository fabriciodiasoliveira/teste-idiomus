import axios from "axios";
import { useEffect, useState } from "react";
const Leaderboard_Graph = (props) => {
    const token = props.token;
    const [results, setResults] = useState([])
    function getSchedule(){
      const headers = { 'Authorization': `Bearer ${token}` };
      axios.get('http://localhost:3001/api/v1/getAllMatches', { headers })
          .then(resposta => {
              setResults(resposta.data.matches);
              console.log(resposta.data.matches)
          })
          .catch(erro => {
              console.log(erro)
          })
    }
    function getLeaderboard(){
        getSchedule();
    }
    function standard01(){
        
    }
    useEffect(() => {
      getLeaderboard();
    })
  return (
    <div>
      <h2>{props.token}</h2>
    </div>
  );
};

export default Leaderboard_Graph