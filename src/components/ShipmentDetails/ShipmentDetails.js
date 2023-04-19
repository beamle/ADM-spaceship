import React, {useEffect, useState} from 'react';

function ShipmentDetails({ selectedShipment }) {

    const [boxes, setBoxes] = useState(selectedShipment.boxes);

    useEffect(() => {
        setBoxes(selectedShipment.boxes);
    }, [selectedShipment]);

    function calculation(selectedShipmentBoxes) {
        if (selectedShipmentBoxes === null ) {
            return 0;
        } else {

            const floatArray = selectedShipmentBoxes.split(",")
            let sum = 0;
            let counter = 0;
            let newSum = 0;

            for (let i = 0; i < floatArray.length; i++) {
                sum += parseFloat(floatArray[i])
                if (sum >= 10) {
                    counter += 1;
                    newSum = sum - 10;
                    sum = newSum;
                }
            }
            if (sum > 0 ){counter += 1}
            return counter;
        }
    }

    // const boxes = "8.6, 9.3, 2.3, 4.1, 5.1, 2.3"
    function handleBoxUnitsChange(e) {
        const newBoxes = e.target.value;
        setBoxes(newBoxes);
    }

    return (
        (selectedShipment) &&
        <div className="shipment-details">
            <div className="shipment-details-shipment-container">
                <h1>{selectedShipment.name}</h1>
                <p>{selectedShipment.email}</p>
                <p>{selectedShipment.id}</p>
                <input type="text" value={boxes} onChange={handleBoxUnitsChange}/>
                <p>number of reuired cargo bays: {calculation(boxes)}</p>
            </div>
        </div>
    );
}

export default ShipmentDetails;

