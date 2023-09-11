// UserStatus.tsx

import React from "react";
import { useAuth } from "../../../hooks/useAuth"; // Adjust the path if necessary

const UserStatus: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <div className="user-status">
      {currentUser ? (
        <span>Welcome, {currentUser.name}</span> // Assuming user object has a name property
      ) : (
        <span>Not logged in</span>
      )}
    </div>
  );
};

export default UserStatus;
