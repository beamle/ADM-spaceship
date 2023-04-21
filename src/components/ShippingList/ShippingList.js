import {useState} from "react";
import { Link } from "react-router-dom";
import ShipmentDetails from "../ShipmentDetails/ShipmentDetails";
import "./ShippingList.css";

function ShippingList({shipmentsData}) {
    const [selectedShipment, setSelectedShipment] = useState(null);

    const [search, setSearch] = useState('');

    const filteredShipments = shipmentsData.filter((shipment) => {
        return (shipment.name).toLowerCase().includes(search.toLowerCase());
    });

    const shippingList = filteredShipments.map(shipment => (
            <Link className="link" to={`/shipments/${shipment.id}`}>
                <p key={shipment.id}
                   onClick={() => setSelectedShipment(shipment)}
                   tabIndex={0}> {/*Allows to change background color with :focus pseudo-element*/}
                    {(shipment.name.toLowerCase()).includes(search.toLowerCase()) && shipment.name}
                </p>
            </Link>
        ))


    return (
        <div className="shipping-list-container">
            <div className='shipping-list-search'>
                <input type="text" placeholder="Search.." value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className="shipping-list">
                <h3>Shipping List</h3>
                {shippingList}
            </div>
            {selectedShipment &&
                <ShipmentDetails selectedShipment={selectedShipment}/>
            }
        </div>
    );
}

export default ShippingList;