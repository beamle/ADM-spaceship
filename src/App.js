import './App.css';
import { useEffect, useState } from 'react';
import './components/spinner/LoadingSpinner';
import LoadingSpinner from './components/spinner/LoadingSpinner';
import ShoppingList from "./components/ShippingList/ShippingList";
import logo from './logo.svg';
import {BrowserRouter, Link} from 'react-router-dom';


function App() {
    const [shipmentsData, setShipmentsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json')
            .then((response) => response.json())
            .then((data) => {
                setShipmentsData(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error)
            });
    }, []);
    console.log(shipmentsData)
    return (
        <BrowserRouter>
            <div className="App">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <div>
                        <ShoppingList shipmentsData={shipmentsData}/>
                    </div>
                )}
            </div>
        </BrowserRouter>
    );
}

export default App;