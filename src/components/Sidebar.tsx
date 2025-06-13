
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Hotel, BookOpen, Users, Calendar, Home, LogOut } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: BookOpen, label: "Bookings", path: "/bookings" },
    { icon: Hotel, label: "Rooms", path: "/rooms" },
    { icon: Users, label: "Guests", path: "/guests" },
  ];

  const handleLogout = () => {
    // Clear all stored authentication data
    localStorage.removeItem("hotelManager_token");
    localStorage.removeItem("hotelManager_rememberMe");
    localStorage.removeItem("hotelManager_username");
    
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col h-full">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <Hotel className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-xl font-bold text-gray-900">HotelManager</h2>
        </div>
      </div>
      
      <nav className="p-4 space-y-2 flex-1">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant={location.pathname === item.path ? "default" : "ghost"}
            className={cn(
              "w-full justify-start",
              location.pathname === item.path 
                ? "bg-blue-600 hover:bg-blue-700 text-white" 
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            )}
            onClick={() => navigate(item.path)}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
