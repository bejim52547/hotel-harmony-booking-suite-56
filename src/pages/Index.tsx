
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Hotel, BookOpen, Users, Calendar } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Hotel className="h-16 w-16 text-blue-600 mr-4" />
            <h1 className="text-5xl font-bold text-gray-900">HotelManager Pro</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Complete hotel management solution for modern hospitality businesses. 
            Manage bookings, rooms, and guests with ease.
          </p>
          <Button 
            onClick={() => navigate("/dashboard")} 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg animate-scale-in"
          >
            Access Dashboard
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
            <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Booking Management</h3>
            <p className="text-gray-600">Track and manage all reservations with real-time updates and automated notifications.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
            <Hotel className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Room Management</h3>
            <p className="text-gray-600">Monitor room availability, pricing, and maintenance schedules in one place.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Guest Relations</h3>
            <p className="text-gray-600">Maintain guest profiles, preferences, and booking history for personalized service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
