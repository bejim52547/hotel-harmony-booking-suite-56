
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Sidebar from "@/components/Sidebar";
import { Hotel, Users, Calendar, DollarSign, TrendingUp, Clock } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Total Bookings", value: "234", icon: Calendar, change: "+12%" },
    { title: "Occupied Rooms", value: "87/120", icon: Hotel, change: "72%" },
    { title: "Revenue Today", value: "$8,450", icon: DollarSign, change: "+8%" },
    { title: "Active Guests", value: "156", icon: Users, change: "+5%" },
  ];

  const recentBookings = [
    { id: "BK001", guest: "John Smith", room: "101", checkIn: "2024-06-13", status: "confirmed" },
    { id: "BK002", guest: "Sarah Johnson", room: "205", checkIn: "2024-06-14", status: "pending" },
    { id: "BK003", guest: "Mike Wilson", room: "312", checkIn: "2024-06-13", status: "checked-in" },
    { id: "BK004", guest: "Emily Davis", room: "408", checkIn: "2024-06-15", status: "confirmed" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "checked-in": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening at your hotel today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="flex items-center text-xs text-green-600 mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Bookings */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-600" />
              Recent Bookings
            </CardTitle>
            <CardDescription>Latest reservations and their current status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{booking.guest}</p>
                      <p className="text-sm text-gray-500">Room {booking.room} • {booking.checkIn}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
