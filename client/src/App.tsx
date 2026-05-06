import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import OfficeProducts from "./pages/OfficeProducts";
import MarketingProducts from "./pages/MarketingProducts";
import PackagingProducts from "./pages/PackagingProducts";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import AdminFiles from "./pages/AdminFiles";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/van-phong"} component={OfficeProducts} />
      <Route path={"/tiep-thi"} component={MarketingProducts} />
      <Route path={"/bao-bi"} component={PackagingProducts} />
      <Route path={"/kinh-nghiem"} component={Experience} />
      <Route path={"/lien-he"} component={Contact} />
      <Route path={"/admin/files"} component={AdminFiles} />
      <Route path={"/dang-nhap"} component={Login} />
      <Route path={"/dang-ky"} component={Register} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
