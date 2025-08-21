import { useState } from "react";
import BillInput from "./BillInput";
import TipSelect from "./TipSelect";
import TipOutput from "./TipOutput";
import ResetButton from "./ResetButton";

export default function TipCalculator() {
  const [billInput, setBillInput] = useState(0);
  const [yourTip, setYourTip] = useState(0.0);
  const [friendTip, setFriendTip] = useState(0.0);

  const tipOptions = {
    dissatisfied: {
      text: "Disatisfied (0%)",
      value: 0.0,
    },
    okay: {
      text: "It was okay (5%)",
      value: 0.05,
    },
    good: {
      text: "It was good (10%)",
      value: 0.1,
    },
    amazing: {
      text: "It was amazing (20%)",
      value: 0.2,
    },
  };

  return (
    <>
      <BillInput billInput={billInput} onBillChange={setBillInput} />
      <TipSelect tip={yourTip} onTipChange={setYourTip} tipOptions={tipOptions}>
        How did you like the service?
      </TipSelect>
      <TipSelect
        tip={friendTip}
        onTipChange={setFriendTip}
        tipOptions={tipOptions}
      >
        How did your friend like the service?
      </TipSelect>
      <TipOutput bill={billInput} yourTip={yourTip} friendTip={friendTip} />
      <ResetButton
        onBillChange={setBillInput}
        onYourTipChange={setYourTip}
        onFriendTipChange={setFriendTip}
      />
    </>
  );
}
