import React from "react";
import { motion } from "framer-motion";
import Button from "../../atoms/Button";

interface LoginFormProps {
  setRegister(value: boolean): void;
}

const LoginForm = ({ setRegister }: LoginFormProps) => {
  return (
    <motion.form
      key="login_form"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0%" }}
      transition={{ type: "easeOut" }}
      className="login_form"
    >
      <p className="authform_title">Iniciar sesión</p>
      <p className="authform_info">
        Ingresa para que puedas disfrutar todos los beneficios que tenemos para
        ti
      </p>
      <input
        name="login_email"
        type="text"
        placeholder="Correo electrónico"
      ></input>
      <input type="password" placeholder="Contraseña"></input>
      <p className="authform_forgot_password">Olvidaste tu contraseña?</p>
      <Button
        onClick={() => console.log("a")}
        type="submit"
        text="Ingresar"
        className="tertiary_button"
        styles={{
          padding: " 15px 10px",
          justifyContent: "center",
          fontSize: "initial",
        }}
      />
      <p className="authform_or">- o -</p>
      <Button
        onClick={() => setRegister(true)}
        type="button"
        text="Registrate"
        className="fifth_button"
        styles={{
          padding: " 15px 10px",
          justifyContent: "center",
          fontSize: "initial",
        }}
      />
    </motion.form>
  );
};

export default LoginForm;
