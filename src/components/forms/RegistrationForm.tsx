import { useState } from "react";
import BaseButton from "../BaseButton";

interface ValidationErrors {
  [key: string]: string | undefined;
  name?: string;
  email?: string;
  phone?: string;
  terms?: string;
}
interface RequestErrors {
  name?: string;
  login?: string;
  phone?: string;
  rules1?: string;
}

const formFields = [
  {
    label: "ФИО",
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Введите ФИО",
  },
  {
    label: "E-mail",
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Введите e-mail",
  },
  {
    label: "Телефон",
    type: "tel",
    id: "phone",
    name: "phone",
    placeholder: "+7",
  },
];

interface RegistrationFormProps {
  handleAuthorizationSuccess: (name: string) => void;
}

function RegistrationForm({
  handleAuthorizationSuccess,
}: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    terms: false,
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

  function transformErrors(errors: RequestErrors) {
    const newErrors: ValidationErrors = {};
    for (const [key, value] of Object.entries(errors)) {
      switch (key) {
        case "login":
          newErrors["email"] = value;
          break;
        case "rules1":
          newErrors["terms"] = value;
          break;
        default:
          newErrors[key] = value;
      }
    }
    return newErrors;
  }

  const sendForm = async () => {
    try {
      const response = await fetch(
        "https://promo-test.emlsdr.ru/backend/api/registerByEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `login=${formData.email}&name=${formData.name}&phone=${formData.phone}&rules1=${formData.terms}`,
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        responseData.error
          ? setErrors(transformErrors(responseData.error))
          : handleAuthorizationSuccess(formData.name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData({ ...formData, [name]: name === "terms" ? checked : value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validationErrors: ValidationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Введите ФИО";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Введите e-mail";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = "Неверный формат";
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = "Введите телефон";
    }
    if (!formData.terms) {
      validationErrors.terms = "Подтвердите согласие с правилами";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      sendForm();
    }
  };

  return (
    <div className="">
      <section className="flex justify-center relative">
        <h1 className="m-0 text-[1.7rem] font-md">РЕГИСТРАЦИЯ</h1>
      </section>
      <form method="post" className="flex flex-col pt-4">
        <ul className="flex flex-col gap-4">
          {formFields.map((field, index) => (
            <li key={index} className="flex flex-col gap-2">
              <label className="text-sm font-semibold">{field.label}</label>
              <input
                className={`${
                  errors[field.name] && "outline-red-500 outline outline-2"
                } p-2 py-3 rounded-lg focus:outline focus:outline-blue-900 focus:outline-2 focus:outline-offset-0`}
                type={field.type}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData].toString()}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors[field.name] && (
                <span className="text-red-500 text-sm">
                  {errors[field.name]}
                </span>
              )}
            </li>
          ))}
          <li className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                onChange={handleChange}
                className="custom-checkbox"
              />
              <label htmlFor="terms" className="text-sm">
                <p>
                  Я согласен с{" "}
                  <a
                    className="underline underline-offset-1 text-[#3C4497]"
                    href=""
                  >
                    правиламит акции, пользовательским соглашением
                  </a>{" "}
                  и с{" "}
                  <a className="underline underline-offset-1 text-[#3C4497]">
                    положением о конфиденциальности
                  </a>
                </p>
              </label>
            </div>
            {errors.terms && (
              <span className="text-red-500 text-sm">{errors.terms}</span>
            )}
          </li>
          <BaseButton
            form={true}
            text="ЗАРЕГЕСТРИРОВАТЬСЯ"
            handleSubmit={handleSubmit}
          />
          <span className="text-center text-sm sm:text-base">
            Есть аккаунт?{" "}
            <a className="underline underline-offset-1 text-[#3C4497]" href="">
              Авторизуйся
            </a>
          </span>
        </ul>
      </form>
    </div>
  );
}

export default RegistrationForm;
