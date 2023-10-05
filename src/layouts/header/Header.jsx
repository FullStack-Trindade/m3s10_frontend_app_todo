import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/AuthHook";

export const Header = () => {
  const { user } = useAuth();

  return (
    <header>
      <h1>{user().email}</h1>
      <Link to="/">Home</Link>
      <Link to="/todo">Cadastar Tarefa</Link>

      <button>Sair</button>
    </header>
  );
};
