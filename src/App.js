import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/GlobalStyle";
import GlobalContext from "./contexts";
import Header from "./components/Header";
import Pages from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalContext>
        <Header />
        <Pages />
      </GlobalContext>
    </BrowserRouter>
  );
}