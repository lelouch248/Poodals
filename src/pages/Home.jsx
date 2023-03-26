import React from "react";
import Heading from "../components/Heading";
import Serviceform from "../components/Serviceform";
function Home({user}) {
    return (
        <div>
            <Heading user={user}/>
            <Serviceform/>
        </div>
    );
}


export default Home;