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
              <div className="div_cell_header_table div_500">
                Date/Time
              </div>
              <div className="div_cell_header_table div_750">
                Stadium
              </div>
              <div className="div_cell_header_table">
                Home team
              </div>
              <div className="div_cell_header_table">
                Aways team
              </div>
            </div>
            {results &&
                results.map((item) => (
                  <div className="row div_table">
                    <div className="div_cell_table div_500">
                        {
                          new Date(item.matchDate).toLocaleDateString('en-US')
                        }
                        <br></br> 
                        {
                          new Date(item.matchDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                        }
                    </div>
                    <div className="div_cell_table div_750">
                      {item.stadium}
                    </div>
                    <div className="div_cell_table text-right">
                        {item.homeTeam} <img className="icon_cowtry" src={"Images/flags/" + item.homeTeam + ".svg"} alt={"Flag "+item.homeTeam} />
                      <b>{item.homeTeamScore}:{item.awayTeamScore}</b>
                      <img className="icon_cowtry" src={"Images/flags/" + item.awayTeam + ".svg"} alt={"Flag "+item.awayTeam} />{item.awayTeam}
                    </div>
                  </div>
                ))}
          </div>
          
        </div>
      );
  }
  
  export default Schedule_Graph