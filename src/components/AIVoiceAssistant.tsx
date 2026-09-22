import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Mic, 
  MicOff, 
  X, 
  Minimize2, 
  Volume2, 
  VolumeX, 
  Send, 
  PhoneCall, 
  PhoneOff, 
  Sparkles, 
  HelpCircle, 
  Phone, 
  Mail, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { GIET_INFO, PROGRAMS, DEPARTMENTS, FAQS } from '../data/gietData';
import { PageRoute } from '../types';
import Vapi from '@vapi-ai/web';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  contactAction?: 'admission' | 'placement' | 'general';
}

interface AIVoiceAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const AIVoiceAssistant: React.FC<AIVoiceAssistantProps> = ({ isOpen, onClose, onNavigate }) => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVapiActive, setIsVapiActive] = useState(false);
  const [inputText, setInputText] = useState('');
  const [vapiPublicKey, setVapiPublicKey] = useState<string>(
    import.meta.env.VITE_VAPI_PUBLIC_KEY || '238485da-1c62-43af-9ad5-a41861f514da'
  );
  const [vapiAssistantId, setVapiAssistantId] = useState<string>(
    import.meta.env.VITE_VAPI_ASSISTANT_ID || '475a6ec2-0003-43fb-a554-62aaaa69a1d0'
  );
  const [showConfig, setShowConfig] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Namaste! I am GIET Saarthi, your AI assistant for Gandhi Institute for Education and Technology, Bhubaneswar. Ask me anything about Admissions, B.Tech/PG Courses, Hostels, Placements, or Campus Facilities.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const transcriptEndRef = useRef<HTMLDivElement>(null);
  const vapiRef = useRef<Vapi | null>(null);

  // Speech Recognition & Synthesis references
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(typeof window !== 'undefined' ? window.speechSynthesis : null);

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isListening, isSpeaking]);

  // Setup Browser Speech Recognition if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-IN';

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onresult = (event: any) => {
          const current = event.resultIndex;
          const transcript = event.results[current][0].transcript;
          if (event.results[current].isFinal) {
            handleUserMessage(transcript);
          }
        };

        recognition.onerror = () => {
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  // Initialize Vapi client if key provided
  useEffect(() => {
    if (vapiPublicKey.trim()) {
      try {
        const VapiConstructor = typeof Vapi === 'function' ? Vapi : (Vapi as any)?.default || (Vapi as any)?.Vapi;
        if (VapiConstructor) {
          const vapiInstance = new VapiConstructor(vapiPublicKey.trim());
          
          vapiInstance.on('call-start', () => {
            setIsCallActive(true);
            setIsVapiActive(true);
          });

          vapiInstance.on('call-end', () => {
            setIsCallActive(false);
            setIsVapiActive(false);
            setIsListening(false);
            setIsSpeaking(false);
          });

          vapiInstance.on('speech-start', () => {
            setIsSpeaking(true);
          });

          vapiInstance.on('speech-end', () => {
            setIsSpeaking(false);
          });

          vapiInstance.on('message', (message: any) => {
            if (message.type === 'transcript' && message.transcriptType === 'final') {
              const sender = message.role === 'assistant' ? 'ai' : 'user';
              addMessage(sender, message.transcript);
            }
          });

          vapiRef.current = vapiInstance;
        }
      } catch (err) {
        console.warn('Vapi initialization notice:', err);
      }
    }
  }, [vapiPublicKey]);

  const addMessage = (sender: 'ai' | 'user', text: string, contactAction?: 'admission' | 'placement' | 'general') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender,
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      contactAction
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // GIET Knowledge Base Logic
  const getAIAnswer = (query: string): { text: string; action?: 'admission' | 'placement' | 'general' } => {
    const q = query.toLowerCase().trim();

    // Admissions & Eligibility
    if (q.includes('admission') || q.includes('apply') || q.includes('eligibility') || q.includes('entrance') || q.includes('cutoff')) {
      return {
        text: `Admissions at GIET Bhubaneswar for B.Tech, M.Tech, MBA, and MCA are open. You can apply directly through the official admission portal at https://admission.giet.edu.in/. You can also call the Dean Admission Office at +91-9437117259 or +91-9337217151.`,
        action: 'admission'
      };
    }

    // Courses & Intake
    if (q.includes('btech') || q.includes('course') || q.includes('program') || q.includes('branch') || q.includes('intake') || q.includes('seat')) {
      if (q.includes('cse') || q.includes('computer science')) {
        return {
          text: `Computer Science & Engineering at GIET has an intake of 240 seats in B.Tech and 18 seats in M.Tech. It features modern computer laboratories, Ubuntu/Windows environments, and project-based learning.`
        };
      }
      if (q.includes('ai') || q.includes('machine learning')) {
        return {
          text: `GIET offers B.Tech in Artificial Intelligence & Machine Learning (60 seats) and CSE with AI specialization (60 seats), equipped with deep learning simulation labs and high-performance computing.`
        };
      }
      return {
        text: `GIET offers 8 B.Tech branches including CSE (240 seats), AI & ML (60), CSE-AI (60), Mechanical (120), Civil (60), ECE (60), Electrical (60), and Electrical & Computer (60). PG programs include M.Tech, MBA (120), MBA Agri Business (60), MCA (180), BBA (60), and BCA (60).`
      };
    }

    // Fees
    if (q.includes('fee') || q.includes('cost') || q.includes('charge') || q.includes('price')) {
      return {
        text: `Fee structures vary by program and scholarship allocation. Please confirm the latest official fee details with the GIET Admission Office (+91-9437117259).`,
        action: 'admission'
      };
    }

    // Hostels & Canteen
    if (q.includes('hostel') || q.includes('canteen') || q.includes('food') || q.includes('mess') || q.includes('accommodation')) {
      return {
        text: `GIET provides separate, safe boys and girls hostels with resident superintendents and caretakers. The campus canteen is reported by GIET to serve over 1,800 students and staff daily. SBI ATM facilities are also available on campus.`
      };
    }

    // Placements
    if (q.includes('placement') || q.includes('job') || q.includes('company') || q.includes('recruiter') || q.includes('salary') || q.includes('package')) {
      return {
        text: `GIET's Training & Placement Cell organizes regular campus drives and soft-skills training. Organizations appearing in GIET placement material include Infosys, IBM, Cognizant, Wipro, Tech Mahindra, Reliance, TCS, XL Dynamics, Cavisson, and Persistent Systems. Contact Placement Officer Monalisha Das at +91-9937623862 or placement@giet.edu.in.`,
        action: 'placement'
      };
    }

    // Scholarships
    if (q.includes('scholarship') || q.includes('stipend') || q.includes('tfw') || q.includes('medhabruti') || q.includes('prerana')) {
      return {
        text: `Scholarship categories accessible to eligible GIET students include Medhabruti, Prerana Post-Matric, Minority Scholarships, and Tuition Fee Waiver (TFW). Please confirm current eligibility guidelines and deadlines with the institution.`
      };
    }

    // Location & Contact
    if (q.includes('location') || q.includes('where') || q.includes('address') || q.includes('phone') || q.includes('email') || q.includes('contact')) {
      return {
        text: `GIET Main Campus is located at Baniatangi, Bhubaneswar, Khordha, Odisha – 752060. Main Phone: 06755-243600 / +91-9937860139. Admin Office: Plot 635, Behera Sahi, Bhubaneswar (+91-9437092059). Email: info@giet.edu.in.`
      };
    }

    // Principal / Management
    if (q.includes('principal') || q.includes('trust') || q.includes('management') || q.includes('founder')) {
      return {
        text: `GIET was established in 2009 under the Satya Panda Basanta Manjari Foundation Trust (SPBM Foundation). The Principal is Prof. (Dr.) Jibanananda Jena.`
      };
    }

    // Fallback response as required by prompt
    return {
      text: "I don't have verified information about that at the moment. Please contact the relevant GIET office for the latest information.",
      action: 'general'
    };
  };

  const speakText = (text: string) => {
    if (!synthRef.current || isMuted) return;
    
    // Cancel previous speech
    synthRef.current.cancel();

    const cleanText = text.replace(/(https?:\/\/[^\s]+)/g, 'on the official admission portal');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-IN';
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synthRef.current.speak(utterance);
  };

  const handleUserMessage = (userQuery: string) => {
    if (!userQuery.trim()) return;

    addMessage('user', userQuery);
    setInputText('');

    setIsListening(false);

    setTimeout(() => {
      const response = getAIAnswer(userQuery);
      addMessage('ai', response.text, response.action);
      speakText(response.text);
    }, 400);
  };

  const toggleCallState = () => {
    if (vapiRef.current && vapiPublicKey.trim()) {
      if (isCallActive) {
        vapiRef.current.stop();
        setIsCallActive(false);
      } else {
        const assistantIdToStart = vapiAssistantId.trim() || '475a6ec2-0003-43fb-a554-62aaaa69a1d0';
        vapiRef.current.start(assistantIdToStart).catch(err => {
          console.warn('Vapi start error, switching to interactive voice mode:', err);
          // Fallback to internal voice mode
          setIsCallActive(true);
          triggerSpeechRecognition();
        });
      }
    } else {
      // Internal voice mode
      if (isCallActive) {
        setIsCallActive(false);
        setIsListening(false);
        if (synthRef.current) synthRef.current.cancel();
      } else {
        setIsCallActive(true);
        triggerSpeechRecognition();
      }
    }
  };

  const triggerSpeechRecognition = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch (e) {
        // Recognition already active
      }
    } else {
      alert('Speech Recognition is not supported by your browser. You can type your questions in the input field.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] transition-all duration-300">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-4 flex items-center justify-between border-b border-blue-900/40">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
              <Bot className="w-5 h-5" />
            </div>
            {isCallActive && (
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900 animate-pulse" />
            )}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-base tracking-tight text-white">GIET Saarthi</h3>
              <span className="text-[10px] bg-blue-500/30 text-blue-200 px-2 py-0.5 rounded-full font-medium border border-blue-400/30">
                AI Voice Assistant
              </span>
            </div>
            <p className="text-xs text-slate-300">Official GIET Knowledge Base</p>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <button
            onClick={() => setIsMuted(!isMuted)}
            title={isMuted ? "Unmute AI Voice" : "Mute AI Voice"}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setShowConfig(!showConfig)}
            title="Configure Vapi API"
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-xs font-semibold"
          >
            API
          </button>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Vapi Config Panel Toggle */}
      {showConfig && (
        <div className="bg-slate-50 border-b border-slate-200 p-3 text-xs space-y-2.5">
          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              Vapi.ai Public Key:
            </label>
            <input
              type="text"
              placeholder="238485da-..."
              value={vapiPublicKey}
              onChange={(e) => setVapiPublicKey(e.target.value)}
              className="w-full px-2.5 py-1.5 border border-slate-300 rounded-md text-xs font-mono bg-white"
            />
          </div>
          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              Vapi Assistant ID:
            </label>
            <input
              type="text"
              placeholder="475a6ec2-..."
              value={vapiAssistantId}
              onChange={(e) => setVapiAssistantId(e.target.value)}
              className="w-full px-2.5 py-1.5 border border-slate-300 rounded-md text-xs font-mono bg-white"
            />
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              ✓ Active Vapi Credentials Loaded
            </span>
            <button
              onClick={() => setShowConfig(false)}
              className="px-3 py-1 bg-blue-900 text-white rounded-md hover:bg-blue-800 font-medium text-xs"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Live Voice Status Indicator */}
      <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between text-xs text-slate-300 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          {isCallActive ? (
            <div className="flex items-center space-x-2 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Voice Call Active</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-slate-500" />
              <span>Voice Mode Ready</span>
            </div>
          )}
        </div>

        {/* Audio Wave animation */}
        {(isListening || isSpeaking) && (
          <div className="flex items-center space-x-1 h-4">
            <span className="text-[10px] text-blue-300 font-medium mr-1">
              {isListening ? 'Listening...' : 'Speaking...'}
            </span>
            <span className="w-1 bg-blue-400 h-3 animate-bounce rounded-full" />
            <span className="w-1 bg-blue-400 h-4 animate-bounce rounded-full [animation-delay:0.2s]" />
            <span className="w-1 bg-blue-400 h-2 animate-bounce rounded-full [animation-delay:0.4s]" />
          </div>
        )}

        <button
          onClick={toggleCallState}
          className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-sm ${
            isCallActive 
              ? 'bg-rose-600 hover:bg-rose-700 text-white' 
              : 'bg-emerald-600 hover:bg-emerald-700 text-white'
          }`}
        >
          {isCallActive ? (
            <>
              <PhoneOff className="w-3.5 h-3.5" />
              <span>End Call</span>
            </>
          ) : (
            <>
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Start Voice Call</span>
            </>
          )}
        </button>
      </div>

      {/* Transcript / Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 min-h-[260px] max-h-[380px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-blue-900 text-white rounded-br-none shadow-sm'
                  : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
              }`}
            >
              {msg.text}
            </div>
            
            <span className="text-[10px] text-slate-400 mt-1 px-1">
              {msg.timestamp}
            </span>

            {/* Fallback Contact Buttons */}
            {msg.contactAction && (
              <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                {msg.contactAction === 'admission' && (
                  <>
                    <a
                      href="https://admission.giet.edu.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-2.5 py-1 rounded-lg flex items-center space-x-1"
                    >
                      <span>Admission Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="tel:+919437117259"
                      className="text-[11px] bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-semibold px-2.5 py-1 rounded-lg flex items-center space-x-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Dean Admission</span>
                    </a>
                  </>
                )}

                {msg.contactAction === 'placement' && (
                  <>
                    <button
                      onClick={() => onNavigate('placements')}
                      className="text-[11px] bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-2.5 py-1 rounded-lg flex items-center space-x-1"
                    >
                      <span>Placement Dashboard</span>
                    </button>
                    <a
                      href="mailto:placement@giet.edu.in"
                      className="text-[11px] bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold px-2.5 py-1 rounded-lg flex items-center space-x-1"
                    >
                      <Mail className="w-3 h-3" />
                      <span>Email Placement Cell</span>
                    </a>
                  </>
                )}

                {msg.contactAction === 'general' && (
                  <>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="text-[11px] bg-blue-900 hover:bg-blue-800 text-white font-semibold px-2.5 py-1 rounded-lg flex items-center space-x-1"
                    >
                      <span>GIET Contact Info</span>
                    </button>
                    <a
                      href="tel:+919937860139"
                      className="text-[11px] bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-semibold px-2.5 py-1 rounded-lg flex items-center space-x-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Main Office</span>
                    </a>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
        <div ref={transcriptEndRef} />
      </div>

      {/* Suggested Quick Questions */}
      <div className="bg-white border-t border-slate-100 px-3 py-2 flex gap-1.5 overflow-x-auto text-[11px]">
        <button
          onClick={() => handleUserMessage("What are the B.Tech programs and intakes?")}
          className="whitespace-nowrap bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full font-medium transition-colors"
        >
          🎓 B.Tech Intakes
        </button>
        <button
          onClick={() => handleUserMessage("How to apply for admissions?")}
          className="whitespace-nowrap bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full font-medium transition-colors"
        >
          📝 Admissions
        </button>
        <button
          onClick={() => handleUserMessage("Tell me about placement recruiters and contacts")}
          className="whitespace-nowrap bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full font-medium transition-colors"
        >
          💼 Placements
        </button>
        <button
          onClick={() => handleUserMessage("Hostel and canteen facilities")}
          className="whitespace-nowrap bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full font-medium transition-colors"
        >
          🏢 Hostels & Canteen
        </button>
      </div>

      {/* Input Controls */}
      <div className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2">
        <button
          onClick={triggerSpeechRecognition}
          title="Click to speak"
          className={`p-2.5 rounded-xl transition-all ${
            isListening
              ? 'bg-rose-500 text-white animate-pulse'
              : 'bg-blue-50 text-blue-900 hover:bg-blue-100'
          }`}
        >
          {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </button>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUserMessage(inputText);
          }}
          className="flex-1 flex items-center space-x-2"
        >
          <input
            type="text"
            placeholder="Type your question for GIET Saarthi..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 px-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="p-2.5 bg-blue-900 hover:bg-blue-800 disabled:opacity-50 text-white rounded-xl transition-colors shadow-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
