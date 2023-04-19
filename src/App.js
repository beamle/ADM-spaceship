import './App.css';
import { useEffect, useState } from 'react';
import './components/spinner/LoadingSpinner';
import LoadingSpinner from './components/spinner/LoadingSpinner';
import ShoppingList from "./components/ShippingList/ShippingList";


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
        <div className="App">
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div>
                    <ShoppingList shipmentsData={shipmentsData}/>
                </div>
            )}
        </div>
    );
}

export default App;