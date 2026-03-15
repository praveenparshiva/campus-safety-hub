import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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
  const progress = ((current + (selected ? 1 : 0)) / quizData.length) * 100;

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
    if (!selected)
      return "border-border bg-card hover:border-primary/30 hover:bg-accent/50 text-foreground cursor-pointer";
    if (opt === question.a)
      return "border-success bg-success-muted text-foreground ring-2 ring-success/30";
    if (opt === selected)
      return "border-destructive bg-error-muted text-foreground ring-2 ring-destructive/30";
    return "border-border/50 opacity-40 text-muted-foreground";
  };

  const getScoreMessage = () => {
    const pct = (score / quizData.length) * 100;
    if (pct === 100) return "🏆 Perfect Score! You're a true anti-ragging champion!";
    if (pct >= 75) return "🌟 Excellent! You have strong awareness about anti-ragging.";
    if (pct >= 50) return "👍 Good effort! Review the topics you missed.";
    return "📚 Keep learning! Review the anti-ragging information above.";
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-24" id="quiz">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-accent rounded-full">
          <Brain size={12} /> Interactive Quiz
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-3">
          Awareness Self-Test
        </h2>
        <p className="text-muted-foreground">Test your knowledge about ragging, laws, and student rights.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-card overflow-hidden"
      >
        {/* Progress bar */}
        {!done && (
          <div className="px-6 sm:px-10 pt-6 sm:pt-8">
            <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <div className="p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-success to-success/70 text-success-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award size={40} />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-foreground mb-2">
                  Quiz Complete! 🎉
                </h3>
                <div className="inline-flex items-center gap-2 px-6 py-3 my-4 bg-muted rounded-full">
                  <span className="text-3xl font-black text-primary">{score}</span>
                  <span className="text-muted-foreground font-medium">/ {quizData.length} correct</span>
                </div>
                <p className="text-muted-foreground mt-2 mb-2">{getScoreMessage()}</p>
                <p className="text-sm text-muted-foreground/70 mb-8">
                  You have completed the anti-ragging awareness module.
                </p>
                <Button onClick={handleRestart} variant="outline" className="gap-2">
                  <RotateCcw size={16} /> Restart Quiz
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">
                  Question {current + 1} of {quizData.length}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-8 text-foreground leading-snug">
                  {question.q}
                </h3>
                <div className="grid gap-3">
                  {question.options.map((opt, i) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect(opt)}
                      disabled={!!selected}
                      className={`group relative p-4 sm:p-5 text-left rounded-xl font-semibold border-2 transition-all duration-200 ${getOptionClass(opt)} ${!selected ? "active:scale-[0.99]" : "cursor-default"}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="text-sm sm:text-base">{opt}</span>
                        {selected && opt === question.a && (
                          <CheckCircle2 size={20} className="ml-auto text-success flex-shrink-0" />
                        )}
                        {selected && opt === selected && opt !== question.a && (
                          <XCircle size={20} className="ml-auto text-destructive flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <AnimatePresence>
                  {selected && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-6 p-5 rounded-xl border-2 ${
                        selected === question.a
                          ? "bg-success-muted border-success/30"
                          : "bg-error-muted border-destructive/30"
                      }`}
                    >
                      <p className="text-sm leading-relaxed text-foreground">
                        <strong className={selected === question.a ? "text-success" : "text-destructive"}>
                          {selected === question.a ? "✓ Correct!" : "✗ Incorrect."}
                        </strong>
                        <br />
                        <span className="text-muted-foreground">{question.exp}</span>
                      </p>
                      <Button onClick={handleNext} className="mt-4 gap-2" size="sm">
                        {current + 1 < quizData.length ? (
                          <>Next Question <ArrowRight size={14} /></>
                        ) : (
                          "See Results"
                        )}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default QuizSection;
