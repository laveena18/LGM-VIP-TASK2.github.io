import React, {useState} from 'react';
import './App.css';
import Cards from './MyComponents/cards';
import * as ReactBootstrap from 'react-bootstrap';

function App() {
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  const btnClick = async () =>{
    try{
      setButtonClick(true);

      fetch('https://reqres.in/api/users?pages=1')
       .then((response) => response.json())
       .then((json)=>{
         setCardData(json.data);
        })

        setInterval(() =>{
          setLoading(true);
        }, 1500);
    
    }
    catch(e){
      console.log(e)
    }

    
  };

  return (
    <>
     {/*----Navbar Start----*/}
     <nav className="navbar_section">
       <div className="top_main_footer">
         <h2 id="main_title">LETS GROW MORE USERS</h2>
         <button className="button" type="button" onClick={btnClick}>GET USERS</button>
        </div>
      </nav>
      {/*----NavBar Ends---- */}
      
      <div className='container'>
        <div className='row justify-content-center '>
          
          {buttonClick ?
          (loading ? (<Cards cardData={cardData}/>): <ReactBootstrap.Spinner animation="border" />)
           :(<div className='main_footer' > CONTINUE CLICKING ON 'GET USERS' BUTTON </div> )
           
          }
        </div>
      </div>
    </>
  );
}

export default App;
