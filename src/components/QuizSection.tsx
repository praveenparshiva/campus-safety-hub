import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Question {
  q: string;
  a: string;
  options: string[];
  exp: string;
}

const quizData: Question[] = [
  {
    q: "What is the legal definition of ragging?",
    a: "Harassment or bullying of juniors",
    options: ["Friendly introduction", "Harassment or bullying of juniors", "Classroom activity", "Cultural program"],
    exp: "Ragging involves harassment, humiliation, or bullying of new students and is punishable under anti-ragging laws.",
  },
  {
    q: "What is the maximum penalty for ragging in many states?",
    a: "Expulsion and imprisonment",
    options: ["A small fine", "Verbal warning", "Expulsion and imprisonment", "Writing an apology letter"],
    exp: "Ragging is a criminal offense. Depending on severity, it can lead to permanent expulsion and jail time.",
  },
  {
    q: "If you witness ragging but don't report it, are you responsible?",
    a: "Yes, abetment is also a crime",
    options: ["No, only the bully is responsible", "Yes, abetment is also a crime", "Only if you were participating", "No, it's not your business"],
    exp: "Under UGC regulations, abetting ragging (watching or encouraging it) is also a punishable offense.",
  },
  {
    q: "Which body issued anti-ragging regulations for higher education?",
    a: "University Grants Commission (UGC)",
    options: ["Reserve Bank of India", "University Grants Commission (UGC)", "Election Commission", "NITI Aayog"],
    exp: "The UGC issued the 'Curbing the Menace of Ragging in Higher Educational Institutions' regulations in 2009.",
  },
  {
    q: "What should a student do if they are being ragged?",
    a: "Report to the Anti-Ragging Committee or Helpline",
    options: ["Ignore it and move on", "Rag other juniors in return", "Report to the Anti-Ragging Committee or Helpline", "Leave college immediately"],
    exp: "Every institution is mandated to have an Anti-Ragging Committee. Students should report incidents immediately.",
  },
  {
    q: "Which Supreme Court committee recommended strict anti-ragging measures?",
    a: "Raghavan Committee",
    options: ["Mandal Commission", "Raghavan Committee", "Shah Commission", "Sarkaria Commission"],
    exp: "The R.K. Raghavan Committee (2006) recommended comprehensive measures including FIRs and institutional accountability.",
  },
  {
    q: "Can ragging happen through online platforms?",
    a: "Yes, cyberbullying is also considered ragging",
    options: ["No, ragging is only physical", "Yes, cyberbullying is also considered ragging", "Only if it happens on campus Wi-Fi", "Only if reported by parents"],
    exp: "Ragging includes any form of harassment—physical, verbal, or digital. Cyberbullying of juniors is punishable.",
  },
  {
    q: "What is the toll-free national anti-ragging helpline number?",
    a: "1800-180-5522",
    options: ["100", "1800-180-5522", "112", "1091"],
    exp: "The national anti-ragging helpline 1800-180-5522 operates 24/7 and is toll-free for students across India.",
  },
];

const QuizSection = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);

  const question = quizData[current];

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === question.a) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current + 1 < quizData.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setDone(false);
    setScore(0);
  };

  const getOptionClass = (opt: string) => {
    if (!selected) return "border-border hover:border-muted-foreground/30 text-foreground";
    if (opt === question.a) return "border-success bg-success-muted text-foreground";
    if (opt === selected) return "border-destructive bg-error-muted text-foreground";
    return "border-border opacity-50 text-muted-foreground";
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-24" id="quiz">
      <div className="glass-card p-6 sm:p-10">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-foreground mb-2">Awareness Self-Test</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-10"
            >
              <div className="w-16 h-16 bg-success-muted text-success rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certification Complete</h3>
              <p className="text-muted-foreground mt-2">
                You scored {score}/{quizData.length}. You have completed the awareness module.
              </p>
              <button
                onClick={handleRestart}
                className="mt-6 text-primary font-bold hover:underline"
              >
                Restart Quiz
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                Question {current + 1} of {quizData.length}
              </p>
              <h3 className="text-xl font-bold mb-6 text-foreground">{question.q}</h3>
              <div className="grid gap-3">
                {question.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(opt)}
                    disabled={!!selected}
                    className={`p-4 text-left rounded-xl font-semibold border-2 transition-all duration-150 ${getOptionClass(opt)} ${!selected ? "cursor-pointer" : "cursor-default"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <AnimatePresence>
                {selected && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-lg bg-muted border border-border"
                  >
                    <p className="text-sm leading-relaxed text-foreground">
                      <strong>{selected === question.a ? "✓ Correct!" : "✗ Incorrect."}</strong>
                      <br />
                      {question.exp}
                    </p>
                    <Button onClick={handleNext} className="mt-4" size="sm">
                      {current + 1 < quizData.length ? "Next Question" : "See Results"}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuizSection;
