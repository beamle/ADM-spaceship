import {useState} from "react";
import ShipmentDetails from "../ShipmentDetails/ShipmentDetails";
import "./ShippingList.css";

function ShippingList({ shipmentsData }) {
    const [selectedShipment, setSelectedShipment] = useState(null);

    const [search, setSearch] = useState('');

    const filteredShipments = shipmentsData.filter((shipment) => {
        const shipmentName = shipment.name;
        return shipmentName.includes(search);
    });


    return (
        <div className="shipping-list-container">
            <div className="shipping-list">
                <input type="text" placeholder="Search.." value={search} onChange={(e) => setSearch(e.target.value)}/>
                <h3>Shipping List</h3>
                {filteredShipments.map((shipment) => (
                        <ul key={shipment.id}>
                            <li onClick={() => setSelectedShipment(shipment)}>
                                {shipment.name}
                            </li>
                        </ul>
                ))}
            </div>
            {selectedShipment &&
                <ShipmentDetails selectedShipment={selectedShipment} />

            }
        </div>
    );
}

export default ShippingList;