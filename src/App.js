import React, { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

import { 
  Sparkles, 
  Zap, 
  Brain, 
  Globe, 
  Clock, 
  TrendingUp,
  ArrowRight,
  PlayCircle,
  Star,
  Users,
  Shield,
  Smartphone
} from "lucide-react";
import { motion } from "framer-motion";

export default function Landing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Curated Feeds",
      description: "Stay informed with intelligent news filtering built for tech and AI enthusiasts.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Realtime Aggregation",
      description: "Briefly continuously gathers and analyzes news from trusted AI sources globally.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Personalized Topics",
      description: "Custom feeds tailored to your interests — from generative AI to policy to robotics.",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Daily Readers" },
    { number: "1000+", label: "AI Sources" },
    { number: "24/7", label: "Live Updates" },
    { number: "95%", label: "Sentiment Accuracy" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Briefly
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0">
                Try Briefly
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Your AI Digest, Reimagined
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Discover What Matters
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                With Briefly
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Briefly brings you AI-powered news summaries, tailored to your curiosity. No fluff. No spam. Just the future.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg">
                Start Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 px-8 py-4 text-lg">
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch How It Works
              </Button>
            </div>
          </motion.div>

          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Keep stats, features, benefits, etc. unchanged or ask if you want content rewritten */}
      
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Briefly
              </span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 Briefly.ai. Smarter News Starts Here.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
