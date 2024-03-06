import "./App.css";
import { Link, Outlet } from "@tanstack/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-indigo-100">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
