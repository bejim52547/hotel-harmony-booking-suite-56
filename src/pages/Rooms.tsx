
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar";
import { Hotel, Plus, Search, Bed, Wifi, Coffee, Car } from "lucide-react";

const Rooms = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const rooms = [
    { 
      id: "101", 
      type: "Standard", 
      status: "available", 
      price: "$120/night", 
      occupancy: "2 guests",
      amenities: ["Wifi", "Coffee", "TV"],
      description: "Comfortable standard room with modern amenities"
    },
    { 
      id: "205", 
      type: "Deluxe", 
      status: "occupied", 
      price: "$180/night", 
      occupancy: "3 guests",
      amenities: ["Wifi", "Coffee", "TV", "Balcony"],
      description: "Spacious deluxe room with city view"
    },
    { 
      id: "312", 
      type: "Suite", 
      status: "maintenance", 
      price: "$280/night", 
      occupancy: "4 guests",
      amenities: ["Wifi", "Coffee", "TV", "Balcony", "Kitchen"],
      description: "Luxury suite with separate living area"
    },
    { 
      id: "408", 
      type: "Premium", 
      status: "available", 
      price: "$220/night", 
      occupancy: "2 guests",
      amenities: ["Wifi", "Coffee", "TV", "Balcony", "Parking"],
      description: "Premium room with exclusive amenities"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "bg-green-100 text-green-800";
      case "occupied": return "bg-red-100 text-red-800";
      case "maintenance": return "bg-yellow-100 text-yellow-800";
      case "cleaning": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi": return <Wifi className="h-4 w-4" />;
      case "coffee": return <Coffee className="h-4 w-4" />;
      case "parking": return <Car className="h-4 w-4" />;
      default: return <Bed className="h-4 w-4" />;
    }
  };

  const filteredRooms = rooms.filter(room =>
    room.id.includes(searchTerm) ||
    room.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                <Hotel className="h-8 w-8 mr-3 text-blue-600" />
                Room Management
              </h1>
              <p className="text-gray-600">Monitor and manage all hotel rooms and their status</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Room
            </Button>
          </div>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search rooms by number or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <Card key={room.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Room {room.id}</CardTitle>
                  <Badge className={getStatusColor(room.status)}>
                    {room.status}
                  </Badge>
                </div>
                <CardDescription>{room.type} Room</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">{room.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">{room.price}</span>
                    <span className="text-sm text-gray-500">{room.occupancy}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-md">
                        {getAmenityIcon(amenity)}
                        <span className="text-xs text-gray-600">{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Edit Room
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
