import GlobalStyle from "./styles/global";
import { Container } from "./styles";
import RoutesApp from "./routes";

function App() {
  return (
    <Container>
      <RoutesApp />
      <GlobalStyle />
    </Container>
  );
}

export default App;
