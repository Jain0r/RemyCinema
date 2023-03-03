import { useState } from "react";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { MdOutlineEventSeat, MdOutlineFastfood } from "react-icons/md";
import { POSTER_PATH } from "../../../Api/config";
import "./index.scss";
import { HiOutlineTicket } from "react-icons/hi";
import SelectSeats from "../../organisms/SelectSeats";
import { movieRCFormatTest, Ticket } from "../../../interfaces";
import Button from "../../atoms/Button";
import SelectTickets from "../../organisms/SelectTickets";
import { useDispatch, useSelector } from "react-redux";
import ShopSummary from "../../organisms/ShopSummary";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import SelectFoods from "../../organisms/SelectFoods";
import { initialValueSeats } from "../../../Api/dataFake";
import ModalConfirmAction from "../../molecules/ModalConfirmAction";
import {
  setCombos,
  setFoods,
  setTickets,
} from "../../../redux/actions/shopActions";

interface ShopTemplateProps {
  data: movieRCFormatTest;
}

interface Step {
  numberStep: number;
  step: string;
  icon: JSX.Element;
}
const steps: Step[] = [
  { numberStep: 1, step: "butacas", icon: <MdOutlineEventSeat /> },
  { numberStep: 2, step: "tickets", icon: <HiOutlineTicket /> },
  { numberStep: 3, step: "comidas", icon: <MdOutlineFastfood /> },
];

const ShopTemplate = ({ data }: ShopTemplateProps) => {
  const [proccessStep, setProccessStep] = useState<Step>(steps[0]);
  const [summary, setSummary] = useState<boolean>(false);
  const [modalConfirm, setModalConfirm] = useState<boolean>(false);
  const { selectedSeats, selectedTickets } = useSelector(
    (state: any) => state.shop
  );
  const dispatch = useDispatch();

  const prevStep = steps.find(
    (step: Step) => step.numberStep === proccessStep.numberStep - 1
  );

  const nextStep = steps.find(
    (step: Step) => step.numberStep === proccessStep.numberStep + 1
  );

  const handlePrevStep = () => {
    if (prevStep !== undefined) {
      setProccessStep(prevStep);
      switch (proccessStep?.numberStep) {
        case 1:
          break;
        case 2:
          dispatch(setTickets([]));
          break;
        case 3:
          dispatch(setCombos([]));
          dispatch(setFoods([]));
          break;
        default:
          break;
      }
    }
  };
  const handleNextStep = () => {
    if (nextStep !== undefined) {
      setProccessStep(nextStep);
    }
  };
  const getTotalTickets = () => {
    const reducer = (accumulator: any, currentValue: Ticket) =>
      accumulator + currentValue.cant_ticket;
    const sumTotalTickets = selectedTickets.reduce(reducer, 0);
    return sumTotalTickets;
  };

  return (
    <div className="shoptemplate_container">
      <div className="shoptemplate_main ">
        <div className="shoptemplate_movie_info">
          <p className="timer_info">
            <AiOutlineClockCircle />
            <span> 5:00</span>
          </p>
          <img
            className="movie_poster_path"
            src={`${POSTER_PATH}/${data?.posterMovie}`}
            alt={data?.titleMovie}
          ></img>
          <div className="shoptemplate_movie_layout">
            <strong>{data?.titleMovie}</strong>
            <p className="moviedetails_info_oneline">
              <span>CP Alcazar, SALA 6</span>
              <span>2D, Regular</span>
              <span>Mañana, 10 de Febrero de 2023</span>
              <span> 04:30pm</span>
            </p>
            <ul className="moviedetails_info">
              <li className="location_function">CP Alcazar, SALA 6</li>
              <li className="format_availables">
                <span>2D</span>
                <span>Regular</span>
              </li>
              <li>
                <span>
                  <AiOutlineCalendar />
                  Mañana, 10 de Febrero de 2023
                </span>
              </li>
              <li>
                <span>
                  <AiOutlineClockCircle />
                  04:30pm
                </span>
              </li>
            </ul>
            <div className="shop_summary">
              {proccessStep?.numberStep >= 2 ? (
                <Button
                  onClick={() => setSummary(true)}
                  type="button"
                  className="fifth_button"
                  text="Ver Resumen de Compra"
                ></Button>
              ) : null}
            </div>
          </div>
        </div>
        <div className="shoptemplate_proccess_info ">
          <div className="shoptemplate_proccess_main">
            <div className="proccess_time_line">
              {steps.map((step) => {
                return (
                  <p
                    key={step.numberStep}
                    className={
                      proccessStep.numberStep === step.numberStep
                        ? "proccess_step current_step"
                        : "proccess_step"
                    }
                  >
                    <span></span>
                    {step.icon}
                  </p>
                );
              })}
            </div>
            {proccessStep?.numberStep === 1 ? (
              <SelectSeats initialValue={initialValueSeats} />
            ) : null}
            {proccessStep?.numberStep === 2 ? (
              <SelectTickets totalTickets={getTotalTickets()} />
            ) : null}
            {proccessStep?.numberStep === 3 ? <SelectFoods /> : null}
          </div>
          {proccessStep.numberStep === 2 ? (
            <p className="equalty section">
              Entradas seleccionadas: {getTotalTickets()} de{" "}
              {selectedSeats?.length}{" "}
            </p>
          ) : null}
          <div className="proccess_steps_buttons section">
            {proccessStep.numberStep > 1 ? (
              <Button
                icon={<MdKeyboardArrowLeft />}
                onClick={() => setModalConfirm(true)}
                styles={{ gap: 0, width: "100px" }}
                type="button"
                className="fifth_button"
                text="Regresar"
              ></Button>
            ) : null}

            <Button
              disabled={
                proccessStep.numberStep === 2 &&
                getTotalTickets() !== selectedSeats?.length
                  ? true
                  : false
              }
              icon={<MdKeyboardArrowRight />}
              styles={{ flexDirection: "row-reverse", gap: 0, width: "100px" }}
              onClick={() => handleNextStep()}
              type="button"
              className="fifth_button"
              text="Continuar"
            ></Button>
          </div>
        </div>
        <ModalConfirmAction
          title={`Regresar a ${prevStep?.step}`}
          description={`¿Estas seguro de regresar a la selección de ${prevStep?.step}?, su actual selección de ${proccessStep?.step} se borrara.`}
          maxWidth={400}
          confirmAction={() => handlePrevStep()}
          isOpen={modalConfirm}
          onClose={() => setModalConfirm(false)}
        />
      </div>
      <ShopSummary isOpen={summary} closeSummary={() => setSummary(false)} />
    </div>
  );
};

export default ShopTemplate;
