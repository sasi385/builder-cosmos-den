import { ArrowLeft, User, Settings, Star, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="min-h-screen bg-game-bg flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <Link to="/" className="p-2 rounded-full bg-white shadow-md">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-xl font-semibold text-gray-800">Profile</h1>
        <button className="p-2 rounded-full bg-white shadow-md">
          <Settings className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Profile Content */}
      <div className="flex-1 p-6">
        {/* User Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center shadow-lg mb-4">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
              <div className="text-4xl">👦</div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            SUTINAN SRIVISET
          </h2>
          <p className="text-gray-500">Level 5 Player</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <Trophy className="w-8 h-8 text-game-balance mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800">12</p>
            <p className="text-sm text-gray-500">Achievements</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <Star className="w-8 h-8 text-game-yellow mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800">4.8</p>
            <p className="text-sm text-gray-500">Rating</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <h3 className="font-semibold text-gray-800 mb-2">Game Progress</h3>
            <p className="text-gray-500 text-sm">
              View your achievements and unlock new levels
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <h3 className="font-semibold text-gray-800 mb-2">Settings</h3>
            <p className="text-gray-500 text-sm">
              Customize your game experience
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <h3 className="font-semibold text-gray-800 mb-2">Support</h3>
            <p className="text-gray-500 text-sm">
              Get help and contact support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
