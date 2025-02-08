import React,{useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import Container from './common/Container'
import {Header,Card,Image} from 'semantic-ui-react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { getCharacters } from './features/api/apiData';
import { StyledHeader } from './common/StyledHeader';

function App() {
  const  [characters,setCharacters]   = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      const data = await getCharacters(20);
      if (data){
        console.log('fetched characters',data)
        setCharacters(data.results.slice(0,20))
      }
    }
    fetchData();

   
  },[]);

  return (
    <Container>

         <div>
        {characters.length > 0 ? <>
        <StyledHeader>
        Characters' list2
        </StyledHeader>

{/* # 7e839a */}
        

<div className='character-list'>
  {characters.map((character) => (
    <Card className='custom-card'
    key={character.id} 


    >
      <Image src={character.image} wrapped ui={false} 

          style={{ 
            width: '100%', 
            maxWidth: '100%',
            height: 'auto', 
            // padding:'15px',
            boxSizing: 'border-box'
          }} 

      />
      <Card.Content style={{      textAlign: 'center',
}}>
        <Card.Header
        style={{fontSize:'22px',wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", textAlign: "center"
        }}
        >{character.name}</Card.Header>
        <Card.Meta 
        style={{fontSize:'16px',color:'#7E839A'}}
        >{character.species}</Card.Meta>
        <Card.Description
        >

          {/* <ul style={{listStyle:'none'}}>

            <li>
            <p style={{ fontSize: "16px", fontWeight: '500' }}
          >

            {character.status==="Alive"? "✅ Alive":"❌ Dead"}
          </p>
            </li>

            <li>
            <p style={{fontSize: "16px", fontWeight: '500'}}>
            {character.gender}

                          </p>
              {/* {character.gender} */}
            {/* </li> */}
          {/* </ul> */}

          <p style={{ fontSize: "16px", fontWeight: '500' }}
          >
             {character.status === "Alive" ? "✅ Alive" : "❌ Dead"} | {character.gender}
          </p>


        </Card.Description>
      </Card.Content>
    </Card>
  ))}
</div>
        
        </> : (
          <p style={{ textAlign: 'center' }}>Loading characters...</p>
        )}
      </div>




    </Container>
  );
}

export default App;
