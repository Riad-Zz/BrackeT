import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is BracKeT?",
    answer:
      "BracKeT is a 1v1 competitive coding platform where you solve programming problems against another developer and climb the ranks through your match results.",
  },
  {
    question: "How does a 1v1 match work?",
    answer:
      "Join the queue, get matched with an opponent, and enter the Arena. Both players solve the same challenge, and the match result affects your rating.",
  },
  {
    question: "How does the ranking system work?",
    answer:
      "Your rating changes based on your match results. Win matches to gain RR, lose matches to give some back, and climb through the ranks as your record improves.",
  },
  {
    question: "What programming languages are supported?",
    answer:
      "BracKeT supports multiple programming languages, allowing you to compete using the language you're most comfortable with.",
  },
  {
    question: "What happens if I disconnect during a match?",
    answer:
      "Your connection is monitored during the Arena. Disconnect and timeout rules determine how the match is handled.",
  },
  {
    question: "How are my solutions judged?",
    answer:
      "Your submission is executed against predefined test cases. The result depends on whether your solution produces the expected output within the allowed constraints.",
  },
];

export function FAQSection() {
  // Framer motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
//   };

  return (
    <section className="relative w-full overflow-hidden py-24">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="absolute left-[-10%] top-[20%] h-[400px] w-[500px] rounded-full bg-[var(--primary)] opacity-[0.08] blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[400px] w-[500px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />
      </div>

      <div className="max-w-11/12 xl:max-w-7xl mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-auto grid max-w-6xl gap-16 md:gap-12 md:grid-cols-[0.8fr_1.2fr]"
        >
          {/* Left Side: Heading */}
          <motion.div  className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
            
              
            </div>

            <h2 className="text-4xl md:text-5xl  font-bold tracking-tight text-[var(--foreground)] mb-6">
              Questions before <br className="hidden md:block" />
              <span className="text-accent">the first Duel?</span>
            </h2>

            <p className="max-w-md text-sm md:text-base font-special text-gray-400 leading-relaxed">
              Everything you need to know before stepping into the Arena. Prep your environment, understand the rules, and get ready to climb.
            </p>
          </motion.div>

          {/* Right Side: Accordion */}
          <motion.div  className="relative z-10 w-full">
            <Accordion 
              className="w-full"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="border-b border-gray-800/60"
                >
                  <AccordionTrigger className="py-6 text-left text-base md:text-lg font-semibold text-gray-200 hover:no-underline hover:text-[var(--accent)] transition-colors group">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 pr-8 text-sm md:text-base leading-relaxed text-gray-400 font-mono">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}