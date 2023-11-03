import BaseButton from "../BaseButton";

interface AuthorizationConfirmedProps {
  name: string;
}

function AuthorizationConfirmed({ name }: AuthorizationConfirmedProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center p-2">
        <img src="/images/confirmed.png" alt="confirmed" />
      </div>
      <h1 className="text-center m-0 text-3xl sm:font-semibold py-3 tracking-[0.02rem]">
        ВАША РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО!
      </h1>
      <h3 className="text-center pb-4">Добро пожаловать, {name}</h3>
      <div className="px-10">
        <BaseButton text="ЗАКРЫТЬ ОКНО" />
      </div>
    </div>
  );
}

export default AuthorizationConfirmed;
