import React, { useState, useEffect } from 'react';
import { 
  Paintbrush, 
  User, 
  ShieldCheck, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  DollarSign, 
  Maximize2, 
  SlidersHorizontal, 
  Mail, 
  MapPin, 
  CreditCard, 
  TrendingUp, 
  Package, 
  MessageSquare, 
  Info, 
  ChevronRight, 
  X, 
  AlertCircle 
} from 'lucide-react';

const DEFAULT_PAINTINGS = [
  {
    id: "bee-paint-1",
    title: "Azure Swirls & Honeycomb",
    price: 450,
    width: 18,
    height: 24,
    canvasType: "Stretched Canvas",
    description: "A gorgeous modern abstract combining deep ocean currents of cerulean acrylic with layered, geometric golden honeycomb cells. Represents nature's structured chaos.",
    status: "Available",
    style: "Ocean Swirl",
    primaryColor: "#0A2540",
    secondaryColor: "#00D2FF",
    accentColor: "#F59E0B",
    views: 142
  },
  {
    id: "bee-paint-2",
    title: "Cobalt Geode Nebula",
    price: 1200,
    width: 30,
    height: 40,
    canvasType: "Canvas Board",
    description: "A majestic, large-format acrylic study replicating the crystalline layers of natural geodes, blending rich cobalt blues with fine metallic gold leaf finishes.",
    status: "Reserved",
    style: "Geode Cell",
    primaryColor: "#022c22",
    secondaryColor: "#0070F3",
    accentColor: "#10B981",
    views: 89
  },
  {
    id: "bee-paint-3",
    title: "Midnight Flame Blends",
    price: 290,
    width: 12,
    height: 12,
    canvasType: "Paper",
    description: "An intimate, passionate exploration of movement. Thick palette-knife applications of paint create three-dimensional textures suggesting an active flame burning through night space.",
    status: "Available",
    style: "Palette Knife",
    primaryColor: "#0A2540",
    secondaryColor: "#EF4444",
    accentColor: "#3B82F6",
    views: 205
  },
  {
    id: "bee-paint-4",
    title: "Serene Indigo Breeze",
    price: 680,
    width: 24,
    height: 30,
    canvasType: "Stretched Canvas",
    description: "A tranquil minimalist layout focused on gradients and atmospheric depth. Translucent washes of indigo and light teal provide a calm, meditative focus.",
    status: "Sold",
    style: "Ocean Swirl",
    primaryColor: "#1E3A8A",
    secondaryColor: "#00D2FF",
    accentColor: "#E2E8F0",
    views: 310
  }
];

const AcrylicCanvasPreview = ({ style, primary, secondary, accent, width, height }) => {
  // Generates unique seeds based on style & colors
  const seed = (primary + secondary + accent).length;
  
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-50 flex items-center justify-center shadow-inner">
      {/* Dynamic Canvas Texture Background Layer */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{
        backgroundImage: `radial-gradient(circle, #000 10%, transparent 11%), radial-gradient(circle, #000 10%, transparent 11%)`,
        backgroundSize: '4px 4px',
        backgroundPosition: '0 0, 2px 2px'
      }}></div>

      <svg viewBox="0 0 400 400" className="w-full h-full transition-all duration-500">
        <defs>
          <linearGradient id={`mainGrad-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primary} />
            <stop offset="50%" stopColor={secondary} />
            <stop offset="100%" stopColor={accent} />
          </linearGradient>
          <radialGradient id={`radialGrad-${seed}`} cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor={secondary} stopOpacity="0.8" />
            <stop offset="100%" stopColor={primary} stopOpacity="0" />
          </radialGradient>
          <filter id={`blurFilter-${seed}`}>
            <feGaussianBlur stdDeviation="15" />
          </filter>
        </defs>

        {/* Base layer */}
        <rect width="400" height="400" fill="#F8FAFC" />

        {style === "Ocean Swirl" && (
          <>
            <path d="M-50,150 C120,50 250,350 450,180 L450,450 L-50,450 Z" fill={`url(#mainGrad-${seed})`} opacity="0.85" />
            <path d="M-50,220 C180,120 180,380 450,250 L450,450 L-50,450 Z" fill={secondary} opacity="0.6" filter={`url(#blurFilter-${seed})`} />
            <circle cx="280" cy="120" r="70" fill={accent} opacity="0.7" filter={`url(#blurFilter-${seed})`} />
            {/* Elegant fine paint line swirls */}
            <path d="M10,120 Q150,220 390,90" fill="none" stroke={accent} strokeWidth="3" opacity="0.8" />
            <path d="M30,150 Q180,280 370,160" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="8 6" opacity="0.6" />
          </>
        )}

        {style === "Geode Cell" && (
          <>
            <rect x="20" y="20" width="360" height="360" rx="10" fill={primary} opacity="0.05" />
            {/* Nested concentric circles creating raw natural geode patterns */}
            <circle cx="200" cy="200" r="150" fill={primary} opacity="0.75" />
            <circle cx="200" cy="200" r="120" fill={secondary} opacity="0.85" />
            <circle cx="200" cy="200" r="90" fill="url(#mainGrad-${seed})" />
            <circle cx="200" cy="200" r="60" fill={accent} opacity="0.9" />
            <circle cx="200" cy="200" r="30" fill="#FFFFFF" opacity="0.95" />
            {/* Scattered mineral spots */}
            <circle cx="120" cy="150" r="6" fill={accent} />
            <circle cx="280" cy="260" r="8" fill="#FFFFFF" opacity="0.8" />
            <circle cx="230" cy="110" r="4" fill={primary} />
          </>
        )}

        {style === "Palette Knife" && (
          <>
            {/* Thick sharp structured horizontal brush cuts */}
            <rect x="50" y="60" width="300" height="80" fill={primary} rx="8" transform="rotate(-4 200 100)" />
            <rect x="30" y="150" width="320" height="110" fill={`url(#mainGrad-${seed})`} rx="4" transform="rotate(2 190 200)" />
            <rect x="80" y="270" width="240" height="70" fill={accent} rx="12" transform="rotate(-1 200 300)" />
            <path d="M 120 40 L 140 180" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" opacity="0.15" />
            {/* Dynamic splash spots to imply action */}
            <circle cx="80" cy="90" r="12" fill={accent} opacity="0.9" />
            <circle cx="320" cy="180" r="7" fill={secondary} />
            <circle cx="100" cy="290" r="5" fill="#FFFFFF" />
          </>
        )}

        {/* Framing Canvas Drop Shadow Simulation */}
        <rect x="0" y="0" width="400" height="400" fill="none" stroke={primary} strokeWidth="2" opacity="0.15" />
      </svg>
      
      {/* Artwork Dimensions Tag display */}
      <span className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-md text-[10px] text-white px-2 py-0.5 rounded font-mono font-medium">
        {width}" x {height}"
      </span>
    </div>
  );
};

export default function App() {
  const [paintings, setPaintings] = useState(() => {
    try {
      const stored = localStorage.getItem('bee_blends_artworks');
      return stored ? JSON.parse(stored) : DEFAULT_PAINTINGS;
    } catch (e) {
      return DEFAULT_PAINTINGS;
    }
  });

  const [inquiries, setInquiries] = useState(() => {
    try {
      const stored = localStorage.getItem('bee_blends_inquiries');
      return stored ? JSON.parse(stored) : [
        {
          id: 'inq-1',
          buyerName: 'Vikram Mehta',
          buyerEmail: 'vikram@m-ventures.in',
          paintingTitle: 'Azure Swirls & Honeycomb',
          message: 'Is this piece available to ship to Mumbai? I would like to purchase this for my new office foyer.',
          date: '2026-06-23',
          type: 'UPI Purchase Request'
        }
      ];
    } catch (e) {
      return [];
    }
  });

  // State controls for navigation and filters
  const [isSellerMode, setIsSellerMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sizeFilter, setSizeFilter] = useState('All'); // All, Small (<15"), Medium (15"-30"), Large (>30")
  const [priceSort, setPriceSort] = useState('Featured'); // Featured, LowToHigh, HighToLow

  // Active form management
  const [editingId, setEditingId] = useState(null);
  const [formTitle, setFormTitle] = useState('');
  const [formPrice, setFormPrice] = useState(300);
  const [formWidth, setFormWidth] = useState(24);
  const [formHeight, setFormHeight] = useState(24);
  const [formCanvasType, setFormCanvasType] = useState('Stretched Canvas');
  const [formDesc, setFormDesc] = useState('');
  const [formStatus, setFormStatus] = useState('Available');
  const [formStyle, setFormStyle] = useState('Ocean Swirl');
  const [formPrimary, setFormPrimary] = useState('#0A2540');
  const [formSecondary, setFormSecondary] = useState('#0070F3');
  const [formAccent, setFormAccent] = useState('#00D2FF');

  // Checkout and Inquiry modal parameters
  const [activeModalArtwork, setActiveModalArtwork] = useState(null);
  const [modalMode, setModalMode] = useState(null); // 'inquiry' or 'purchase'
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerMessage, setBuyerMessage] = useState('');
  const [paymentRegion, setPaymentRegion] = useState('International'); // 'International' or 'India'
  const [paymentMethod, setPaymentMethod] = useState('PayPal'); // 'PayPal', 'UPI', 'Card'
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  
  // Custom toast notification logs
  const [toasts, setToasts] = useState([]);

  // Save changes to localstorage on update
  useEffect(() => {
    localStorage.setItem('bee_blends_artworks', JSON.stringify(paintings));
  }, [paintings]);

  useEffect(() => {
    localStorage.setItem('bee_blends_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const getArtworkSizeCategory = (width, height) => {
    const maxDim = Math.max(width, height);
    if (maxDim < 15) return 'Small';
    if (maxDim >= 15 && maxDim <= 30) return 'Medium';
    return 'Large';
  };

  const handleEditClick = (p) => {
    setEditingId(p.id);
    setFormTitle(p.title);
    setFormPrice(p.price);
    setFormWidth(p.width);
    setFormHeight(p.height);
    setFormCanvasType(p.canvasType);
    setFormDesc(p.description);
    setFormStatus(p.status);
    setFormStyle(p.style || 'Ocean Swirl');
    setFormPrimary(p.primaryColor || '#0A2540');
    setFormSecondary(p.secondaryColor || '#0070F3');
    setFormAccent(p.accentColor || '#00D2FF');
    
    // Smooth scroll down to form
    const formElement = document.getElementById('seller-form-anchor');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetForm = () => {
    setEditingId(null);
    setFormTitle('');
    setFormPrice(300);
    setFormWidth(24);
    setFormHeight(24);
    setFormCanvasType('Stretched Canvas');
    setFormDesc('');
    setFormStatus('Available');
    setFormStyle('Ocean Swirl');
    setFormPrimary('#0A2540');
    setFormSecondary('#0070F3');
    setFormAccent('#00D2FF');
  };

  const handleSaveArtwork = (e) => {
    e.preventDefault();
    if (!formTitle.trim()) {
      addToast("Please provide a beautiful title for your artwork", "error");
      return;
    }

    if (editingId) {
      // Modify existing
      setPaintings(prev => prev.map(p => {
        if (p.id === editingId) {
          return {
            ...p,
            title: formTitle,
            price: Number(formPrice),
            width: Number(formWidth),
            height: Number(formHeight),
            canvasType: formCanvasType,
            description: formDesc,
            status: formStatus,
            style: formStyle,
            primaryColor: formPrimary,
            secondaryColor: formSecondary,
            accentColor: formAccent
          };
        }
        return p;
      }));
      addToast(`Updated painting: "${formTitle}" successfully!`);
    } else {
      // Publish new painting
      const newArtwork = {
        id: `bee-paint-${Date.now()}`,
        title: formTitle,
        price: Number(formPrice),
        width: Number(formWidth),
        height: Number(formHeight),
        canvasType: formCanvasType,
        description: formDesc,
        status: formStatus,
        style: formStyle,
        primaryColor: formPrimary,
        secondaryColor: formSecondary,
        accentColor: formAccent,
        views: 1
      };
      setPaintings(prev => [newArtwork, ...prev]);
      addToast(`Successfully published: "${formTitle}" to storefront!`);
    }
    handleResetForm();
  };

  const handleDeleteArtwork = (id, title) => {
    setPaintings(prev => prev.filter(p => p.id !== id));
    addToast(`Removed painting: "${title}" from inventory`, "error");
  };

  const handleQuickStatusChange = (id, newStatus) => {
    setPaintings(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
    addToast(`Updated state to ${newStatus}`);
  };

  const handleQuickPriceChange = (id, newPrice) => {
    if (isNaN(newPrice) || newPrice <= 0) return;
    setPaintings(prev => prev.map(p => p.id === id ? { ...p, price: Number(newPrice) } : p));
    addToast(`Price changed successfully`);
  };

  const openInquiryModal = (painting, mode) => {
    setActiveModalArtwork(painting);
    setModalMode(mode);
    setBuyerName('');
    setBuyerEmail('');
    setBuyerMessage(mode === 'inquiry' 
      ? `Hello! I would love to inquire about availability and secure packaging shipping options for your acrylic work "${painting.title}".`
      : `I want to secure immediate checkout for "${painting.title}".`
    );
    // Auto preset Indian-specific configurations if client sets UPI default
    if (paymentRegion === 'India') {
      setPaymentMethod('UPI');
    } else {
      setPaymentMethod('PayPal');
    }
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!buyerName.trim() || !buyerEmail.trim()) {
      addToast("Full name and email address are required to proceed", "error");
      return;
    }

    if (modalMode === 'inquiry') {
      const newInquiry = {
        id: `inq-${Date.now()}`,
        buyerName,
        buyerEmail,
        paintingTitle: activeModalArtwork.title,
        message: buyerMessage,
        date: new Date().toISOString().split('T')[0],
        type: 'General Inquiry'
      };
      setInquiries(prev => [newInquiry, ...prev]);
      addToast(`Your inquiry for "${activeModalArtwork.title}" was submitted! The artist will email you soon.`);
    } else {
      // Direct Purchase simulator logic
      let summaryText = "";
      if (paymentRegion === 'India') {
        if (paymentMethod === 'UPI' && !upiId.trim()) {
          addToast("Please provide a valid UPI handle to initiate payment request", "error");
          return;
        }
        summaryText = `Payment request generated via ${paymentMethod === 'UPI' ? `UPI [${upiId}]` : 'Credit/Debit Card'}.`;
      } else {
        summaryText = `Payment request captured securely via global PayPal Gateway.`;
      }

      // Record instant purchase inquiry to seller dashboard
      const newPurchaseInquiry = {
        id: `inq-${Date.now()}`,
        buyerName,
        buyerEmail,
        paintingTitle: activeModalArtwork.title,
        message: `INSTANT CHECKOUT REQUEST:\nRegion: ${paymentRegion}\nMethod: ${paymentMethod}\nDetails: ${summaryText}\nClient message: ${buyerMessage}`,
        date: new Date().toISOString().split('T')[0],
        type: `Instant Order (${paymentRegion})`
      };

      setInquiries(prev => [newPurchaseInquiry, ...prev]);
      
      // Auto-update status of purchased artwork to "Reserved" or "Sold" based on successful simulated checkout
      setPaintings(prev => prev.map(p => p.id === activeModalArtwork.id ? { ...p, status: 'Reserved' } : p));
      
      addToast(`Order complete! Simulated payment successful. Your receipt is sent to ${buyerEmail}.`, "success");
    }

    setActiveModalArtwork(null);
    setModalMode(null);
  };

  const filteredPaintings = paintings.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.canvasType.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (sizeFilter === 'All') return matchesSearch;
    const sizeCategory = getArtworkSizeCategory(p.width, p.height);
    return matchesSearch && sizeCategory === sizeFilter;
  });

  const sortedPaintings = [...filteredPaintings].sort((a, b) => {
    if (priceSort === 'LowToHigh') return a.price - b.price;
    if (priceSort === 'HighToLow') return b.price - a.price;
    return 0; // Default featured sequence
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col relative antialiased selection:bg-[#0070F3] selection:text-white">
      
      {/* Toast Notification Container */}
      <div className="fixed top-5 right-5 z-50 space-y-2.5 max-w-sm pointer-events-none">
        {toasts.map(t => (
          <div key={t.id} className={`p-4 rounded-xl shadow-xl flex items-start gap-3 transform translate-y-0 transition-all duration-300 pointer-events-auto border ${
            t.type === 'error' 
              ? 'bg-rose-50 text-rose-800 border-rose-200' 
              : 'bg-emerald-50 text-emerald-800 border-emerald-200'
          }`}>
            <div className="pt-0.5">
              {t.type === 'error' ? <AlertCircle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
            </div>
            <p className="text-xs font-semibold leading-relaxed">{t.message}</p>
          </div>
        ))}
      </div>

      {}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Elegant Logo with Paintbrush Flame Icon */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0A2540] via-[#0070F3] to-[#00D2FF] p-0.5 flex items-center justify-center shadow-md shadow-[#0070F3]/10">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-[#0A2540]">
                <Paintbrush className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
            <div>
              <span className="font-serif font-extrabold text-lg sm:text-xl tracking-tight text-[#0A2540] flex items-center gap-1.5">
                Bee Blends <span className="text-xs bg-slate-100 px-2 py-0.5 rounded font-sans tracking-normal text-slate-500 font-medium">Fine Art</span>
              </span>
              <p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Original Acrylic Paintings</p>
            </div>
          </div>

          {/* Interactive Toggle Switch for Role Swap */}
          <div className="flex items-center gap-1 bg-slate-100 rounded-full p-1 border border-slate-200/50">
            <button 
              onClick={() => { setIsSellerMode(false); addToast("Switched to public-facing gallery storefront", "success"); }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 ${
                !isSellerMode 
                  ? 'bg-gradient-to-r from-[#0A2540] to-[#0070F3] text-white shadow-sm' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Buyer Mode</span>
            </button>
            <button 
              onClick={() => { setIsSellerMode(true); addToast("Manager administration console loaded", "success"); }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 ${
                isSellerMode 
                  ? 'bg-gradient-to-r from-[#0A2540] to-[#0070F3] text-white shadow-sm' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Seller Mode</span>
            </button>
          </div>

        </div>
      </header>

      <main className="flex-grow">
        
        {/* ==================================================================== */}
        {/* BUYER MODE INTERFACE */}
        {/* ==================================================================== */}
        {!isSellerMode && (
          <div className="space-y-10 pb-16">
            
            {}
            <section className="relative overflow-hidden bg-[#0A2540] text-white py-16 sm:py-20 px-4">
              {/* Subtle background abstract blending gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2540] via-[#081e33] to-[#005bb7] opacity-90"></div>
              <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-gradient-to-tr from-[#0070F3] to-[#00D2FF] opacity-20 filter blur-3xl"></div>
              <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-amber-500 opacity-10 filter blur-3xl"></div>
              
              <div className="relative max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10 text-xs text-[#00D2FF] font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Handmade Fine Acrylic Masterpieces
                </div>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  Capturing Nature's Depth and Fluid Motion
                </h1>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                  Welcome to <strong className="text-white">Bee Blends</strong>. Discover exquisite abstract canvases painted with deep blues, vivid gradient pigments, and unique organic textures that bring life to any space.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-semibold">
                  <span className="bg-slate-800/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-700/50 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" /> Free Shipping Across India
                  </span>
                  <span className="bg-slate-800/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-700/50 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" /> Secure PayPal / UPI Integration
                  </span>
                  <span className="bg-slate-800/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-700/50 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" /> Stretched & Ready to Hang
                  </span>
                </div>
              </div>
            </section>

            {}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm space-y-4">
                
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0A2540]">Curated Collection</h2>
                    <p className="text-xs text-slate-400 font-medium">Browse physical acrylic panels catalogued live by the studio</p>
                  </div>
                  
                  {/* Sorting & Search Inputs */}
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Search field */}
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search artworks, style..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#0070F3] text-slate-700 w-full sm:w-60 font-semibold"
                      />
                    </div>

                    {/* Price Sorter Dropdown */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase whitespace-nowrap">Sort:</span>
                      <select 
                        value={priceSort}
                        onChange={(e) => setPriceSort(e.target.value)}
                        className="bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl py-2 px-3 focus:outline-none focus:border-[#0070F3] text-slate-700 cursor-pointer"
                      >
                        <option value="Featured">Featured</option>
                        <option value="LowToHigh">Price: Low to High</option>
                        <option value="HighToLow">Price: High to Low</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-slate-100"></div>

                {/* Size Filter Pills Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">Dimensions:</span>
                    {['All', 'Small', 'Medium', 'Large'].map((size) => {
                      const sizeLabels = {
                        All: "All Sizes",
                        Small: "Small (<15\")",
                        Medium: "Medium (15\"-30\")",
                        Large: "Large (>30\")"
                      };
                      return (
                        <button 
                          key={size}
                          onClick={() => setSizeFilter(size)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            sizeFilter === size 
                              ? 'bg-[#0A2540] text-white shadow-sm' 
                              : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/50'
                          }`}
                        >
                          {sizeLabels[size]}
                        </button>
                      );
                    })}
                  </div>

                  <span className="text-xs text-slate-400 font-bold">
                    Found {sortedPaintings.length} results
                  </span>
                </div>

              </div>
            </section>

            {}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {sortedPaintings.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/50 shadow-sm max-w-xl mx-auto p-8 space-y-4">
                  <SlidersHorizontal className="w-12 h-12 mx-auto text-slate-300" />
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-slate-800">No matching paintings found</h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">Try resetting your active dimension filters or adjusting the search query parameters.</p>
                  </div>
                  <button 
                    onClick={() => { setSizeFilter('All'); setSearchQuery(''); }}
                    className="px-4 py-2 bg-[#0070F3] hover:bg-[#005cb3] text-white rounded-xl text-xs font-bold shadow-md transition-all"
                  >
                    Reset Filter Criteria
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedPaintings.map((p) => {
                    const isAvailable = p.status === 'Available';
                    const isReserved = p.status === 'Reserved';
                    const isSold = p.status === 'Sold';

                    return (
                      <article 
                        key={p.id} 
                        className="bg-white rounded-3xl border border-slate-200/60 overflow-hidden shadow-sm flex flex-col hover:shadow-lg transition-all duration-300 group"
                      >
                        {/* Dynamic Render Frame with relative status tag */}
                        <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
                          <AcrylicCanvasPreview 
                            style={p.style} 
                            primary={p.primaryColor} 
                            secondary={p.secondaryColor} 
                            accent={p.accentColor} 
                            width={p.width}
                            height={p.height}
                          />

                          {/* Dynamic status badges placed absolutely */}
                          <div className="absolute top-3.5 left-3.5 z-10">
                            {isAvailable && (
                              <span className="bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                Only 1 Available
                              </span>
                            )}
                            {isReserved && (
                              <span className="bg-amber-500/95 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                Reserved / Pending Payment
                              </span>
                            )}
                            {isSold && (
                              <span className="bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                Private Collection (Sold)
                              </span>
                            )}
                          </div>

                          {/* Canvas panel size quick specs badge */}
                          <div className="absolute top-3.5 right-3.5 z-10 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg border border-slate-200/50 text-[10px] text-slate-600 font-bold">
                            {getArtworkSizeCategory(p.width, p.height)} Format
                          </div>
                        </div>

                        {/* Text descriptions */}
                        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-start justify-between">
                              <h3 className="font-serif text-lg font-bold text-[#0A2540] group-hover:text-[#0070F3] transition-colors leading-tight">
                                {p.title}
                              </h3>
                              <span className="font-serif text-lg font-black text-[#0A2540] whitespace-nowrap ml-2">
                                ${p.price.toLocaleString()}
                              </span>
                            </div>

                            <p className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                              <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px]">{p.canvasType}</span>
                              • 
                              <span>{p.width}" x {p.height}" Inches</span>
                            </p>

                            <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                              {p.description}
                            </p>
                          </div>

                          {/* Action CTA Buttons */}
                          <div className="pt-2">
                            {isSold ? (
                              <div className="w-full py-3 bg-slate-50 text-slate-400 rounded-xl font-bold text-xs text-center border border-slate-200/50 flex items-center justify-center gap-1.5">
                                <Check className="w-4 h-4 stroke-[2.5]" /> SOLD • COMMISSION A SIMILAR PIECE
                              </div>
                            ) : (
                              <div className="grid grid-cols-2 gap-2">
                                <button 
                                  onClick={() => openInquiryModal(p, 'inquiry')}
                                  className="py-3 px-3.5 border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-800 transition-colors flex items-center justify-center gap-1.5 active:scale-95"
                                >
                                  <MessageSquare className="w-3.5 h-3.5" />
                                  <span>Inquire Details</span>
                                </button>
                                <button 
                                  onClick={() => openInquiryModal(p, 'purchase')}
                                  className="py-3 px-3.5 bg-gradient-to-r from-[#0A2540] to-[#0070F3] hover:from-[#0070F3] hover:to-[#00D2FF] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-[#0070F3]/10 flex items-center justify-center gap-1.5 active:scale-95"
                                >
                                  <CreditCard className="w-3.5 h-3.5" />
                                  <span>Buy Securely</span>
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Simulated payment gateway info banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
              <div className="bg-gradient-to-r from-[#0A2540]/5 via-indigo-950/[0.02] to-slate-100 rounded-3xl p-6 sm:p-8 border border-slate-200/50 flex flex-col md:flex-row items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#0070F3] shrink-0">
                  <ShieldCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="space-y-1 flex-1 text-center md:text-left">
                  <h4 className="font-serif text-[#0A2540] font-bold text-base">Global & Native Indian Payments Protected</h4>
                  <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
                    We accept international transactions securely using **PayPal**. For collectors in India, fast checkouts are available utilizing custom **UPI payments** (Google Pay, PhonePe, Paytm) alongside traditional domestic debit and credit card systems.
                  </p>
                </div>
                <div className="flex gap-4 items-center shrink-0">
                  <span className="font-mono text-[10px] tracking-widest font-bold bg-white px-2.5 py-1.5 rounded-lg text-slate-400 border border-slate-200">PAYPAL</span>
                  <span className="font-mono text-[10px] tracking-widest font-bold bg-white px-2.5 py-1.5 rounded-lg text-slate-400 border border-slate-200">UPI ACCEPTS</span>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ==================================================================== */}
        {/* SELLER ADMIN DASHBOARD */}
        {/* ==================================================================== */}
        {isSellerMode && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-20">
            
            {/* Header description */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2540]">Studio Manager Dashboard</h1>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Private Creator Interface for Bee Blends Gallery</p>
              </div>
              
              <div className="flex items-center gap-3">
                <a 
                  href="#seller-form-anchor"
                  className="px-4 py-2 bg-[#0070F3] hover:bg-[#005cb3] text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                  <span>Create Artwork Canvas</span>
                </a>
              </div>
            </div>

            {}
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-xs font-bold uppercase">Total Paintings</span>
                  <Package className="w-4 h-4 text-[#0070F3]" />
                </div>
                <p className="text-2xl font-serif font-bold text-[#0A2540]">{paintings.length}</p>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <span>In catalog database</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-xs font-bold uppercase">Active Inquiries</span>
                  <MessageSquare className="w-4 h-4 text-[#0070F3]" />
                </div>
                <p className="text-2xl font-serif font-bold text-[#0A2540]">{inquiries.length}</p>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <span className="text-emerald-500 font-bold">New Messages</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-xs font-bold uppercase">Estimated Value</span>
                  <DollarSign className="w-4 h-4 text-emerald-500" />
                </div>
                <p className="text-2xl font-serif font-bold text-[#0A2540]">
                  ${paintings.reduce((sum, p) => sum + p.price, 0).toLocaleString()}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <span>Cumulative portfolio worth</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-xs font-bold uppercase">Views Recorded</span>
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                </div>
                <p className="text-2xl font-serif font-bold text-[#0A2540]">
                  {paintings.reduce((sum, p) => sum + (p.views || 0), 0).toLocaleString()}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <span>Across all listed paintings</span>
                </div>
              </div>

            </section>

            {/* Quick Inquiry Messaging Logs Section */}
            <section className="bg-white rounded-3xl border border-slate-200/60 overflow-hidden shadow-sm">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0A2540]">Collector Inquiry & Booking Feed</h3>
                  <p className="text-xs text-slate-400 font-semibold">Incoming buyer requests, shipping inquiries, and automated purchase intents</p>
                </div>
                <button 
                  onClick={() => { setInquiries([]); addToast("Cleared messages log history", "error"); }}
                  className="text-xs text-slate-400 hover:text-slate-800 underline font-semibold"
                >
                  Clear Feed Log
                </button>
              </div>

              {inquiries.length === 0 ? (
                <div className="p-8 text-center text-slate-400 space-y-2">
                  <MessageSquare className="w-8 h-8 mx-auto text-slate-300" />
                  <p className="text-xs">No customer messaging received recently.</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="p-4 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row justify-between gap-3 text-xs">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-[#0A2540] text-sm">{inq.buyerName}</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-500 font-semibold flex items-center gap-1"><Mail className="w-3 h-3" /> {inq.buyerEmail}</span>
                          <span className="text-slate-300">•</span>
                          <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase">{inq.type || "Inquiry"}</span>
                        </div>
                        <div className="text-slate-600 font-semibold">
                          Target Painting: <span className="text-[#0070F3] font-bold">"{inq.paintingTitle}"</span>
                        </div>
                        <p className="text-slate-600 whitespace-pre-wrap leading-relaxed italic bg-slate-50/80 p-3 rounded-lg border border-slate-100">
                          "{inq.message}"
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[10px] font-mono text-slate-400">{inq.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0A2540]">Storefront Inventory Management</h3>
                  <p className="text-xs text-slate-400">Direct control parameters over pricing, availability status, and artwork deletion.</p>
                </div>
                <span className="text-xs text-slate-400 font-semibold">{paintings.length} Total Canvases Listed</span>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/80 border-b border-slate-200/50 text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                        <th className="p-4 pl-6">Artwork Spec</th>
                        <th className="p-4">Style Engine</th>
                        <th className="p-4">Dimensions</th>
                        <th className="p-4">Editable Price</th>
                        <th className="p-4">Storefront Status</th>
                        <th className="p-4 text-center pr-6">Management Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {paintings.map((p) => (
                        <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                          
                          {/* Title & Canvas type column */}
                          <td className="p-4 pl-6">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded overflow-hidden shadow-inner border border-slate-200 shrink-0 bg-slate-100 p-0.5">
                                <AcrylicCanvasPreview 
                                  style={p.style} 
                                  primary={p.primaryColor} 
                                  secondary={p.secondaryColor} 
                                  accent={p.accentColor} 
                                  width={p.width}
                                  height={p.height}
                                />
                              </div>
                              <div>
                                <h4 className="font-bold text-[#0A2540]">{p.title}</h4>
                                <p className="text-[10px] text-slate-400 font-semibold">{p.canvasType}</p>
                              </div>
                            </div>
                          </td>

                          {/* Render style identifier */}
                          <td className="p-4">
                            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-mono font-bold text-[10px]">
                              {p.style || "Ocean Swirl"}
                            </span>
                          </td>

                          {/* Dimensions format */}
                          <td className="p-4 font-mono font-semibold text-slate-600">
                            {p.width}" x {p.height}"
                          </td>

                          {/* Quick Price inline edits */}
                          <td className="p-4">
                            <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 w-24">
                              <span className="text-slate-400 font-bold">$</span>
                              <input 
                                type="number" 
                                value={p.price} 
                                onChange={(e) => handleQuickPriceChange(p.id, e.target.value)}
                                className="bg-transparent focus:outline-none w-full text-slate-700 font-bold ml-1"
                              />
                            </div>
                          </td>

                          {/* Direct Status Selector toggles */}
                          <td className="p-4">
                            <select 
                              value={p.status} 
                              onChange={(e) => handleQuickStatusChange(p.id, e.target.value)}
                              className={`rounded-lg py-1 px-2.5 font-bold text-[11px] uppercase border focus:outline-none cursor-pointer ${
                                p.status === 'Available' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                p.status === 'Reserved' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                                'bg-slate-100 text-slate-600 border-slate-300'
                              }`}
                            >
                              <option value="Available">Available</option>
                              <option value="Reserved">Reserved</option>
                              <option value="Sold">Sold</option>
                            </select>
                          </td>

                          {/* Management Control buttons */}
                          <td className="p-4 pr-6 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <button 
                                onClick={() => handleEditClick(p)}
                                className="p-2 text-slate-400 hover:text-[#0070F3] hover:bg-[#0070F3]/5 rounded-lg transition-all"
                                title="Edit Painting Specifications"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleDeleteArtwork(p.id, p.title)}
                                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                                title="Delete Painting Artwork"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {}
            <section id="seller-form-anchor" className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Form fields inputs */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A2540]">
                      {editingId ? 'Modify Listed Canvas Settings' : 'Draft New Acrylic Masterpiece'}
                    </h3>
                    <p className="text-xs text-slate-400 font-semibold">Configure details, adjust dimensions, and render procedural paint layers instantly.</p>
                  </div>

                  <form onSubmit={handleSaveArtwork} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div>
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Painting Title</label>
                        <input 
                          type="text" 
                          placeholder="e.g., Violet Depths of Sedona" 
                          value={formTitle}
                          onChange={(e) => setFormTitle(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#0070F3] text-slate-700 font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Price (USD)</label>
                        <input 
                          type="number" 
                          value={formPrice}
                          onChange={(e) => setFormPrice(Number(e.target.value))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#0070F3] text-slate-700 font-bold"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      
                      <div>
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Width (Inches)</label>
                        <input 
                          type="number" 
                          value={formWidth}
                          onChange={(e) => setFormWidth(Number(e.target.value))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#0070F3] text-slate-700 font-bold"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Height (Inches)</label>
                        <input 
                          type="number" 
                          value={formHeight}
                          onChange={(e) => setFormHeight(Number(e.target.value))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#0070F3] text-slate-700 font-bold"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Canvas Panel Type</label>
                        <select 
                          value={formCanvasType}
                          onChange={(e) => setFormCanvasType(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:outline-none focus:border-[#0070F3] text-slate-700 font-semibold cursor-pointer"
                        >
                          <option value="Stretched Canvas">Stretched Canvas</option>
                          <option value="Canvas Board">Canvas Board</option>
                          <option value="Paper">Arches Fine Paper</option>
                        </select>
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div>
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Default Display Status</label>
                        <select 
                          value={formStatus}
                          onChange={(e) => setFormStatus(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:outline-none focus:border-[#0070F3] text-slate-700 font-semibold cursor-pointer"
                        >
                          <option value="Available">Available (Only 1 Available)</option>
                          <option value="Reserved">Reserved / Pending Order</option>
                          <option value="Sold">Sold / Private Collection Archive</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Acrylic Art Style Blend</label>
                        <select 
                          value={formStyle}
                          onChange={(e) => setFormStyle(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:outline-none focus:border-[#0070F3] text-slate-700 font-semibold cursor-pointer"
                        >
                          <option value="Ocean Swirl">Ocean Swirl (Fine lines + waves)</option>
                          <option value="Geode Cell">Geode Cell (Concentric circles)</option>
                          <option value="Palette Knife">Palette Knife (Geometric textures)</option>
                        </select>
                      </div>

                    </div>

                    {/* Color Configuration Section */}
                    <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-150 space-y-3">
                      <span className="text-[11px] font-bold text-slate-400 uppercase block tracking-widest">
                        Procedural Canvas Color Blends
                      </span>
                      <div className="grid grid-cols-3 gap-4">
                        
                        <div>
                          <label className="text-[10px] font-bold text-slate-400 block mb-1">Primary Fluid</label>
                          <div className="flex items-center gap-1.5 bg-white border border-slate-200 p-1.5 rounded-lg">
                            <input 
                              type="color" 
                              value={formPrimary} 
                              onChange={(e) => setFormPrimary(e.target.value)}
                              className="w-6 h-6 border-0 cursor-pointer rounded"
                            />
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">{formPrimary}</span>
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-slate-400 block mb-1">Secondary Fluid</label>
                          <div className="flex items-center gap-1.5 bg-white border border-slate-200 p-1.5 rounded-lg">
                            <input 
                              type="color" 
                              value={formSecondary} 
                              onChange={(e) => setFormSecondary(e.target.value)}
                              className="w-6 h-6 border-0 cursor-pointer rounded"
                            />
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">{formSecondary}</span>
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-slate-400 block mb-1">Accent Paint</label>
                          <div className="flex items-center gap-1.5 bg-white border border-slate-200 p-1.5 rounded-lg">
                            <input 
                              type="color" 
                              value={formAccent} 
                              onChange={(e) => setFormAccent(e.target.value)}
                              className="w-6 h-6 border-0 cursor-pointer rounded"
                            />
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">{formAccent}</span>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Artwork Story / Backstory</label>
                      <textarea 
                        rows="3" 
                        placeholder="Write down the core creative story, the paint blending techniques applied, or emotional inspiration behind this specific canvas..." 
                        value={formDesc}
                        onChange={(e) => setFormDesc(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-[#0070F3] text-slate-700 font-semibold leading-relaxed"
                      />
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button 
                        type="submit"
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-[#0A2540] to-[#0070F3] text-white font-bold text-xs rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                      >
                        {editingId ? 'Save Changes' : 'Publish Painting to Storefront'}
                      </button>
                      <button 
                        type="button" 
                        onClick={handleResetForm}
                        className="py-3 px-4 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-700 font-bold text-xs rounded-xl uppercase tracking-wider transition-colors"
                      >
                        Clear Form Fields
                      </button>
                    </div>

                  </form>
                </div>

                {/* Live canvas generator preview sidebar */}
                <div className="w-full lg:w-[320px] space-y-3">
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/50 flex flex-col items-center">
                    <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase block mb-3.5 self-start">
                      Active Canvas Preview
                    </span>
                    
                    {/* Embedded dynamic canvas rendering component */}
                    <div className="w-full aspect-square rounded-xl overflow-hidden border border-slate-200 shadow-md">
                      <AcrylicCanvasPreview 
                        style={formStyle} 
                        primary={formPrimary} 
                        secondary={formSecondary} 
                        accent={formAccent} 
                        width={formWidth}
                        height={formHeight}
                      />
                    </div>

                    {/* Metadata summary cards */}
                    <div className="w-full mt-4 space-y-2">
                      <div className="bg-white p-3 rounded-xl border border-slate-200/50 text-xs">
                        <div className="flex justify-between items-center text-slate-400 mb-1">
                          <span>Live Palette Map</span>
                        </div>
                        <div className="flex gap-1.5">
                          <div className="w-6 h-6 rounded border border-slate-100" style={{ backgroundColor: formPrimary }} />
                          <div className="w-6 h-6 rounded border border-slate-100" style={{ backgroundColor: formSecondary }} />
                          <div className="w-6 h-6 rounded border border-slate-100" style={{ backgroundColor: formAccent }} />
                          <span className="text-[10px] font-mono text-slate-400 uppercase font-medium self-center ml-1">
                            {formStyle}
                          </span>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-xl border border-[#0070F3]/20 text-xs">
                        <h4 className="font-bold text-[#0A2540] truncate">
                          {formTitle || "Untitled Canvas Project"}
                        </h4>
                        <div className="flex justify-between items-center text-slate-500 font-semibold mt-1">
                          <span>{formWidth}" x {formHeight}" {formCanvasType}</span>
                          <span className="text-[#0070F3] font-bold">${formPrice}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </section>

          </div>
        )}

      </main>

      {}
      <footer className="bg-[#0A2540] text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="font-serif font-extrabold text-white text-lg tracking-wide">
              Bee Blends Gallery
            </span>
            <p className="text-xs text-slate-400 max-w-sm">
              Hand-painted premium original acrylic canvases. Bringing curated fluid gradients and organic designs straight to collectors.
            </p>
          </div>
          <div className="flex gap-6 items-center text-xs font-semibold">
            <a href="#about" className="hover:text-white transition-colors">Curator Biography</a>
            <a href="#shipping" className="hover:text-white transition-colors">Safe Packing Shipping</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Authenticity</a>
          </div>
          <p className="text-[11px] text-slate-500">
            &copy; 2026 Bee Blends Studio. All rights reserved globally.
          </p>
        </div>
      </footer>

      {/* ==================================================================== */}
      {/* INTERACTIVE TRANSACTION / INQUIRY MODAL GATEWAY */}
      {/* ==================================================================== */}
      {activeModalArtwork && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 overflow-hidden shadow-2xl flex flex-col md:flex-row relative animate-in fade-in zoom-in duration-200">
            
            {/* Close trigger anchor */}
            <button 
              onClick={() => { setActiveModalArtwork(null); setModalMode(null); }}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white backdrop-blur-md flex items-center justify-center text-slate-700 shadow border border-slate-200 hover:text-slate-900"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Column visual display */}
            <div className="w-full md:w-2/5 bg-slate-50 p-6 flex flex-col justify-between border-r border-slate-100">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
                  Curated Masterpiece Summary
                </span>
                <div className="aspect-square w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <AcrylicCanvasPreview 
                    style={activeModalArtwork.style} 
                    primary={activeModalArtwork.primaryColor} 
                    secondary={activeModalArtwork.secondaryColor} 
                    accent={activeModalArtwork.accentColor} 
                    width={activeModalArtwork.width}
                    height={activeModalArtwork.height}
                  />
                </div>
                <div>
                  <h4 className="font-serif text-[#0A2540] font-bold text-base leading-tight">
                    {activeModalArtwork.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-bold mt-1">
                    {activeModalArtwork.width}" x {activeModalArtwork.height}" • {activeModalArtwork.canvasType}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/50 mt-4">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Price Structure</span>
                <div className="font-serif text-2xl font-black text-[#0A2540]">${activeModalArtwork.price.toLocaleString()}</div>
                <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" /> Fully Insured Free Shipping
                </p>
              </div>
            </div>

            {/* Right Column Checkout Form inputs */}
            <div className="flex-1 p-6 sm:p-8 space-y-4">
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A2540]">
                  {modalMode === 'inquiry' ? 'Curator Inquiry Portal' : 'Secure Collectors Checkout'}
                </h3>
                <p className="text-xs text-slate-400 font-semibold">
                  {modalMode === 'inquiry' 
                    ? 'Get in touch directly with the artist to negotiate specific custom needs.' 
                    : 'Process instant automated escrow secure checkouts.'}
                </p>
              </div>

              <form onSubmit={handleModalSubmit} className="space-y-3.5">
                
                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Your Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Genevieve Vance" 
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#0070F3] text-slate-700 font-semibold"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="e.g., collector@domain.com" 
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#0070F3] text-slate-700 font-semibold"
                  />
                </div>

                {/* Dynamic Payment Gateways display if Purchase is chosen */}
                {modalMode === 'purchase' && (
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/50 space-y-3">
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Select Buyer Billing Location</span>
                      <div className="flex bg-slate-200/60 p-0.5 rounded-lg border border-slate-250">
                        <button 
                          type="button"
                          onClick={() => { setPaymentRegion('International'); setPaymentMethod('PayPal'); }}
                          className={`px-2 py-1 text-[10px] font-bold tracking-wide uppercase rounded ${paymentRegion === 'International' ? 'bg-[#0A2540] text-white shadow' : 'text-slate-500'}`}
                        >
                          Global
                        </button>
                        <button 
                          type="button"
                          onClick={() => { setPaymentRegion('India'); setPaymentMethod('UPI'); }}
                          className={`px-2 py-1 text-[10px] font-bold tracking-wide uppercase rounded ${paymentRegion === 'India' ? 'bg-[#0A2540] text-white shadow' : 'text-slate-500'}`}
                        >
                          India
                        </button>
                      </div>
                    </div>

                    <div className="h-[1px] bg-slate-200/50"></div>

                    {/* Choose relevant Payment methods based on selection */}
                    <div className="space-y-2.5">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Billing Methods Gateway</label>
                      
                      <div className="flex gap-2">
                        {paymentRegion === 'International' ? (
                          <button 
                            type="button"
                            onClick={() => setPaymentMethod('PayPal')}
                            className={`flex-1 py-2 text-[10px] font-bold tracking-wide uppercase border rounded-lg text-center ${paymentMethod === 'PayPal' ? 'bg-[#0070F3]/10 border-[#0070F3] text-[#0070F3]' : 'bg-white border-slate-200 text-slate-500'}`}
                          >
                            PayPal Payment Express
                          </button>
                        ) : (
                          <>
                            <button 
                              type="button"
                              onClick={() => setPaymentMethod('UPI')}
                              className={`flex-1 py-2 text-[10px] font-bold tracking-wide uppercase border rounded-lg text-center ${paymentMethod === 'UPI' ? 'bg-[#0070F3]/10 border-[#0070F3] text-[#0070F3]' : 'bg-white border-slate-200 text-slate-500'}`}
                            >
                              Native UPI (BHIM/GPay)
                            </button>
                            <button 
                              type="button"
                              onClick={() => setPaymentMethod('Card')}
                              className={`flex-1 py-2 text-[10px] font-bold tracking-wide uppercase border rounded-lg text-center ${paymentMethod === 'Card' ? 'bg-[#0070F3]/10 border-[#0070F3] text-[#0070F3]' : 'bg-white border-slate-200 text-slate-500'}`}
                            >
                              Indian Domestic Card
                            </button>
                          </>
                        )}
                      </div>

                      {/* Display relevant Payment details inputs */}
                      {paymentMethod === 'UPI' && (
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-500 block">UPI Handle ID</label>
                          <input 
                            type="text" 
                            placeholder="e.g., bhaskar@ybl" 
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-[#0070F3] text-slate-700 font-mono font-bold"
                          />
                        </div>
                      )}

                      {(paymentMethod === 'Card' || paymentMethod === 'PayPal') && (
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-500 block">Card Number (Demo Mock Simulation)</label>
                          <input 
                            type="text" 
                            placeholder="4111 2222 3333 4444" 
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-[#0070F3] text-slate-700 font-mono font-bold"
                          />
                        </div>
                      )}

                    </div>

                  </div>
                )}

                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {modalMode === 'inquiry' ? 'Inquiry Message' : 'Client Delivery Request Note'}
                  </label>
                  <textarea 
                    rows="3.5" 
                    value={buyerMessage}
                    onChange={(e) => setBuyerMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-[#0070F3] text-slate-700 font-semibold leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex gap-2">
                  <button 
                    type="submit"
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-[#0A2540] to-[#0070F3] text-white font-bold text-xs rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                  >
                    {modalMode === 'inquiry' ? 'Submit Inquiry Request' : 'Proceed Secure simulated Payment'}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => { setActiveModalArtwork(null); setModalMode(null); }}
                    className="py-3 px-4 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-500 font-bold text-xs rounded-xl uppercase tracking-wider transition-colors"
                  >
                    Cancel
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}