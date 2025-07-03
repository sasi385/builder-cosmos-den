import { Lock, Home, User, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-game-bg flex flex-col max-w-md mx-auto relative">
      {/* Header Section */}
      <div className="flex items-center justify-between p-6 pt-12">
        {/* User Avatar */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center shadow-lg">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <div className="text-2xl">👦</div>
            </div>
          </div>
          {/* Badge */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1 ml-4">
          <h1 className="text-xl font-semibold text-gray-800 tracking-wide">
            SUTINAN SRIVISET
          </h1>

          {/* Balance Display */}
          <div className="flex items-center mt-2 bg-white rounded-full px-4 py-2 shadow-md">
            <div className="w-6 h-6 bg-game-balance rounded-full flex items-center justify-center mr-3">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-600">
              12,000,000.00
            </span>
          </div>
        </div>
      </div>

      {/* Main Progression Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-8">
        <div className="relative flex flex-col items-center space-y-6">
          {/* Yellow Circle */}
          <div className="relative">
            <div className="w-36 h-36 bg-game-yellow rounded-full flex items-center justify-center shadow-2xl border-8 border-white">
              <Lock className="w-14 h-14 text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Connector Triangle */}
          <div className="w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-green-400"></div>

          {/* Green Circle */}
          <div className="relative">
            <div className="w-36 h-36 bg-game-green rounded-full flex items-center justify-center shadow-2xl border-8 border-white">
              <Lock className="w-14 h-14 text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Connector Triangle */}
          <div className="w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-red-400"></div>

          {/* Red Circle */}
          <div className="relative">
            <div className="w-36 h-36 bg-game-red rounded-full flex items-center justify-center shadow-2xl border-8 border-white">
              <Lock className="w-14 h-14 text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Connector Triangle */}
          <div className="w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-blue-400"></div>

          {/* Blue Circle - No lock icon as in design */}
          <div className="relative">
            <div className="w-36 h-36 bg-game-blue rounded-full flex items-center justify-center shadow-2xl border-8 border-white"></div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white rounded-t-3xl shadow-lg p-6 flex justify-around items-center">
        <Link to="/" className="flex flex-col items-center space-y-2">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
            <Home className="w-6 h-6 text-blue-500" />
          </div>
          <span className="text-xs text-blue-500 font-medium">HOME</span>
        </Link>

        {/* Center Chat Icon */}
        <div className="w-16 h-16 bg-game-balance rounded-2xl flex items-center justify-center shadow-lg">
          <div className="text-2xl">💬</div>
        </div>

        <Link to="/profile" className="flex flex-col items-center space-y-2">
          <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
            <User className="w-6 h-6 text-gray-400" />
          </div>
          <span className="text-xs text-gray-400 font-medium">PROFILE</span>
        </Link>
      </div>
    </div>
  );
}
