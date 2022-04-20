import { CalendlyEventListener, InlineWidget } from "react-calendly";
import { useState } from "react";
import "../calendify.css";

export default function Clandely() {
  const [isDoneScheduling, setDoneScheduling] = useState(false);
  const [isTimeSelected, setTimeSelected] = useState(false);

  const prefill = {
    name: "Test Name",
    email: "Email@gmail.com",
  };

  const pageSettings = {
    primaryColor: "417658",
    textColor: "251e35",
    backgroundColor: "f7f5f4",
    hideLandingPageDetails: true,
    hideEventTypeDetails: true,
  };

  // const prefill = useRef({
  //   name: "Test Name",
  //   email: "Email@gmail.com"
  // });

  // const pageSettings = useRef({
  //   primaryColor: "417658",
  //   textColor: "251e35",
  //   backgroundColor: "f7f5f4",
  //   hideLandingPageDetails: true,
  //   hideEventTypeDetails: true
  // });

  function getCalendlyHeightToEnsureNoCrop() {
    if (!isTimeSelected) return { height: 650 };
    if (isDoneScheduling) return { height: 1080 };
    return { height: 650 };
  }

  function handleDateAndTimeSelected() {
    setTimeSelected(true);
  }

  function handleEventScheduled() {
    setDoneScheduling(true);
  }

  return (
    <div className="calenderContainer" style={{ overflow: "hidden" }}>
      <CalendlyEventListener
        onDateAndTimeSelected={handleDateAndTimeSelected}
        onEventScheduled={handleEventScheduled}
      >
        <InlineWidget
          url={"https://calendly.com/bhongmanee/test-a-calendly-intake-form"}
          // pageSettings={pageSettings.current}
          // prefill={prefill.current}
          pageSettings={pageSettings}
          prefill={prefill}
          styles={getCalendlyHeightToEnsureNoCrop()}
        />
      </CalendlyEventListener>
    </div>
  );
}
