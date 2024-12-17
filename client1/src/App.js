import './App.css';
import {useState} from 'react';
import 'animate.css';

function App() {

  let [players,setPlayers]=useState([]);

  let onButtonClick = async()=>{


    let reqOption={
      method:"GET"
    }

    let JSONData= await fetch("http://localhost:8090/indianCrickterTeam",reqOption);

    let JSOData = await JSONData.json();

    setPlayers(JSOData);
    console.log(JSOData);
  }
  return (
    <div className="App">
        <button className='teamBtn' onClick={()=>{

         
          onButtonClick();
        }}>Team</button>
        <div className='mainHead'>
      <h1 style={{color:"#fff"}}>Indian Cricket Team</h1>
      </div>
      <div className='playersContainer'>
        
        {players.map((ele,i)=>{
            return <div className='playersDiv' key={i}>
              <img className='playerImg' src={ele.Image} alt={ele.name}></img>
              <h2>{ele.Name}</h2>
              <div className='detailsContainer'>
              <div className='roleDiv'>
              <img src={ele.RoleImg} className='roleImg' alt={ele.Role}></img>
              <p className='role'>{ele.Role}</p>
              </div>
              <p>{ele.Age}</p>
              <p>{ele.Style}</p>

            </div>


              </div>
                    
        })}
        </div>
    </div>
  );
}

export default App;
