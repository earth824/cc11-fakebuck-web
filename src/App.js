import AuthContextProvider from './contexts/AuthContext';
import Router from './route/Router';

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;
