import BaseButton from "../BaseButton";

interface AuthorizationConfirmedProps {
  name: string;
}

function AuthorizationConfirmed({ name }: AuthorizationConfirmedProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center pt-6">
        <img src="public/confirmed.png" alt="confirmed" />
      </div>
      <h1 className="text-center m-0">ВАША РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО!</h1>
      <h3 className="text-center">Добро пожаловать, {name}</h3>
      <BaseButton text="ЗАКРЫТЬ ОКНО" />
    </div>
  );
}

export default AuthorizationConfirmed;
