import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const App = () => {
  const [rooms, setRooms] = useState(Array(16).fill(null)); // 16 dressing rooms
  const [customerName, setCustomerName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAssignRoom = (index) => {
    if (!customerName || !quantity) {
      alert("Please enter both customer name and quantity.");
      return;
    }

    if (rooms[index]) {
      alert(`Dressing Room ${index + 1} is already occupied.`);
      return;
    }

    const updatedRooms = [...rooms];
    updatedRooms[index] = { customerName, quantity };
    setRooms(updatedRooms);
    setCustomerName("");
    setQuantity("");
  };

  const handleClearRoom = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms[index] = null;
    setRooms(updatedRooms);
  };

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold mb-4">Dressing Room Management</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
      </div>

      {/* Container for the rooms grid */}
      <div className="border-2 border-gray-600 rounded-lg p-4 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {rooms.map((room, index) => (
            <Card key={index} className="p-4 text-center">
              <CardContent>
                <h2 className="font-bold">Dressing Room {index + 1}</h2>

                {room ? (
                  <div>
                    <p className="text-sm">Customer: {room.customerName}</p>
                    <p className="text-sm">Quantity: {room.quantity}</p>
                    <Button
                      variant="destructive"
                      className="mt-2"
                      onClick={() => handleClearRoom(index)}
                    >
                      Clear Room
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => handleAssignRoom(index)}
                    className="mt-2"
                  >
                    Assign Room
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
