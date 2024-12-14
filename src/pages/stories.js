import react from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Navbar from "../components/Home/navbar8";
import Card from "../components/SuccessStories/cards";
import users from "../components/SuccessStories/stories";
function Stories(){
    const history = useHistory();
    const stories = ()=>{
        history.push('/Stories');
    }
    return(
        <>
       <Navbar />
       <Card 
        name ={users[0].name}
        story ={users[0].story}
        image ={users[0].image}
       />
        </>

    )
}

export default Stories;