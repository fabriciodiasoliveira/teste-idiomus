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
    const showRow = event => {

    }
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
                        {
                          new Date(item.matchDate).toLocaleDateString('en-US')
                        }
                        <br></br> 
                        {
                          new Date(item.matchDate).toLocaleTimeString('en-US')
                        }
                    </div>
                    <div className="col-md-4">
                      {item.stadium}
                    </div>
                    <div className="col-md-2">
                        {item.homeTeam} <img className="icon_cowtry" height="37" width="53" src={"Images/flags/" + item.homeTeam + ".svg"} alt={"Flag "+item.homeTeam} />
                    </div>
                    <div className="col-md-2 div_table_bold">
                      {item.homeTeamScore}:{item.awayTeamScore}
                    </div>
                    <div className="col-md-2">
                    <img className="icon_cowtry" src={"Images/flags/" + item.awayTeam + ".svg"} alt={"Flag "+item.awayTeam} />{item.awayTeam}
                    </div>
                  </div>
                ))}
          </div>
          
        </div>
      );
  }
  
  export default Schedule_Graph