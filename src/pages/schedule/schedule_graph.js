import axios from "axios";
import { useEffect, useState } from "react";
  function Schedule_Graph(props) {
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
    useEffect(() => {
      getSchedule();
    })
      return (
        <div>
          <div className="div_schedule">
            <div className="row div_header_table">
              <div className="col-md-2">
                Date/Time
              </div>
              <div className="col-md-4">
                Stadium
              </div>
              <div className="col-md-3">
                Home team
              </div>
              <div className="col-md-3">
                Aways team
              </div>
            </div>
            {results &&
                results.map((item) => (
                  <div className="row div_table">
                    <div className="col-md-2">
                      {item.matchDate}
                    </div>
                    <div className="col-md-4">
                      {item.stadium}
                    </div>
                    <div className="col-md-3">
                      {item.homeTeam}
                    </div>
                    <div className="col-md-3">
                      {item.awayTeam}
                    </div>
                  </div>
                ))}
          </div>
          
        </div>
      );
  }
  
  export default Schedule_Graph