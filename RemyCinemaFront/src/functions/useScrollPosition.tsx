import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    //si el valor de dependencias no esta definido , todo lo que esta en el efecto se volvera a ejecutar
    //si solo se quiere ejecutar el efecto al primer renderizado, definir el arbol de dependecias como un array vacio
    const updatePosition = () => {
      if (window.scrollY > 200) setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
};
export default useScrollPosition;
