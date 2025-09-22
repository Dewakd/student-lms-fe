import { UserCheck, Plus, Search } from 'lucide-react';

export default function Lecturers() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Lecturer</h1>
          <p className="text-gray-600 mt-1">Manage lecturer accounts and information</p>
        </div>
        <button
          disabled
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 cursor-not-allowed"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Lecturer
        </button>
      </div>

      {/* Coming Soon Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
            <UserCheck className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Lecturer Management
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            This feature is currently under development. You'll be able to manage lecturer accounts, 
            view their profiles, assign courses, and track their performance here.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 max-w-lg mx-auto">
            <h4 className="text-sm font-medium text-blue-900 mb-2">Coming Soon Features:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Add and edit lecturer profiles</li>
              <li>• Assign courses to lecturers</li>
              <li>• Track lecturer performance</li>
              <li>• Manage lecturer schedules</li>
              <li>• View lecturer analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mock Interface Preview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 opacity-50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Lecturer List (Preview)</h3>
          <div className="flex space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search lecturers..."
                disabled
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 cursor-not-allowed"
              />
            </div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lecturer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Courses
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  Coming soon...
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  -
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}