import React, { useContext } from 'react';
import Log from "../components/Log"
import { UidContext  } from '../components/AppContext';
import Profil from './Profil';

const Home = () => {
    const uid = useContext(UidContext)
    return (
       <div className="profil-page">
        {uid ? (
          <Profil/>
        ) : (

            <div className="log-container">
            <Log signin={false} signup={true}/>
        </div>
        )}
       </div>
       
    );
};

export default Home;