import { BiMovie, BiCameraMovie } from "react-icons/bi";
import { MdOutlineEventSeat, MdOutlineFastfood } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi";
import { BsCreditCard } from "react-icons/bs";
import "./index.scss";

const ProccessBuyInfo = () => {
  return (
    <div className="proccess_buy_info">
      <div className="proccess_buy_info_main section">
        <div className="proccess_buy_info_layout">
          <p className="proccess_title">¡Comprar es facil!</p>
          <p className="proccess_subtitle">
            La mejor experiencia a tan solo 6 pasos de ti.
          </p>
        </div>
        <div className="proccess_items_info">
          <div className="proccess_item">
            <div className="proccess_item_icon">
              <BiMovie />
            </div>
            <p className="proccess_item_title">1. Elige tu película</p>
            <p className="proccess_item_layout">
              Usa el buscador o dirigete a la sección de películas y selecciona
              la de tu preferencia.
            </p>
          </div>
          <div className="proccess_item">
            <div className="proccess_item_icon">
              <BiCameraMovie />
            </div>
            <p className="proccess_item_title">2. Elige tu función</p>
            <p className="proccess_item_layout">
              Usa nuestros filtros de funciones para elegir la función adecuada
              para ti.
            </p>
          </div>
          <div className="proccess_item">
            <div className="proccess_item_icon">
              <MdOutlineEventSeat />
            </div>
            <p className="proccess_item_title">3. Elige tus butacas</p>
            <p className="proccess_item_layout">
              Selecciona las butacas de tu preferencia, recuerda fijarte en la
              orientación de la pantalla.
            </p>
          </div>
          <div className="proccess_item">
            <div className="proccess_item_icon">
              <HiOutlineTicket />
            </div>
            <p className="proccess_item_title">4. Elige tus tickets</p>
            <p className="proccess_item_layout">
              Combina los tickets como gustes de acuerdo a la cantidad de
              butacas que seleccionaste.
            </p>
          </div>
          <div className="proccess_item">
            <div className="proccess_item_icon">
              <MdOutlineFastfood />
            </div>
            <p className="proccess_item_title">5. Elige tu comida</p>
            <p className="proccess_item_layout">
              Selecciona la comida de tu preferencia entre snacks bebidas y
              combos a tu disposición.
            </p>
          </div>
          <div className="proccess_item">
            <div className="proccess_item_icon">
              <BsCreditCard />
            </div>
            <p className="proccess_item_title">6. Cancela tu orden</p>
            <p className="proccess_item_layout">
              Paga tu orden con nuestros diferentes métodos de pago que tenemos
              para ti.
            </p>
          </div>
        </div>
        <div className="proccess_or_container">
          <p className="proccess_title">ó</p>
          <p className="proccess_subtitle">
            Recuerda que tambien puedes comprar directamente tu comida aca y
            luego pedirlo en el cine de tu selección.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProccessBuyInfo;
