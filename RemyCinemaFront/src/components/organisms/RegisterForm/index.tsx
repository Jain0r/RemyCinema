import React from "react";
import { motion } from "framer-motion";
import Button from "../../atoms/Button";
import "./index.scss";

interface RegisterFormProps {
  setRegister(value: boolean): void;
}

const RegisterForm = ({ setRegister }: RegisterFormProps) => {
  return (
    <motion.form
      key="register_form"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0%" }}
      transition={{ type: "easeOut" }}
      className="register_form"
    >
      <p className="authform_title">Registro</p>
      <p className="authform_info">
        Estas a un paso de convertirte en colaborador y poder disfrutar todos
        los beneficios que tenemos para ti
      </p>
      <input
        name="register_name"
        type="text"
        placeholder="Nombre Completo"
      ></input>
      <input type="text" placeholder="Correo electrónico"></input>
      <input type="text" placeholder="Celular"></input>
      <input type="password" placeholder="Contraseña"></input>
      <input type="password" placeholder="Confirmar contraseña"></input>

      <Button
        onClick={() => setRegister(true)}
        type="button"
        text="Registrarse"
        className="fifth_button"
        styles={{
          padding: " 15px 10px",
          justifyContent: "center",
          fontSize: "initial",
        }}
      />
      <p className="authform_or">- o -</p>
      <Button
        onClick={() => setRegister(false)}
        type="button"
        text="Volver a Iniciar Sesión"
        className="tertiary_button"
        styles={{
          padding: " 15px 10px",
          justifyContent: "center",
          fontSize: "initial",
        }}
      />
    </motion.form>
  );
};

export default RegisterForm;
