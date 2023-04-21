import {useState} from "react";
import ShipmentDetails from "../ShipmentDetails/ShipmentDetails";
import "./ShippingList.css";

function ShippingList({shipmentsData}) {
    const [selectedShipment, setSelectedShipment] = useState(null);

    const [search, setSearch] = useState('');

    // const filteredShipments = shipmentsData.filter((shipment) => {
    //     return (shipment.name).toLowerCase().includes(search.toLowerCase());
    // });

    const filteredShipments = () => {
        return shipmentsData.filter(shipment => {
            return (
                <p key={shipment.id} onClick={() => setSelectedShipment(shipment)}>
                    {shipment.name.includes(search) && shipment.name}
                </p>
            )
        })
    }


    return (
        <div className="shipping-list-container">
            <div className='shipping-list-search'>
                <input type="text" placeholder="Search.." value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className="shipping-list">
                <h3>Shipping List</h3>
                {filteredShipments()}
                {/*{filteredShipments.map((shipment) => (*/}
                {/*    <ul key={shipment.id}>*/}
                {/*        <li onClick={() => setSelectedShipment(shipment)}> {shipment.name} </li>*/}
                {/*    </ul>*/}
                {/*))}*/}
            </div>
            {selectedShipment &&
                <ShipmentDetails selectedShipment={selectedShipment}/>

            }
        </div>
    );
}

export default ShippingList;