import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Páginas
import NewOption from './NewOption';
import Cardapio from './Cardapio';
import EditOption from './EditOption';


function AppRoutes() { 

    const location = useLocation()
    return(
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' exact element= {<Cardapio/>} />
                <Route path='/newoption' exact element= {<NewOption/>} />
                <Route path='/editoption/' exact element= {<EditOption/>} />
            </Routes>
        </AnimatePresence>
    )

}
export default AppRoutes
