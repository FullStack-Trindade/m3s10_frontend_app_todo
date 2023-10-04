const returnBase = (data, message, status) => {
  return {
    data,
    message,
    status,
  };
};

const Get = async () => {
  const data = JSON.parse(localStorage.getItem("auth"));
  const message = data
    ? `Usuário ${data} se encontra autenticado.`
    : `Nenhum usuário autenticado no sistema.`;

  return returnBase(data, message, !!data);
};

const Set = async (data) => {
  localStorage.setItem("auth", JSON.stringify(data));
  let res;

  await Get().then(({ data }) => {
    res = returnBase(
      data,
      `Usuário ${data} foi autenticado com sucesso.`,
      true
    );
  });

  return res;
};

const Clear = async () => {
  localStorage.removeItem("auth");

  return returnBase(null, `Usuário deslogado com sucesso`, true);
};

export const AuthService = {
  Get,
  Set,
  Clear,
};
