import React, { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import {
  Sparkles,
  Rocket,
  Hourglass,
  ArrowRight,
  Star,
  Users,
  Shield,
  Globe,
  Brain
} from "lucide-react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    const launchDate = new Date("2025-10-01T00:00:00");
    const now = new Date();
    const diffTime = launchDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysRemaining(diffDays);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col">
      {/* Header */}
      <header className="py-6 px-6 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Briefly
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            A Smarter Feed is Coming
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The News, 
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Without the Noise
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Briefly is your intelligent news companion — delivering fast, bias-aware summaries of politics, technology, business, science, and more.
          </p>

          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg">
            Join Early Access <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Countdown */}
          <div className="mt-12 text-center">
            <h2 className="text-lg text-slate-400 mb-2">Launching in</h2>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {daysRemaining} Days
            </div>
          </div>

          <div className="mt-16 text-slate-400 space-y-3">
            <div className="flex justify-center items-center space-x-2">
              <Rocket className="w-5 h-5 text-blue-400" />
              <span>Smart digest across every topic that matters</span>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <Hourglass className="w-5 h-5 text-cyan-400" />
              <span>Launching Fall 2025</span>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Value Highlights */}
      <section className="bg-slate-900/60 py-14 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              ⏱️ 60 sec
            </div>
            <div className="text-slate-400 text-sm mt-1">to catch up on global headlines</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              🧠 AI-curated
            </div>
            <div className="text-slate-400 text-sm mt-1">so you don’t scroll endlessly</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              🔍 Bias-aware
            </div>
            <div className="text-slate-400 text-sm mt-1">left, right, and in-between clearly labeled</div>
          </div>
        </div>
      </section>

      {/* Bias Meter Preview */}
      <section className="bg-slate-900/40 py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">🔎 Bias Meter Preview</h3>
          <p className="text-slate-400 mb-6 text-sm">
            Every article will include a label indicating its likely bias so you can read with full context.
          </p>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="text-sm text-slate-300 mb-2">"Govt announces ₹5 lakh cr startup fund..."</div>
            <div className="relative w-full h-2 bg-slate-700 rounded-full">
              <div className="absolute left-[25%] w-1 h-6 bg-blue-400 rounded-sm"></div>
              <div className="absolute left-[50%] w-1 h-6 bg-gray-400 rounded-sm"></div>
              <div className="absolute left-[75%] w-1 h-6 bg-red-400 rounded-sm"></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-400 px-1">
              <span>Left</span>
              <span>Center</span>
              <span>Right</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800 text-center text-slate-500 text-sm">
        <div className="flex justify-center items-center space-x-6 mb-4 flex-wrap">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>Launching Fall 2025</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>Join the first 1000 testers</span>
          </div>
          <div className="flex items-center space-x-1">
            <Shield className="w-4 h-4" />
            <span>No ads. No tracking. Ever.</span>
          </div>
        </div>
        © 2025 Briefly. Built for people who want the truth fast.
      </footer>
    </div>
  );
}
