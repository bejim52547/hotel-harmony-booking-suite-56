
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar";
import BookingDialog from "@/components/BookingDialog";
import { BookOpen, Plus, Search, Filter } from "lucide-react";

const Bookings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const bookings = [
    { id: "BK001", guest: "John Smith", room: "101", checkIn: "2024-06-13", checkOut: "2024-06-16", status: "confirmed", total: "$450" },
    { id: "BK002", guest: "Sarah Johnson", room: "205", checkIn: "2024-06-14", checkOut: "2024-06-17", status: "pending", total: "$680" },
    { id: "BK003", guest: "Mike Wilson", room: "312", checkIn: "2024-06-13", checkOut: "2024-06-15", status: "checked-in", total: "$320" },
    { id: "BK004", guest: "Emily Davis", room: "408", checkIn: "2024-06-15", checkOut: "2024-06-18", status: "confirmed", total: "$590" },
    { id: "BK005", guest: "David Brown", room: "203", checkIn: "2024-06-16", checkOut: "2024-06-19", status: "pending", total: "$750" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "checked-in": return "bg-blue-100 text-blue-800";
      case "checked-out": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredBookings = bookings.filter(booking =>
    booking.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                <BookOpen className="h-8 w-8 mr-3 text-blue-600" />
                Bookings Management
              </h1>
              <p className="text-gray-600">Manage all hotel reservations and bookings</p>
            </div>
            <Button onClick={() => setIsDialogOpen(true)} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              New Booking
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search bookings by guest name or booking ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bookings List */}
        <Card>
          <CardHeader>
            <CardTitle>All Bookings ({filteredBookings.length})</CardTitle>
            <CardDescription>Current reservations and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-gray-900">{booking.guest}</p>
                        <Badge variant="outline">{booking.id}</Badge>
                      </div>
                      <p className="text-sm text-gray-500">
                        Room {booking.room} • {booking.checkIn} to {booking.checkOut}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{booking.total}</p>
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <BookingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </div>
    </div>
  );
};

export default Bookings;
