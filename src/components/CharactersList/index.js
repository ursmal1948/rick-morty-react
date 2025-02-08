// import {useSelector} from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// import {
//     fetchCharacters,
//     fetchCharactersSuccess,
//     fetchCharactersError,
//     selectStatus,
//     selectCharacters,
//     selectTotalPages,
//     selectTotalResults
// } from "./charactersListSlice";



import "../../App.css";

import { Header, Card, Image } from 'semantic-ui-react'

import { getCharacters } from "../../features/api/apiData";
import { StyledHeader } from "../StyledHeader";
import Container from "../Container";
import Pagination from "../Pagination"



export const useQueryParameter = (key) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(key)

}
export const CharactersList = () => {

  let page = useQueryParameter("page");

  if (!page) page = 1;

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      window.scrollTo({top:0,behavior:"smooth"})
      // setTimeout(async () => {
        const data = await getCharacters(page);
        if (data) {
          console.log('fetched characters', data)
          setCharacters(data.results.slice(0, 20))
          setLoading(false)
        }
      // }, 2000)
    }
    fetchData();


  }, [page]);


  // let status = useSelector(selectStatus);
  // const characters = useSelector(selectCharacters);
  // const totalPages = useSelector(selectTotalPages);
  // const totalResults = useSelector(selectTotalResults);
  const totalPages = 21;

  return (

    <Container>

      <div>

        {loading? (
          <p style={{ textAlign: 'center' }}>Loading characters...</p>
        ) : ( 
     <>
          <StyledHeader>
            Characters' list
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
                <Card.Content style={{
                  textAlign: 'center',
                }}>
                  <Card.Header
                    style={{
                      fontSize: '22px', wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", textAlign: "center"
                    }}
                  >{character.name}</Card.Header>
                  <Card.Meta
                    style={{ fontSize: '16px', color: '#7E839A' }}
                  >{character.species}</Card.Meta>
                  <Card.Description
                  >

                    <p style={{ fontSize: "16px", fontWeight: '500' }}
                    >
                      {character.status === "Alive" ? "✅ Alive" : "❌ Dead"} | {character.gender}
                    </p>


                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} />

          

        </>
        )}
      </div>


    </Container>

  );


}