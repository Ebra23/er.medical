import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const questions = [
  {
    question: "How many teeth are you missing or need to be replaced?",
    options: [
      { emoji: "😊", label: "No missing teeth" },
      { emoji: "🦷", label: "1-2 teeth" },
      { emoji: "😬", label: "3-8 teeth" },
      { emoji: "🫥", label: "Most or all teeth" },
    ],
  },
  {
    question: "What is your primary concern?",
    options: [
      { emoji: "✨", label: "Cosmetic improvement" },
      { emoji: "🔧", label: "Functional issues" },
      { emoji: "💰", label: "Cost savings" },
      { emoji: "⏱️", label: "Quick treatment" },
    ],
  },
  {
    question: "When are you looking to have treatment?",
    options: [
      { emoji: "📅", label: "Within 1 month" },
      { emoji: "📆", label: "1-3 months" },
      { emoji: "🗓️", label: "3-6 months" },
      { emoji: "⏳", label: "Just exploring" },
    ],
  },
];

const PriceCalculator = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section id="prices" className="section-padding bg-muted">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">
            Get an Idea About Costs
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get a treatment plan and estimate in just a few questions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-background border border-border rounded-2xl p-6 md:p-10 shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-gold font-medium">Treatment Price Calculator</span>
            <span className="text-muted-foreground text-sm">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-muted rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question */}
          <h3 className="text-xl md:text-2xl font-heading font-semibold mb-8 text-foreground">
            {questions[currentQuestion].question}
          </h3>

          {/* Options */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={`p-4 rounded-xl border transition-all text-left ${
                  answers[currentQuestion] === index
                    ? "border-gold bg-gold/10"
                    : "border-border hover:border-gold/50"
                }`}
              >
                <span className="text-2xl mb-2 block">{option.emoji}</span>
                <span className="text-foreground font-medium text-sm">{option.label}</span>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="ghost"
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            <Button
              onClick={() => {
                if (currentQuestion < questions.length - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                }
              }}
              disabled={answers[currentQuestion] === undefined}
              className="gap-2"
            >
              {currentQuestion === questions.length - 1 ? "Get Estimate" : "Next"}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
