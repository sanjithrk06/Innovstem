import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ChevronLeft } from "lucide-react";

const CourseQuiz = ({ quiz, onBack }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  // Mock questions data - in a real app this would come from an API
  const questions = [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyperlink and Text Markup Language",
        "Home Tool Markup Language",
      ],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: "Which of the following is not a programming language?",
      options: ["Python", "Java", "HTML", "C++"],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: "What is an algorithm?",
      options: [
        "A programming language",
        "A step-by-step procedure to solve a problem",
        "A hardware component",
        "A type of variable",
      ],
      correctAnswer: 1,
    },
    {
      id: 4,
      question: "Which symbol is used for single line comments in JavaScript?",
      options: ["//", "/* */", "#", "$$"],
      correctAnswer: 0,
    },
    {
      id: 5,
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Creative Style Systems",
        "Cascading Style Sheets",
        "Colorful Style Sheets",
      ],
      correctAnswer: 2,
    },
    {
      id: 6,
      question: "Which of the following is not a data type?",
      options: ["String", "Boolean", "Format", "Number"],
      correctAnswer: 2,
    },
    {
      id: 7,
      question: "What is a variable?",
      options: [
        "A fixed value",
        "A container for storing data values",
        "A programming function",
        "A type of loop",
      ],
      correctAnswer: 1,
    },
    {
      id: 8,
      question: "Which loop is guaranteed to execute at least once?",
      options: ["For loop", "While loop", "Do-while loop", "None of the above"],
      correctAnswer: 2,
    },
    {
      id: 9,
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Advanced Programming Integration",
        "Automated Process Integration",
        "Application Process Interface",
      ],
      correctAnswer: 0,
    },
    {
      id: 10,
      question:
        "Which of the following is not a valid way to declare a variable in JavaScript?",
      options: ["var x = 5;", "let x = 5;", "const x = 5;", "int x = 5;"],
      correctAnswer: 3,
    },
  ];

  // Questions per page
  const questionsPerPage = 5;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  // Get current page questions
  const getCurrentQuestions = () => {
    const start = currentPage * questionsPerPage;
    const end = start + questionsPerPage;
    return questions.slice(start, end);
  };

  // Handle option selection
  const handleOptionSelect = (questionId, optionIndex) => {
    if (isSubmitted) return;

    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex,
    });
  };

  // Handle quiz submission
  const handleSubmit = () => {
    let correctAnswers = 0;

    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    setScore(finalScore);
    setIsSubmitted(true);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  // Calculate whether we can navigate to next/previous pages
  const canGoNext = currentPage < totalPages - 1;
  const canGoPrevious = currentPage > 0;

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      {/* Quiz Header */}
      <motion.div
        className="flex items-center justify-between"
        variants={fadeInUp}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-primary hover:text-primary/80 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Quizzes</span>
          </button>
          <h3 className="text-xl font-bold text-secondary/80">{quiz.title}</h3>
        </div>

        {!isSubmitted && (
          <div className="text-sm text-gray-600">
            Question {currentPage * questionsPerPage + 1}-
            {Math.min((currentPage + 1) * questionsPerPage, questions.length)}{" "}
            of {questions.length}
          </div>
        )}
      </motion.div>

      {/* Quiz Progress */}
      {!isSubmitted && (
        <motion.div
          variants={fadeInUp}
          className="w-full bg-gray-200 rounded-full h-2.5"
        >
          <div
            className="bg-primary h-2.5 rounded-full"
            style={{
              width: `${
                (Object.keys(selectedAnswers).length / questions.length) * 100
              }%`,
            }}
          ></div>
        </motion.div>
      )}

      {/* Results Screen (shown after submission) */}
      {isSubmitted ? (
        <motion.div
          variants={fadeInUp}
          className="bg-white p-8 rounded-xl text-center space-y-6"
        >
          <h3 className="text-2xl font-bold text-secondary">Quiz Complete!</h3>

          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">{score}%</span>
            </div>
          </div>

          <div className="text-lg text-gray-700">
            You answered{" "}
            {
              Object.values(selectedAnswers).filter(
                (answer, index) => answer === questions[index].correctAnswer
              ).length
            }{" "}
            out of {questions.length} questions correctly.
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setSelectedAnswers({});
                setIsSubmitted(false);
                setCurrentPage(0);
              }}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium"
            >
              Retry Quiz
            </button>
            <button
              onClick={onBack}
              className="px-6 py-2 bg-primary text-white rounded-lg font-medium"
            >
              Back to Course
            </button>
          </div>
        </motion.div>
      ) : (
        <>
          {/* Questions */}
          <motion.div className="space-y-8" variants={staggerChildren}>
            {getCurrentQuestions().map((question, qIndex) => (
              <motion.div
                key={question.id}
                className="bg-white p-6 rounded-xl shadow-sm"
                variants={fadeInUp}
              >
                <p className="text-lg font-medium text-secondary mb-4">
                  {currentPage * questionsPerPage + qIndex + 1}.{" "}
                  {question.question}
                </p>

                <motion.div className="space-y-3" variants={staggerChildren}>
                  {question.options.map((option, oIndex) => (
                    <motion.div
                      key={oIndex}
                      variants={fadeInUp}
                      onClick={() => handleOptionSelect(question.id, oIndex)}
                      className={`p-3 border rounded-lg cursor-pointer flex items-center gap-3 transition-colors ${
                        selectedAnswers[question.id] === oIndex
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          selectedAnswers[question.id] === oIndex
                            ? "bg-primary text-white"
                            : "border border-gray-300"
                        }`}
                      >
                        {selectedAnswers[question.id] === oIndex && (
                          <Check className="w-3 h-3" />
                        )}
                      </div>
                      <span>{option}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation and Submit */}
          <motion.div
            className="flex justify-between items-center pt-6"
            variants={fadeInUp}
          >
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={!canGoPrevious}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                canGoPrevious
                  ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>

            {canGoNext ? (
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 font-medium"
              >
                Submit Quiz
              </button>
            )}
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default CourseQuiz;
