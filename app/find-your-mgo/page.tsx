"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { products } from "@/lib/products";
import ScrollReveal from "@/components/ui/ScrollReveal";

const questions = [
  {
    id: "use",
    q: "How do you plan to enjoy your Mānuka honey most often?",
    answers: [
      { label: "In tea, smoothies, or cooking", weight: [3, 1, 0, 0] },
      { label: "As part of a morning wellness ritual", weight: [1, 3, 1, 0] },
      { label: "Taken directly by the spoon", weight: [0, 2, 3, 1] },
      { label: "Premium gifting or for a connoisseur", weight: [0, 0, 1, 3] },
    ],
  },
  {
    id: "experience",
    q: "Have you used Mānuka honey before?",
    answers: [
      { label: "This is my first time", weight: [3, 1, 0, 0] },
      { label: "Yes, occasionally", weight: [2, 2, 0, 0] },
      { label: "Yes, regularly", weight: [0, 2, 2, 0] },
      { label: "I'm an experienced Mānuka customer", weight: [0, 0, 2, 3] },
    ],
  },
  {
    id: "budget",
    q: "What is your approximate budget for a 250g jar?",
    answers: [
      { label: "Under $40",             weight: [3, 0, 0, 0] },
      { label: "$40 – $80",             weight: [1, 3, 0, 0] },
      { label: "$80 – $120",            weight: [0, 1, 3, 0] },
      { label: "I want the very best",  weight: [0, 0, 1, 3] },
    ],
  },
];

export default function FindYourMGOPage() {
  const [step, setStep] = useState<"guide" | "quiz" | "result">("guide");
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQ, setCurrentQ] = useState(0);

  function handleAnswer(weights: number[]) {
    const newAnswers = [...answers, ...weights];
    if (currentQ < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQ(currentQ + 1);
    } else {
      // Sum weights per product
      const totals = [0, 0, 0, 0];
      for (let i = 0; i < newAnswers.length; i++) {
        totals[i % 4] += newAnswers[i];
      }
      setAnswers(totals);
      setStep("result");
    }
  }

  const recommendedIndex = answers.length
    ? answers.indexOf(Math.max(...answers))
    : 0;

  return (
    <div className="min-h-screen bg-[#F2EFE6]" style={{ paddingTop: "calc(34px + 80px)" }}>
      {/* Hero */}
      <div className="bg-[#1F3B2E] py-20 px-6 text-center">
        <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase block mb-4">
          Your Guide
        </span>
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-5xl sm:text-6xl font-light">
          Find Your MGO
        </h1>
        <p className="mt-4 text-[#F2EFE6]/55 text-sm max-w-md mx-auto leading-relaxed">
          Explore the interactive guide or take the short quiz to find your ideal Mānuka grade.
        </p>
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-16">
        {/* Toggle */}
        <div className="flex justify-center gap-2 mb-14">
          {(["guide", "quiz"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => { setStep(mode); setCurrentQ(0); setAnswers([]); }}
              className={`px-6 py-2.5 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase border transition-all ${
                step === mode || (step === "result" && mode === "quiz")
                  ? "bg-[#1F3B2E] border-[#1F3B2E] text-[#F2EFE6]"
                  : "border-[#1F3B2E]/25 text-[#1F3B2E]/55"
              }`}
              aria-pressed={step === mode}
            >
              {mode === "guide" ? "Grade Guide" : "Take the Quiz"}
            </button>
          ))}
        </div>

        {/* Grade guide */}
        {step === "guide" && (
          <div className="space-y-5">
            {products.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 0.08}>
                <div className="border border-[#1F3B2E]/12 p-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center hover:border-[#C8A45A]/40 transition-all">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-widest uppercase">{p.tierLabel}</span>
                      <span className="font-semibold text-[#1F3B2E] text-sm">MGO {p.mgo}</span>
                    </div>
                    <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-2xl font-light mb-2">{p.name}</h3>
                    <p className="text-[#1A1A1A]/55 text-sm mb-3">{p.flavour}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.suggestedUse.slice(0, 3).map((u) => (
                        <span key={u} className="bg-[#1F3B2E]/6 text-[#1F3B2E]/60 text-[0.625rem] tracking-wide px-2.5 py-1">
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-[var(--font-cormorant)] text-[#1F3B2E] text-2xl">${p.price["250g"]}</span>
                    <Link
                      href={`/products/${p.slug}`}
                      className="flex items-center gap-1.5 bg-[#1F3B2E] text-[#F2EFE6] text-[0.625rem] font-semibold tracking-widest uppercase px-5 py-2.5 hover:bg-[#2d5240] transition-colors"
                    >
                      Shop <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Quiz */}
        {step === "quiz" && (
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2 text-xs text-[#1A1A1A]/40">
              <span>Question {currentQ + 1} of {questions.length}</span>
              <span>{Math.round(((currentQ) / questions.length) * 100)}% complete</span>
            </div>
            <div className="h-1 bg-[#1F3B2E]/10 mb-8">
              <div
                className="h-full bg-[#C8A45A] transition-all duration-500"
                style={{ width: `${(currentQ / questions.length) * 100}%` }}
              />
            </div>
            <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-3xl font-light mb-8 leading-tight">
              {questions[currentQ].q}
            </h2>
            <div className="space-y-3">
              {questions[currentQ].answers.map((a) => (
                <button
                  key={a.label}
                  onClick={() => handleAnswer(a.weight)}
                  className="w-full text-left border border-[#1F3B2E]/15 px-6 py-4 text-sm text-[#1F3B2E] hover:border-[#C8A45A] hover:bg-[#C8A45A]/5 transition-all flex items-center justify-between group"
                >
                  {a.label}
                  <ChevronRight size={14} className="text-[#1A1A1A]/30 group-hover:text-[#C8A45A] transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result */}
        {step === "result" && (
          <div className="text-center max-w-lg mx-auto">
            <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase block mb-4">
              Your Recommendation
            </span>
            <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl font-light mb-2">
              {products[recommendedIndex].name}
            </h2>
            <p className="text-[#1A1A1A]/50 text-sm mb-2">MGO {products[recommendedIndex].mgo}</p>
            <p className="text-[#1A1A1A]/60 text-base mb-8 leading-relaxed">
              {products[recommendedIndex].tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/products/${products[recommendedIndex].slug}`}
                className="bg-[#1F3B2E] text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:bg-[#2d5240] transition-colors"
              >
                Shop This Grade
              </Link>
              <button
                onClick={() => { setStep("quiz"); setCurrentQ(0); setAnswers([]); }}
                className="border border-[#1F3B2E]/25 text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:border-[#1F3B2E] transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
