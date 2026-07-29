import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-[#EAF4FF] text-[#0A66C2] font-heading font-extrabold text-3xl flex items-center justify-center mx-auto">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1E293B]">
        Enterprise Page Not Found
      </h1>
      <p className="text-[#475569] font-body text-base max-w-md mx-auto">
        The requested resource or page location does not exist or may have been relocated.
      </p>
      <div className="flex justify-center gap-4 pt-4">
        <Link to="/">
          <Button variant="primary" icon={<Home className="w-4 h-4" />}>
            Return to Home Page
          </Button>
        </Link>
        <Link to="/solutions">
          <Button variant="outline" icon={<ArrowLeft className="w-4 h-4" />}>
            View Technology Solutions
          </Button>
        </Link>
      </div>
    </div>
  );
};
