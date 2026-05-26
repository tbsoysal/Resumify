import { useState } from "react";
import styles from "./Faq.module.scss";

function Faq() {
  const faqData = [
    { question: 'What is Resumify?', answer: "Resumify is a resume builder that provides customizable templates to help users create professional resumes and expand their professional reach." },
    { question: 'Is Resumify really free?', answer: "Yes — Resumify offers a free resume builder. Your first resume stays free forever with all design features included, with no hidden fees or watermarks." },
    { question: 'How does Resumify ensure your data is secure?', answer: "Resumify complies with GDPR (General Data Protection Regulation), follows data protection regulations, and is committed not to sell user data. Users can delete their data at any time." }
  ]

  const [openIndex, setOpenIndex] = useState<null | number>(null);

  return (
    <section className={styles.faq}>
      <h3>Frequently Asked Questions</h3>
      <ul>
        {faqData.map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} isOpen={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)} />
        ))}
      </ul>
    </section>
  )
}

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <li>
      <a className={styles.tab} onClick={onClick}>
        <p className={styles.question}>{question}</p>
        <span className={styles.icon}>{isOpen ? '-' : '+'}</span>
      </a>
      {isOpen && <p className={styles.answer}>{answer}</p>}
    </li>
  )
}

export default Faq