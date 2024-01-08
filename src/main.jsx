import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouterProvider } from "react-router-dom";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import Loading from "./components/loading";
import routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider
    appearance={{
      baseTheme: dark,
      signIn: {
        baseTheme: dark,
      },
      signUp: {
        baseTheme: dark,
      },
    }}
    publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
  >
    <ClerkLoading>
      <Loading />
    </ClerkLoading>
    <ClerkLoaded>
      <RouterProvider router={routes} />
    </ClerkLoaded>
  </ClerkProvider>,
);
