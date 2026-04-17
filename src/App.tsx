/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Shield, 
  Target, 
  Users,
  Leaf,
  Droplets,
  Wind,
  Heart,
  Activity,
  Sparkles,
  Lock,
  MoreHorizontal,
  Stethoscope,
  ChevronDown,
  Mail,
  Plus
} from 'lucide-react';

// --- Types ---

type Question = {
  id: string;
  text: string;
  type?: 'choice' | 'text' | 'number';
  placeholder?: string;
  options?: { value: string; label: string; icon?: React.ReactNode }[];
};

// --- Constants ---

const QUESTIONS: Question[] = [
  {
    id: 'name',
    text: "What is your full name?",
    type: 'text',
    placeholder: "e.g. Kelly Johnson"
  },
  {
    id: 'gender',
    text: "What is your gender?",
    type: 'choice',
    options: [
      { value: 'female', label: "Female" },
      { value: 'male', label: "Male" },
      { value: 'other', label: "Other / Prefer not to say" }
    ]
  },
  {
    id: 'age',
    text: "How old are you?",
    type: 'number',
    placeholder: "e.g. 28"
  },
  {
    id: 'energy',
    text: "How would you describe your energy levels?",
    options: [
      { value: 'crashes', label: "Frequent afternoon crashes", icon: <Zap className="w-5 h-5" /> },
      { value: 'sluggish', label: "Consistently sluggish", icon: <Wind className="w-5 h-5" /> },
      { value: 'stable', label: "Stable throughout the day", icon: <Sparkles className="w-5 h-5" /> },
    ]
  },
  {
    id: 'digestion',
    text: "How is your digestion lately?",
    options: [
      { value: 'bloated', label: "Frequent bloating / Irregularity" },
      { value: 'moderate', label: "Occasional discomfort" },
      { value: 'regular', label: "Regular and comfortable" },
    ]
  },
  {
    id: 'sleep',
    text: "How do you feel when you wake up?",
    options: [
      { value: 'tired', label: "Still tired / Restless nights" },
      { value: 'ok', label: "Somewhat refreshed" },
      { value: 'rested', label: "Deeply rested and alert" },
    ]
  },
  {
    id: 'skin',
    text: "What is the state of your skin?",
    options: [
      { value: 'dull', label: "Dull / Occasional breakouts" },
      { value: 'puffiness', label: "Puffiness / Congested" },
      { value: 'clear', label: "Clear and vibrant" },
    ]
  },
  {
    id: 'focus',
    text: "What is your primary health goal?",
    options: [
      { value: 'detox', label: "Gentle Body Detox", icon: <Droplets className="w-5 h-5" /> },
      { value: 'energy', label: "Natural Energy Boost", icon: <Zap className="w-5 h-5" /> },
      { value: 'gut', label: "Restore Gut Health", icon: <Shield className="w-5 h-5" /> },
      { value: 'longevity', label: "Long-term Vitality", icon: <Heart className="w-5 h-5" /> },
    ]
  }
];

// --- Components ---

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 59
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 font-display">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-brand-accent">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-[8px] uppercase tracking-widest opacity-40">Min</span>
      </div>
      <span className="text-4xl font-bold text-brand-accent">:</span>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-brand-accent">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-[8px] uppercase tracking-widest opacity-40">Sec</span>
      </div>
    </div>
  );
};

const LandingPage = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="medical-card max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center overflow-hidden relative"
      >
        {/* Background Accent */}
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl" />
        
        <div className="space-y-8 relative z-10">
          <div className="flex items-center gap-4">
            <div className="pill-tag bg-brand-accent/10 text-brand-accent border-none">Ancient Wisdom</div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => <Sparkles key={i} className="w-3 h-3 text-brand-accent" />)}
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[0.95]">
            Japanese <br />
            <span className="text-brand-secondary italic">Detox Secrets</span>
          </h1>
          <p className="text-2xl font-bold text-brand-primary/80">Simple Daily Habits for a Healthy Body</p>

          <p className="text-xl text-brand-primary/60 font-medium leading-relaxed">
            Discover the gentle Japanese rituals passed down through generations to quietly restore the body and calm the mind. 
            <span className="block mt-4 text-brand-primary font-bold">The secret of good health lies in tiny, daily changes.</span>
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Food as Education", icon: <Leaf className="w-4 h-4" /> },
              { label: "Pure Water Rituals", icon: <Droplets className="w-4 h-4" /> },
              { label: "Gentle Movement", icon: <Activity className="w-4 h-4" /> },
              { label: "Rest & Restoration", icon: <Heart className="w-4 h-4" /> }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white/50 rounded-2xl border border-brand-primary/5">
                <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                  {item.icon}
                </div>
                <span className="font-bold text-xs opacity-70">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <button onClick={onStart} className="pill-btn px-12 py-6 text-xl flex items-center gap-3 group">
              Start My Assessment
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-center sm:text-left">
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Personalized Guide</p>
              <p className="text-lg font-bold">Based on Your Profile</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {/* Ebook Mockup Card */}
          <motion.div 
            initial={{ rotate: 5, y: 20 }}
            animate={{ rotate: -2, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-72 h-[400px] bg-[#FDFCF8] rounded-[2rem] shadow-2xl relative overflow-hidden border-4 border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent" />
            
            {/* Cover Image - Using provided book cover */}
            <div className="absolute inset-0 pointer-events-none">
               <img 
                 src="https://raw.githubusercontent.com/andrewandrre88-rgb/images-images/refs/heads/main/ChatGPT%20Image%20Apr%2014%2C%202026%2C%2006_54_49%20PM.png" 
                 alt="Japanese Detox Secrets Book Cover" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>

            {/* Overlay to ensure readability if needed, but keeping it minimal as requested */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            
            {/* Decorative spine */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-brand-primary/5 border-r border-white/5" />
          </motion.div>

          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -right-6 md:right-0 medical-card py-4 px-6 bg-white shadow-xl border border-brand-primary/5 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold leading-none">Grandmother's Wisdom</p>
              <p className="text-[10px] opacity-40">Verified Rituals</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Social Proof Bar */}
      <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale">
        {["Hara Hachi Bu", "Ikigai", "Ma", "Shikata Ga Nai"].map((brand, i) => (
          <span key={i} className="text-2xl font-serif italic tracking-tighter">{brand}</span>
        ))}
      </div>
    </div>
  );
};

const Quiz = ({ onComplete }: { onComplete: (results: any) => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [QUESTIONS[currentStep].id]: value };
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setIsAnalyzing(true);
      setTimeout(() => onComplete(newAnswers), 3000);
    }
  };

  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  if (isAnalyzing) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="medical-card max-w-md w-full py-20 space-y-8">
          <motion.div
            animate={{ 
              rotate: 360
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-4 border-brand-accent/20 border-t-brand-accent rounded-full mx-auto"
          />
          <h2 className="text-3xl font-bold">Processing Assessment</h2>
          <p className="text-brand-primary/40 text-sm uppercase tracking-widest font-bold">Syncing with medical database...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = QUESTIONS[currentStep];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div 
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="medical-card max-w-2xl w-full"
      >
        <div className="flex items-center justify-between mb-12">
          <button 
            onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
            className={`w-12 h-12 rounded-full bg-white border border-brand-primary/5 flex items-center justify-center transition-all hover:scale-110 ${currentStep === 0 ? 'opacity-0 pointer-events-none' : ''}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-center">
            <span className="pill-tag">Question {currentStep + 1} of {QUESTIONS.length}</span>
            <div className="w-32 h-1 bg-brand-muted rounded-full mt-4 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-brand-accent"
              />
            </div>
          </div>
          <div className="w-12" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight">
          {currentQuestion.text}
        </h2>

        <div className="grid gap-4">
          {currentQuestion.type === 'text' || currentQuestion.type === 'number' ? (
            <div className="space-y-6">
              <input 
                type={currentQuestion.type}
                placeholder={currentQuestion.placeholder}
                className="w-full px-8 py-6 rounded-3xl bg-white border-2 border-brand-muted focus:border-brand-accent outline-none transition-all text-xl font-bold"
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && answers[currentQuestion.id]) {
                    handleSelect(answers[currentQuestion.id]);
                  }
                }}
                autoFocus
              />
              <button 
                onClick={() => answers[currentQuestion.id] && handleSelect(answers[currentQuestion.id])}
                disabled={!answers[currentQuestion.id]}
                className="pill-btn w-full py-5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          ) : (
            currentQuestion.options?.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`group flex items-center justify-between p-6 rounded-3xl transition-all text-left border-2
                  ${answers[currentQuestion.id] === option.value 
                    ? 'border-brand-accent bg-brand-accent/5' 
                    : 'bg-white border-transparent hover:border-brand-primary/10'}
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors
                    ${answers[currentQuestion.id] === option.value ? 'bg-brand-accent text-white' : 'bg-brand-muted/50 text-brand-primary/40'}
                  `}>
                    {option.icon || <CheckCircle2 className="w-5 h-5" />}
                  </div>
                  <span className="text-lg font-bold">{option.label}</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                  ${answers[currentQuestion.id] === option.value 
                    ? 'border-brand-accent bg-brand-accent' 
                    : 'border-brand-muted'}
                `}>
                  {answers[currentQuestion.id] === option.value && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </button>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Results = ({ data, onEmailSubmit }: { data: any, onEmailSubmit: () => void }) => {
  const name = data?.name || "Kelly Johnson";
  const age = data?.age || "28";
  const gender = data?.gender || "female";

  const [email, setEmail] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    // Strict regex for format
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!re.test(email)) return "Please enter a valid email address.";
    
    // Block common "fake" or disposable domains
    const disposable = ['test.com', 'example.com', 'mailinator.com', 'temp-mail.org', '10minutemail.com'];
    const domain = email.split('@')[1]?.toLowerCase();
    if (disposable.includes(domain)) return "Please use a real working email address.";
    
    // Ensure it's not just random text like "asdf@asdf.com"
    const localPart = email.split('@')[0];
    if (localPart.length < 3) return "Email address is too short.";
    
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateEmail(email);
    
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setIsValidating(true);
    
    // Simulate a deep verification check (DNS/SMTP simulation)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsValidating(false);
    onEmailSubmit();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl w-full grid lg:grid-cols-2 gap-8"
      >
        {/* Left Column: Patient Card Style */}
        <div className="medical-card space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Personal Blueprint</h3>
            <div className="w-10 h-10 rounded-full bg-brand-muted/30 flex items-center justify-center">
              <ChevronLeft className="w-5 h-5" />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold opacity-40">Onboarding Profile</h4>
            <div className="flex items-center justify-between p-4 bg-white rounded-3xl border border-brand-primary/5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-muted overflow-hidden border-2 border-brand-accent/20">
                  <img 
                    src={`https://api.dicebear.com/7.x/notionists/svg?seed=${gender === 'male' ? 'Jack' : 'Lily'}-${name}&backgroundColor=${gender === 'male' ? 'c0aede' : 'b6e3f4'}`} 
                    alt="User" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{name}</h2>
                  <div className="flex items-center gap-1 text-brand-accent">
                    <Activity className="w-3 h-3" />
                    <span className="text-xs font-bold">{age} Years • {gender.charAt(0).toUpperCase() + gender.slice(1)}</span>
                  </div>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-brand-muted/20 flex items-center justify-center">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-[2rem] border border-brand-primary/5 space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold opacity-40">Metabolic Efficiency</p>
                <p className="text-xl font-bold">68% <span className="text-[10px] opacity-40">Moderate</span></p>
              </div>
              <div className="h-1 w-full bg-brand-muted rounded-full overflow-hidden">
                <div className="h-full bg-brand-accent w-[68%]" />
              </div>
            </div>
            <div className="p-6 bg-white rounded-[2rem] border border-brand-primary/5 space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold opacity-40">Toxin Clearance</p>
                <p className="text-xl font-bold">42% <span className="text-[10px] opacity-40">Restricted</span></p>
              </div>
              <div className="h-1 w-full bg-brand-muted rounded-full overflow-hidden">
                <div className="h-full bg-brand-secondary w-[42%]" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold opacity-40">Identified Imbalances</h4>
            <div className="space-y-2">
              {[
                { label: "Digestive Bloating", icon: <Activity className="w-4 h-4" />, status: "High" },
                { label: "Energy Instability", icon: <Zap className="w-4 h-4" />, status: "Moderate" }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white rounded-2xl border border-brand-primary/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-muted/30 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="font-bold text-sm">{item.label}</span>
                  </div>
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent uppercase tracking-widest">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Analysis & CTA */}
        <div className="space-y-8">
          <div className="medical-card bg-brand-primary text-white space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-white/20">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Elena&backgroundColor=c0aede" alt="Doctor" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold">Doctor Elena</h4>
                <p className="text-[10px] opacity-40 uppercase tracking-widest">Lead Researcher</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-bold leading-tight">Your Japanese Detox <br /> Plan is Ready</h3>
              <div className="flex items-center justify-between">
                <span className="text-6xl font-bold">92%</span>
                <div className="pill-tag bg-white/10 text-white border-none flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  Optimized
                </div>
              </div>
              <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-brand-accent w-[92%]" />
              </div>
            </div>
          </div>

          <div className="medical-card space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Access Full Blueprint</h3>
              <p className="text-sm text-brand-primary/40 font-medium">Enter your email to receive your personalized Japanese Detox Secrets guide.</p>
            </div>
            
            <form 
              className="space-y-4" 
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <div className="relative">
                  <Mail className={`absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${error ? 'text-red-400 opacity-100' : 'opacity-20'}`} />
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className={`w-full pl-16 pr-8 py-5 rounded-full bg-white border outline-none transition-all font-bold text-lg ${error ? 'border-red-400 ring-4 ring-red-400/10' : 'border-brand-primary/10 focus:border-brand-accent'}`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    disabled={isValidating}
                    required
                  />
                </div>
                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs font-bold pl-6"
                  >
                    {error}
                  </motion.p>
                )}
              </div>
              <button 
                type="submit"
                disabled={isValidating}
                className="pill-btn w-full py-5 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {isValidating ? (
                  <>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full"
                    />
                    Verifying Email...
                  </>
                ) : (
                  <>
                    Reveal My Protocol
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SalesPage = () => {
  return (
    <div className="min-h-screen p-6 space-y-12">
      {/* Header Bar */}
      <div className="medical-card py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
            <Shield className="w-5 h-5" />
          </div>
          <span className="font-bold uppercase tracking-widest text-xs">Secure Protocol Portal</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Protocol Generated</span>
          </div>
          <CountdownTimer />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="medical-card space-y-8 relative overflow-hidden"
          >
            {/* Background Skeleton Graphic */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
              <Activity className="w-full h-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div className="space-y-4">
                <div className="pill-tag bg-brand-accent/10 text-brand-accent border-none">Priority Digital Access</div>
                <h1 className="text-6xl md:text-8xl font-bold leading-[0.9]">
                  Japanese <br />
                  <span className="text-brand-secondary italic">Detox Secrets</span>
                </h1>
                <p className="text-xl text-brand-primary/60 font-medium leading-relaxed max-w-2xl">
                  Your assessment indicates a critical need for gentle metabolic recalibration. This digital guide is the definitive system for flushing toxins and restoring peak vitality using ancient Japanese rituals.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
                  <a 
                    href="https://wisemom.gumroad.com/l/bybhqj?wanted=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pill-btn px-12 py-6 text-xl flex items-center gap-3"
                  >
                    Download My Ebook
                    <ArrowRight className="w-6 h-6" />
                  </a>
                  <div>
                    <div className="text-3xl font-bold">$27 <span className="text-xl opacity-20 line-through ml-2">$67</span></div>
                    <div className="pill-tag bg-brand-accent/10 text-brand-accent border-none">60% Discount Applied</div>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex justify-end">
                <motion.div 
                  initial={{ rotate: 5 }}
                  animate={{ rotate: -2 }}
                  className="w-64 h-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/20 relative"
                >
                  <img 
                    src="https://raw.githubusercontent.com/andrewandrre88-rgb/images-images/refs/heads/main/ChatGPT%20Image%20Apr%2014%2C%202026%2C%2006_54_49%20PM.png" 
                    alt="Book Cover" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/5 border-r border-white/5" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Before & After Comparison Section */}
          <div className="medical-card space-y-8 bg-white">
            <h3 className="text-2xl font-bold text-center">The Transformation</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-sm font-bold opacity-40 uppercase tracking-widest text-center">Before Protocol</h4>
                <div className="space-y-4">
                  {[
                    { label: "Energy Crashes", icon: <Zap className="w-4 h-4" /> },
                    { label: "Bloating & Discomfort", icon: <Activity className="w-4 h-4" /> },
                    { label: "Restless Nights", icon: <Wind className="w-4 h-4" /> },
                    { label: "Dull Complexion", icon: <Droplets className="w-4 h-4" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 opacity-50">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                        {item.icon}
                      </div>
                      <span className="font-bold text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-sm font-bold text-brand-accent uppercase tracking-widest text-center">After Protocol</h4>
                <div className="space-y-4">
                  {[
                    { label: "Stable Morning Alertness", icon: <Sparkles className="w-4 h-4" /> },
                    { label: "Regular Elimination", icon: <CheckCircle2 className="w-4 h-4" /> },
                    { label: "Deeper, Restful Sleep", icon: <Heart className="w-4 h-4" /> },
                    { label: "Clearer Complexion", icon: <Sparkles className="w-4 h-4" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                        {item.icon}
                      </div>
                      <span className="font-bold text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="medical-card space-y-6 bg-white">
              <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Days 4–7: First Shifts</h3>
              <p className="text-brand-primary/60 font-medium leading-relaxed">Digestion begins to settle. Morning energy improves. Sleep quality deepens. Bloating frequently begins to reduce.</p>
              <div className="pt-4 border-t border-brand-muted/30 flex items-center justify-between">
                <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Phase 1</span>
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
              </div>
            </div>
            <div className="medical-card space-y-6 bg-white">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Weeks 2–4: Momentum</h3>
              <p className="text-brand-primary/60 font-medium leading-relaxed">Cravings for processed foods diminish. Skin begins clearing. Energy stabilizes. Mental clarity improves noticeably.</p>
              <div className="pt-4 border-t border-brand-muted/30 flex items-center justify-between">
                <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Phase 2</span>
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Detox Pantry Section */}
          <div className="medical-card space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold opacity-30 uppercase tracking-widest">The Detox Pantry</h3>
              <div className="w-8 h-8 rounded-full bg-brand-muted/30 flex items-center justify-center">
                <Plus className="w-4 h-4" />
              </div>
            </div>
            <div className="space-y-4">
              {[
                { name: "Kombu Seaweed", benefit: "Binds heavy metals", icon: <Leaf className="w-4 h-4" /> },
                { name: "Daikon Radish", benefit: "Supports liver & kidney", icon: <Droplets className="w-4 h-4" /> },
                { name: "Miso Paste", benefit: "Probiotic treasure", icon: <Shield className="w-4 h-4" /> },
                { name: "Umeboshi Plum", benefit: "Deeply alkalizing", icon: <Sparkles className="w-4 h-4" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-brand-primary/5 group hover:border-brand-accent transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-brand-muted/30 flex items-center justify-center group-hover:bg-brand-accent/10 transition-colors text-brand-accent">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <p className="text-[10px] opacity-40">{item.benefit}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-brand-muted group-hover:bg-brand-accent" />
                </div>
              ))}
            </div>
          </div>

          <div className="medical-card bg-brand-primary text-white space-y-6 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-white/20">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=ElenaResearcher&backgroundColor=b6e3f4" alt="Doctor" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold">Doctor Elena</h4>
                <p className="text-[10px] opacity-40 uppercase tracking-widest">Lead Researcher</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed relative z-10 italic">
              "Take care of your body as a garden — water it, tend it, give it light, rest it in winter, and it will bloom for you season after season."
            </p>
            <div className="flex items-center gap-2 pt-4 relative z-10">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-brand-primary bg-brand-muted overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=user${i}&backgroundColor=ffdfbf`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-bold opacity-40">+15k copies downloaded</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<'landing' | 'quiz' | 'results' | 'sales'>('landing');
  const [quizData, setQuizData] = useState<any>(null);

  return (
    <div className="bg-brand-bg min-h-screen text-brand-primary selection:bg-brand-accent selection:text-white">
      <AnimatePresence mode="wait">
        {view === 'landing' && (
          <motion.div key="landing" exit={{ opacity: 0, y: -20 }}>
            <LandingPage onStart={() => setView('quiz')} />
          </motion.div>
        )}
        {view === 'quiz' && (
          <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Quiz onComplete={(data) => {
              setQuizData(data);
              setView('results');
            }} />
          </motion.div>
        )}
        {view === 'results' && (
          <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}>
            <Results data={quizData} onEmailSubmit={() => setView('sales')} />
          </motion.div>
        )}
        {view === 'sales' && (
          <motion.div key="sales" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <SalesPage />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      {view !== 'sales' && (
        <footer className="py-16 px-6 border-t border-brand-primary/5 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] font-display font-bold text-brand-primary/20">
            © 2024 Japanese Detox Secrets • Simple Daily Habits
          </p>
        </footer>
      )}
    </div>
  );
}
