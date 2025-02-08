import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import { CharactersList } from "../components/CharactersList";
import {Header,Card,Image} from 'semantic-ui-react'


function App(){
    return (
        <>
        <HashRouter>



             <Routes>
            {/* <Route path="/character/:id">

            // </Route> */} 


            <Route path="/characters" element={<CharactersList/>}/>


            <Route path="/" element={<Navigate to="/characters?page=1" replace />} />
        




            </Routes>
        </HashRouter>
            
        </>
    )
}
export default App;