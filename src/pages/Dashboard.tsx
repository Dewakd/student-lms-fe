import { Users, BookOpen, Clock, TrendingUp } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ComponentType<{ className?: string }>;
}

function StatCard({ title, value, change, changeType, icon: Icon }: StatCardProps) {
  const changeColor = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600'
  }[changeType];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          <p className={`text-sm mt-2 ${changeColor}`}>
            {change}
          </p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </div>
  );
}

interface ActivityItem {
  id: string;
  type: 'enrollment' | 'course' | 'student';
  message: string;
  time: string;
}

function RecentActivity() {
  const activities: ActivityItem[] = [
    {
      id: '1',
      type: 'enrollment',
      message: 'New student enrolled in Computer Science',
      time: '2 hours ago'
    },
    {
      id: '2',
      type: 'course',
      message: 'Mathematics course updated',
      time: '4 hours ago'
    },
    {
      id: '3',
      type: 'student',
      message: 'Student profile updated: John Doe',
      time: '6 hours ago'
    },
    {
      id: '4',
      type: 'enrollment',
      message: 'Enrollment request pending approval',
      time: '8 hours ago'
    }
  ];

  const getActivityIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'enrollment':
        return <Clock className="h-4 w-4 text-orange-500" />;
      case 'course':
        return <BookOpen className="h-4 w-4 text-blue-500" />;
      case 'student':
        return <Users className="h-4 w-4 text-green-500" />;
      default:
        return <TrendingUp className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">{activity.message}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to the LMS Admin Dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value="1,234"
          change="+12% from last month"
          changeType="positive"
          icon={Users}
        />
        <StatCard
          title="Active Courses"
          value="56"
          change="+3 new courses"
          changeType="positive"
          icon={BookOpen}
        />
        <StatCard
          title="Pending Enrollments"
          value="23"
          change="-5 from yesterday"
          changeType="negative"
          icon={Clock}
        />
        <StatCard
          title="Completion Rate"
          value="87%"
          change="+2% improvement"
          changeType="positive"
          icon={TrendingUp}
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">Add New Student</span>
              </div>
            </button>
            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <BookOpen className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-900">Create Course</span>
              </div>
            </button>
            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium text-gray-900">Review Enrollments</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}