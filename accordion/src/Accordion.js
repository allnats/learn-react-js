import { useState } from "react";

export function Accordion({ faqList }) {
  return (
    <div className="accordion">
      {faqList.map((faq, idx) => (
        <AccordionItem
          num={idx + 1}
          key={idx}
          title={faq.title}
          text={faq.text}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOnClick() {
    setIsOpen((s) => !s);
  }

  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleOnClick}>
      <p className="number">{num}</p>
      <p className="title text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      <div
        className="content-box"
        style={isOpen ? { display: "block" } : { display: "none" }}
      >
        {text}
      </div>
    </div>
  );
}
