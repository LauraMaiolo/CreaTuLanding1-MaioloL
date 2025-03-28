import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

const App = () => {

    const mensaje = "Explora nuestra colección verano 2025"
    const items = ['Blusas & Camisas', 'Vestidos', 'Shorts & Minis']

    return (
        <>
            <NavBar />
            <ItemListContainer items={items} mensaje={mensaje} />
        </>

    );

}

export default App;
