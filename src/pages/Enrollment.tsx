import { Clock, CheckCircle, XCircle, Filter } from 'lucide-react';

export default function Enrollment() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Enrollment Queue</h1>
          <p className="text-gray-600 mt-1">Review and manage student enrollment requests</p>
        </div>
        <div className="flex space-x-2">
          <button
            disabled
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-400 bg-gray-100 cursor-not-allowed"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Coming Soon Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mb-6">
            <Clock className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Enrollment Queue Management
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            This feature is currently under development. You'll be able to review pending enrollment 
            requests, approve or reject applications, and manage the enrollment workflow here.
          </p>
          <div className="bg-orange-50 rounded-lg p-4 max-w-lg mx-auto">
            <h4 className="text-sm font-medium text-orange-900 mb-2">Coming Soon Features:</h4>
            <ul className="text-sm text-orange-800 space-y-1">
              <li>• Review pending enrollment requests</li>
              <li>• Approve or reject applications</li>
              <li>• Bulk enrollment actions</li>
              <li>• Enrollment analytics and reports</li>
              <li>• Automated enrollment workflows</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mock Interface Preview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 opacity-50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Pending Enrollments (Preview)</h3>
          <div className="flex space-x-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              23 Pending
            </span>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Request Date
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8">
                      <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-400">Sample Student</div>
                      <div className="text-sm text-gray-400">sample@email.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  Sample Course
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  2024-01-15
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      disabled
                      className="text-green-400 cursor-not-allowed p-1 rounded"
                      title="Approve"
                    >
                      <CheckCircle className="h-4 w-4" />
                    </button>
                    <button
                      disabled
                      className="text-red-400 cursor-not-allowed p-1 rounded"
                      title="Reject"
                    >
                      <XCircle className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 text-center" colSpan={5}>
                  More enrollment requests coming soon...
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-50">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Requests</p>
              <p className="text-2xl font-bold text-gray-400">23</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Approved Today</p>
              <p className="text-2xl font-bold text-gray-400">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Rejected Today</p>
              <p className="text-2xl font-bold text-gray-400">3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}