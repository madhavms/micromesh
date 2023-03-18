import React, { Suspense } from 'react';
import { Spinner } from 'reactstrap'; // or any other loading indicator

const MyFallbackComponent = () => {
  return (
    <div className="text-center mt-4">
      
    </div>
  );
};

export default MyFallbackComponent;