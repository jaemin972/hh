
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import useAuth from './hooks/useAuth';
import Login from './components/Login';
import Chat from './components/Chat';
import Header from './components/Header';

const AppContent: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="flex-1 overflow-hidden">
        <Chat />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
