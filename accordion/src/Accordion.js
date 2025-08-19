import { useState } from "react";

export function Accordion({ faqList }) {
  const [openAccordionID, setOpenAccordionID] = useState(null);

  return (
    <div className="accordion">
      {faqList.map((faq, idx) => (
        <AccordionItem
          key={idx}
          itemID={idx}
          num={idx + 1}
          faq={faq}
          openID={openAccordionID}
          onAccordionClick={setOpenAccordionID}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({
  num,
  itemID,
  faq,
  openID,
  onAccordionClick,
  children,
}) {
  const isOpen = itemID === openID;

  function handleAccordionItemClick() {
    onAccordionClick(isOpen ? null : itemID);
  }

  return (
    <div
      className={`item ${isOpen && "open"}`}
      onClick={handleAccordionItemClick}
    >
      <p className="number">{num}</p>
      <p className="title text">{faq.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      <div
        className="content-box"
        style={isOpen ? { display: "block" } : { display: "none" }}
      >
        {children}
      </div>
    </div>
  );
}
