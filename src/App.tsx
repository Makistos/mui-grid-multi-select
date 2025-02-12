import MainWindow from "@/app/main/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";

const queryClient = new QueryClient();

function App() {

        return (
            <div className="App">
                <header className="App-header">
                    <QueryClientProvider client={queryClient}>
                        <MainWindow />
                        <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>
                </header>
            </div>
        );
}

export default App;
