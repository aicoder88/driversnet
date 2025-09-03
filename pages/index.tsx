
import { NextSeo } from 'next-seo';
import { useState, useEffect, useCallback, useMemo } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card';
import { Button } from '../src/components/ui/button';
import { Badge } from '../src/components/ui/badge';
import { Container } from '../src/components/ui/container';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { SlideRenderer } from '../src/components/presentation/SlideRenderer';
import { OptimizedChart } from '../src/components/presentation/OptimizedChart';
import ExecutiveSummary from '../src/components/slides/ExecutiveSummary';
import CompanyEvolution from '../src/components/slides/CompanyEvolution';
import ServiceDivisions from '../src/components/slides/ServiceDivisions';
import CaseStudyInstacart from '../src/components/slides/CaseStudyInstacart';
import CaseStudyTesla from '../src/components/slides/CaseStudyTesla';
import CaseStudyMedical from '../src/components/slides/CaseStudyMedical';
import CaseStudyBmw from '../src/components/slides/CaseStudyBmw';
import DriverExcellence from '../src/components/slides/DriverExcellence';
import TechnologyIntegration from '../src/components/slides/TechnologyIntegration';
import ClientPortfolio from '../src/components/slides/ClientPortfolio';
import RapidDeployment from '../src/components/slides/RapidDeployment';
import GeographicCoverage from '../src/components/slides/GeographicCoverage';
import PartnershipProposal from '../src/components/slides/PartnershipProposal';
import CompetitiveAdvantage from '../src/components/slides/CompetitiveAdvantage';
import ServiceIntegration from '../src/components/slides/ServiceIntegration';
import RoiProjection from '../src/components/slides/RoiProjection';
import NextSteps from '../src/components/slides/NextSteps';
import AgendaOverview from '../src/components/slides/AgendaOverview';
import PerformanceMetrics from '../src/components/slides/PerformanceMetrics';

export default function DriverNetworkPresentation() {
  const [activeTab, setActiveTab] = useState('agenda-overview');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [slideTransition, setSlideTransition] = useState('');
  const [presentationStartTime, setPresentationStartTime] = useState<Date | null>(null);
  const [slideTimer, setSlideTimer] = useState(0);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showSwipeIndicator, setShowSwipeIndicator] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [analytics, setAnalytics] = useState({
    slideViews: {} as { [key: string]: number },
    timeOnSlide: {} as { [key: string]: number },
    navigationActions: 0,
    sessionStartTime: new Date(),
    totalPresentationTime: 0,
    keyboardShortcuts: 0,
    touchGestures: 0
  });
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = useMemo(() => [
    'agenda-overview', 'executive-summary', 'company-evolution', 'service-divisions',
    'performance-metrics', 'case-study-instacart', 'case-study-tesla', 'case-study-medical', 'case-study-bmw',
    'driver-excellence', 'technology-integration', 'client-portfolio',
    'rapid-deployment', 'geographic-coverage',
    'partnership-proposal', 'competitive-advantage', 'service-integration', 'roi-projection', 'next-steps'
  ], []);

  // Analytics tracking functions
  const trackSlideView = useCallback((slideId: string) => {
    setAnalytics(prev => ({
      ...prev,
      slideViews: {
        ...prev.slideViews,
        [slideId]: (prev.slideViews[slideId] || 0) + 1
      }
    }));
  }, []);

  const trackNavigation = useCallback((method: 'keyboard' | 'touch' | 'click') => {
    setAnalytics(prev => ({
      ...prev,
      navigationActions: prev.navigationActions + 1,
      ...(method === 'keyboard' && { keyboardShortcuts: prev.keyboardShortcuts + 1 }),
      ...(method === 'touch' && { touchGestures: prev.touchGestures + 1 })
    }));
  }, []);

  const navigateTab = useCallback((direction: 'prev' | 'next', method: 'keyboard' | 'touch' | 'click' = 'click') => {
    console.log('navigateTab called with direction:', direction, 'method:', method, 'activeTab:', activeTab);
    const currentIndex = tabs.indexOf(activeTab);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
    } else {
      newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
    }
    
    console.log('Navigation: currentIndex:', currentIndex, 'newIndex:', newIndex, 'newTab:', tabs[newIndex]);
    
    // Track analytics
    trackNavigation(method);
    trackSlideView(tabs[newIndex]);
    
    // Add slide transition effect
    setSlideTransition(direction === 'next' ? 'slide-left' : 'slide-right');
    setTimeout(() => setSlideTransition(''), 400);
    
    setActiveTab(tabs[newIndex]);
    scrollToTop();
    
    // Save progress to localStorage
    localStorage.setItem('dn-presentation-slide', tabs[newIndex]);
  }, [activeTab, tabs, trackNavigation, trackSlideView]);

  const goToSlide = useCallback((slideId: string, method: 'keyboard' | 'touch' | 'click' = 'click') => {
    // Track analytics
    trackNavigation(method);
    trackSlideView(slideId);
    
    setSlideTransition('fade');
    setTimeout(() => setSlideTransition(''), 500);
    setActiveTab(slideId);
    scrollToTop();
    localStorage.setItem('dn-presentation-slide', slideId);
  }, [trackNavigation, trackSlideView]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        navigateTab('prev', 'keyboard');
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        navigateTab('next', 'keyboard');
      } else if (event.key === 'f' || event.key === 'F11') {
        event.preventDefault();
        toggleFullscreen();
      } else if (event.key === 'Escape') {
        setIsFullscreen(false);
        setShowThumbnails(false);
      } else if (event.key === 't' || event.key === 'T') {
        event.preventDefault();
        setShowThumbnails(!showThumbnails);
      } else if (event.key === 'n' || event.key === 'N') {
        event.preventDefault();
        setShowSpeakerNotes(!showSpeakerNotes);
      } else if (event.key === 'Home') {
        event.preventDefault();
        goToSlide('agenda-overview', 'keyboard');
      } else if (event.key === 'End') {
        event.preventDefault();
        goToSlide('next-steps', 'keyboard');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigateTab, goToSlide, showThumbnails, showSpeakerNotes]);

  // Load saved progress
  useEffect(() => {
    const savedSlide = localStorage.getItem('dn-presentation-slide');
    if (savedSlide && tabs.includes(savedSlide)) {
      setActiveTab(savedSlide);
      // Ensure we start at the top
      setTimeout(() => scrollToTop(), 100);
    }
  }, [tabs]);

  // Always scroll to top when slide changes
  useEffect(() => {
    scrollToTop();
  }, [activeTab]);

  // Mobile detection and swipe indicator
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Show swipe indicator on mobile for first-time users
    if (window.innerWidth <= 768) {
      const hasSeenIndicator = localStorage.getItem('dn-seen-swipe-indicator');
      if (!hasSeenIndicator) {
        setShowSwipeIndicator(true);
        setTimeout(() => {
          setShowSwipeIndicator(false);
          localStorage.setItem('dn-seen-swipe-indicator', 'true');
        }, 3000);
      }
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Timer functionality
  useEffect(() => {
    if (presentationStartTime) {
      const timer = setInterval(() => {
        setSlideTimer(Math.floor((Date.now() - presentationStartTime.getTime()) / 1000));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [presentationStartTime]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen().catch(err => {
        console.error('Error attempting to exit fullscreen:', err);
      });
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Header scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const startPresentation = () => {
    setPresentationStartTime(new Date());
    goToSlide('agenda-overview');
    setIsFullscreen(true);
    toggleFullscreen();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const printPresentation = () => {
    // Create a print-friendly version of all slides
    window.print();
  };

  const exportSingleSlideToPDF = async () => {
    setIsExporting(true);
    try {
      // Use 16:9 aspect ratio for widescreen format
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [297, 167] // 16:9 ratio, width 297mm
      });

      const slideElement = document.querySelector('.presentation-slide main');
      if (!slideElement) {
        throw new Error('Slide element not found');
      }

      // Temporarily hide navigation elements for clean export
      const elementsToHide = document.querySelectorAll('.no-print');
      elementsToHide.forEach(el => (el as HTMLElement).style.display = 'none');

      // Create canvas with optimized settings for presentations
      const canvas = await html2canvas(slideElement as HTMLElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: slideElement.scrollWidth,
        height: slideElement.scrollHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });

      // Restore hidden elements
      elementsToHide.forEach(el => (el as HTMLElement).style.display = '');

      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = 297;
      const pdfHeight = 167;
      
      // Calculate dimensions to fit the slide properly
      const canvasAspectRatio = canvas.width / canvas.height;
      const pdfAspectRatio = pdfWidth / pdfHeight;
      
      let finalWidth = pdfWidth;
      let finalHeight = pdfHeight;
      let xOffset = 0;
      let yOffset = 0;
      
      if (canvasAspectRatio > pdfAspectRatio) {
        // Canvas is wider than PDF
        finalHeight = pdfWidth / canvasAspectRatio;
        yOffset = (pdfHeight - finalHeight) / 2;
      } else {
        // Canvas is taller than PDF
        finalWidth = pdfHeight * canvasAspectRatio;
        xOffset = (pdfWidth - finalWidth) / 2;
      }
      
      pdf.addImage(imgData, 'PNG', xOffset, yOffset, finalWidth, finalHeight);
      
      // Save the PDF
      const slideNumber = tabs.indexOf(activeTab) + 1;
      pdf.save(`DriverNetwork-Slide-${slideNumber}.pdf`);
      
      // Show success message
      alert('PDF exported successfully!');
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const exportAllSlidesToPDF = async () => {
    setIsExporting(true);
    try {
      // Use 16:9 aspect ratio for widescreen format
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [297, 167] // 16:9 ratio, width 297mm
      });

      const currentSlide = activeTab;
      let addedFirstPage = false;

      // Hide navigation elements
      const elementsToHide = document.querySelectorAll('.no-print');
      elementsToHide.forEach(el => (el as HTMLElement).style.display = 'none');

      for (let i = 0; i < tabs.length; i++) {
        const slideId = tabs[i];
        
        // Navigate to the slide
        setActiveTab(slideId);
        
        // Wait for slide to render
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const slideElement = document.querySelector('.presentation-slide main');
        if (!slideElement) continue;

        // Create canvas for this slide
        const canvas = await html2canvas(slideElement as HTMLElement, {
          scale: 1.5,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          width: slideElement.scrollWidth,
          height: slideElement.scrollHeight
        });

        const imgData = canvas.toDataURL('image/png');
        
        // Add new page if not the first slide
        if (addedFirstPage) {
          pdf.addPage();
        }
        addedFirstPage = true;
        
        // Calculate dimensions to fit the slide properly
        const pdfWidth = 297;
        const pdfHeight = 167;
        const canvasAspectRatio = canvas.width / canvas.height;
        const pdfAspectRatio = pdfWidth / pdfHeight;
        
        let finalWidth = pdfWidth;
        let finalHeight = pdfHeight;
        let xOffset = 0;
        let yOffset = 0;
        
        if (canvasAspectRatio > pdfAspectRatio) {
          finalHeight = pdfWidth / canvasAspectRatio;
          yOffset = (pdfHeight - finalHeight) / 2;
        } else {
          finalWidth = pdfHeight * canvasAspectRatio;
          xOffset = (pdfWidth - finalWidth) / 2;
        }
        
        pdf.addImage(imgData, 'PNG', xOffset, yOffset, finalWidth, finalHeight);
      }
      
      // Restore navigation elements
      elementsToHide.forEach(el => (el as HTMLElement).style.display = '');
      
      // Restore original slide
      setActiveTab(currentSlide);
      // Scroll to top after restoring
      setTimeout(() => scrollToTop(), 100);
      
      // Save the complete PDF
      pdf.save('DriverNetwork-Complete-Presentation.pdf');
      
      alert(`Complete presentation exported successfully! (${tabs.length} slides)`);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const exportToImages = async () => {
    setIsExporting(true);
    try {
      const slideElement = document.querySelector('.presentation-slide');
      if (!slideElement) {
        throw new Error('Slide element not found');
      }

      // Create high-quality canvas from current slide
      const canvas = await html2canvas(slideElement as HTMLElement, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: slideElement.scrollWidth,
        height: slideElement.scrollHeight
      });

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.download = `DriverNetwork-Slide-${tabs.indexOf(activeTab) + 1}.png`;
          link.href = url;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          
          alert('Image exported successfully!');
        }
      }, 'image/png', 1.0);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      navigateTab('next', 'touch');
    } else if (isRightSwipe) {
      navigateTab('prev', 'touch');
    }
  };


  const trackTimeOnSlide = useCallback((slideId: string, timeSpent: number) => {
    setAnalytics(prev => ({
      ...prev,
      timeOnSlide: {
        ...prev.timeOnSlide,
        [slideId]: (prev.timeOnSlide[slideId] || 0) + timeSpent
      }
    }));
  }, []);

  const generateAnalyticsReport = useCallback(() => {
    const totalViews = Object.values(analytics.slideViews).reduce((sum, views) => sum + views, 0);
    const totalTimeSpent = Object.values(analytics.timeOnSlide).reduce((sum, time) => sum + time, 0);
    const sessionDuration = (new Date().getTime() - analytics.sessionStartTime.getTime()) / 1000;
    
    const report = {
      sessionSummary: {
        sessionDuration: Math.round(sessionDuration),
        totalSlideViews: totalViews,
        totalTimeSpent: Math.round(totalTimeSpent),
        navigationActions: analytics.navigationActions,
        keyboardShortcuts: analytics.keyboardShortcuts,
        touchGestures: analytics.touchGestures,
      },
      slideAnalytics: Object.entries(analytics.slideViews).map(([slideId, views]) => ({
        slideId,
        views,
        timeSpent: Math.round(analytics.timeOnSlide[slideId] || 0),
        averageTime: Math.round((analytics.timeOnSlide[slideId] || 0) / views)
      })).sort((a, b) => b.views - a.views),
    };
    
    return report;
  }, [analytics]);

  const struggleMetrics = [
    { label: 'Companies that fail', value: '73%', description: 'Within first 2 years of expansion' },
    { label: 'Average build time', value: '18mo', description: 'To establish reliable network' },
    { label: 'Infrastructure cost', value: '$2M+', description: 'Minimum viable network investment' },
    { label: 'Market share lost', value: '45%', description: 'While building internal capabilities' }
  ];

  const partnerships = [
    { name: 'Instacart', markets: 6, achievement: '100% on-time delivery' },
    { name: 'Tesla', category: 'Automotive', achievement: '99.9% damage-free record' },
    { name: 'BMW', category: 'Automotive', achievement: 'White-glove service' },
    { name: 'SDSRX Medical', category: 'Healthcare', achievement: '18+ months zero incidents' }
  ];

  const speakerNotes: { [key: string]: string[] } = {
    'agenda-overview': [
      'Welcome - set professional tone from the start',
      'Agenda shows comprehensive preparation and respect for time',
      'Emphasize this is about strategic partnership, not just vendor relationship',
      'Preview key value propositions that will be detailed in presentation'
    ],
    'executive-summary': [
      'Open with confidence - emphasize our proven track record',
      'Highlight 1,000+ drivers as key differentiator',
      '19 markets shows we understand scale Uber needs',
      'Focus on reliability metrics - this is what matters to Uber'
    ],
    'company-evolution': [
      'Show growth trajectory - we\'ve been building this for 12 years',
      'Revenue growth demonstrates business viability',
      'Driver network expansion shows operational capability',
      'Emphasize organic growth vs acquisition-based expansion'
    ],
    'performance-metrics': [
      'Lead with concrete numbers - 100% on-time delivery',
      'Safety record is crucial for partnership',
      '$50M in value delivered without major incidents',
      'These metrics directly address Uber\'s KPIs'
    ],
    'case-study-instacart': [
      'This is our strongest use case - similar to Uber model',
      'Emphasize gig economy compatibility',
      '6 markets proves we can scale quickly',
      'Zero delays shows operational excellence'
    ],
    'partnership-proposal': [
      'This is the key slide - pause for questions',
      'Emphasize mutual benefit, not just what we need',
      'Strategic fit with Uber\'s growth plans',
      'Ready to start pilot program immediately'
    ],
    'next-steps': [
      'Clear call to action - request pilot program',
      'Specific timeline shows we\'re serious',
      'Leave contact information and follow-up plan',
      'End with confidence in partnership success'
    ]
  };

  return (
    <>
      <NextSeo
        title="Driver Network Inc. - Uber Freight Partnership Proposal"
        description="Comprehensive logistics solutions for Uber's freight delivery network"
        noindex={true}
        nofollow={true}
        additionalMetaTags={[
          {
            name: 'robots',
            content: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicon-16x16.png',
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
          },
          {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/favicon.svg',
          },
        ]}
      />

      <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 ${isFullscreen ? 'fullscreen-mode' : ''}`}>
        <style jsx>{`
          .slide-container {
            position: relative;
            overflow: hidden;
          }
          
          .slide-transition {
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .slide-left {
            animation: slideLeft 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .slide-right {
            animation: slideRight 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .fade {
            animation: slideFade 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .slide-container {
            transform: translateZ(0);
            backface-visibility: hidden;
          }
          
          @keyframes slideLeft {
            0% { 
              transform: translateX(120%) scale(0.95); 
              opacity: 0;
              filter: blur(2px);
            }
            60% {
              opacity: 0.8;
            }
            100% { 
              transform: translateX(0) scale(1); 
              opacity: 1;
              filter: blur(0);
            }
          }
          
          @keyframes slideRight {
            0% { 
              transform: translateX(-120%) scale(0.95); 
              opacity: 0;
              filter: blur(2px);
            }
            60% {
              opacity: 0.8;
            }
            100% { 
              transform: translateX(0) scale(1); 
              opacity: 1;
              filter: blur(0);
            }
          }
          
          @keyframes slideFade {
            0% { 
              opacity: 0; 
              transform: translateY(30px) scale(0.95);
              filter: blur(3px);
            }
            60% {
              opacity: 0.7;
              filter: blur(1px);
            }
            100% { 
              opacity: 1; 
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }
          
          /* Content Fade-In Animations */
          .content-fade-in {
            animation: contentFadeIn 0.6s ease-out forwards;
            opacity: 0;
          }
          
          .content-stagger-1 {
            animation-delay: 0.1s;
          }
          
          .content-stagger-2 {
            animation-delay: 0.2s;
          }
          
          .content-stagger-3 {
            animation-delay: 0.3s;
          }
          
          .content-stagger-4 {
            animation-delay: 0.4s;
          }
          
          .content-stagger-5 {
            animation-delay: 0.5s;
          }
          
          .content-stagger-6 {
            animation-delay: 0.6s;
          }
          
          .list-stagger {
            opacity: 0;
            animation: listStagger 0.5s ease-out forwards;
          }
          
          .card-stagger {
            opacity: 0;
            animation: cardStagger 0.6s ease-out forwards;
          }
          
          @keyframes contentFadeIn {
            0% { 
              opacity: 0; 
              transform: translateY(20px);
            }
            100% { 
              opacity: 1; 
              transform: translateY(0);
            }
          }
          
          @keyframes listStagger {
            0% { 
              opacity: 0; 
              transform: translateX(-20px);
            }
            100% { 
              opacity: 1; 
              transform: translateX(0);
            }
          }
          
          @keyframes cardStagger {
            0% { 
              opacity: 0; 
              transform: translateY(30px) scale(0.95);
            }
            100% { 
              opacity: 1; 
              transform: translateY(0) scale(1);
            }
          }
          
          .thumbnail-nav {
            transition: transform 0.3s ease-out, opacity 0.3s ease-out;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .thumbnail-item {
            transition: all 0.2s ease;
            cursor: pointer;
          }
          
          .thumbnail-item:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
          
          .thumbnail-item.active {
            transform: scale(1.02);
            box-shadow: 0 0 0 2px #276EF1;
          }
          
          .fullscreen-mode {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 9999;
            background: linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(219, 234, 254) 100%);
          }
          
          .dark .fullscreen-mode {
            background: linear-gradient(135deg, rgb(17, 24, 39) 0%, rgb(31, 41, 55) 100%);
          }
          
          .pulse-indicator {
            animation: pulse 2s infinite;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          .slide-progress {
            animation: progressSlide 0.3s ease-out;
          }
          
          @keyframes progressSlide {
            0% { width: 0%; }
            100% { width: var(--progress-width); }
          }
          
          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            .thumbnail-nav {
              width: 100vw;
              height: 50vh;
              top: auto;
              bottom: 0;
              left: 0;
              right: 0;
              border-r: none;
              border-top: 1px solid #e5e7eb;
            }
            
            .mobile-thumbnail-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
              gap: 0.5rem;
              max-height: 40vh;
              overflow-y: auto;
            }
            
            .stat-card-mobile {
              padding: 1rem;
            }
            
            .stat-card-mobile .text-4xl {
              font-size: 2rem;
            }
            
            .chart-container-mobile {
              height: 200px !important;
            }
            
            .mobile-header-compact {
              padding: 0.5rem 0;
            }
            
            .mobile-progress-bar {
              height: 2px;
            }
          }
          
          /* Touch-friendly styles */
          @media (max-width: 768px) {
            .touch-button {
              min-height: 44px;
              min-width: 44px;
              padding: 0.75rem;
            }
            
            .swipe-indicator {
              position: fixed;
              bottom: 20px;
              left: 50%;
              transform: translateX(-50%);
              background: rgba(0, 0, 0, 0.7);
              color: white;
              padding: 0.5rem 1rem;
              border-radius: 20px;
              font-size: 0.75rem;
              z-index: 100;
              animation: fadeInOut 3s ease-in-out;
            }
            
            @keyframes fadeInOut {
              0%, 100% { opacity: 0; }
              50% { opacity: 1; }
            }
          }

          /* Print Styles */
          @media print {
            .no-print {
              display: none !important;
            }
            
            .print-slide {
              page-break-after: always;
              width: 100vw;
              height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 2rem;
            }
            
            .print-slide:last-child {
              page-break-after: avoid;
            }
            
            * {
              -webkit-print-color-adjust: exact;
              color-adjust: exact;
              print-color-adjust: exact;
            }
            
            body {
              background: white !important;
            }
          }
        `}</style>

        {/* Mobile Swipe Indicator */} 
        {showSwipeIndicator && isMobile && (
          <div className="swipe-indicator no-print">
            ← Swipe left/right to navigate slides →
          </div>
        )}

        {/* Thumbnail Navigation Sidebar */} 
        {showThumbnails && (
          <div className={`fixed z-40 thumbnail-nav bg-white/95 dark:bg-gray-900/95 shadow-xl border-gray-200 dark:border-gray-700 overflow-y-auto no-print ${ 
            isMobile 
              ? 'left-0 right-0 bottom-0 h-1/2 border-t' 
              : 'left-0 top-16 bottom-0 w-80 border-r' 
          }`}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="mr-2">📋</span>
                  Slide Navigation
                </h3>
                {isMobile && (
                  <button
                    onClick={() => setShowThumbnails(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                )}
              </div>
              <div className={isMobile ? "mobile-thumbnail-grid" : "space-y-2"}> 
                {tabs.map((tab, index) => {
                  const slideNames = {
                    'agenda-overview': 'Agenda & Overview',
                    'executive-summary': 'Executive Summary',
                    'company-evolution': 'Company Evolution',
                    'service-divisions': 'Service Divisions',
                    'performance-metrics': 'Performance Metrics',
                    'case-study-instacart': 'Case Study: Instacart',
                    'case-study-tesla': 'Case Study: Tesla',
                    'case-study-medical': 'Case Study: Medical',
                    'case-study-bmw': 'Case Study: BMW',
                    'driver-excellence': 'Driver Excellence',
                    'technology-integration': 'Technology Integration',
                    'client-portfolio': 'Client Portfolio',
                    'rapid-deployment': 'Rapid Deployment',
                    'geographic-coverage': 'Geographic Coverage',
                    'partnership-proposal': 'Partnership Proposal',
                    'competitive-advantage': 'Competitive Advantage',
                    'service-integration': 'Service Integration',
                    'roi-projection': 'ROI Projection',
                    'next-steps': 'Next Steps'
                  };
                  
                  return (
                    <div
                      key={tab}
                      onClick={() => goToSlide(tab)}
                      className={`thumbnail-item p-3 rounded-lg border ${ 
                        activeTab === tab 
                          ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700 active' 
                          : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${ 
                          activeTab === tab 
                            ? 'bg-blue-600 text-white dark:text-white' 
                            : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className={`font-medium text-sm ${ 
                            activeTab === tab 
                              ? 'text-blue-700 dark:text-blue-300' 
                              : 'text-gray-700 dark:text-gray-200'
                          }`}>
                            {slideNames[tab as keyof typeof slideNames] || tab}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Fullscreen Presentation Controls */} 
        {isFullscreen && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 dark:bg-gray-900/90 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 dark:border-gray-600/30 no-print">
            <div className="flex items-center space-x-4 text-white dark:text-white dark:text-gray-200">
              <button
                onClick={() => navigateTab('prev')}
                className="p-2 hover:bg-white/20 rounded-full transition-all"
                title="Previous slide"
              >
                ←
              </button>
              
              <div className="text-sm font-medium">
                {tabs.indexOf(activeTab) + 1} / {tabs.length}
              </div>
              
              <button
                onClick={() => navigateTab('next')}
                className="p-2 hover:bg-white/20 rounded-full transition-all"
                title="Next slide"
              >
                →
              </button>
              
              <div className="w-px h-6 bg-white/30"></div>
              
              <button
                onClick={() => setShowThumbnails(!showThumbnails)}
                className={`p-2 rounded-full transition-all ${showThumbnails ? 'bg-blue-500/30' : 'hover:bg-white/20'}`}
                title="Toggle thumbnails"
              >
                ⊞
              </button>
              
              <button
                onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
                className={`p-2 rounded-full transition-all ${showSpeakerNotes ? 'bg-yellow-500/30' : 'hover:bg-white/20'}`}
                title="Toggle speaker notes (N)"
              >
                📝
              </button>
              
              
              <button
                onClick={() => setShowAnalytics(!showAnalytics)}
                className={`p-2 rounded-full transition-all ${showAnalytics ? 'bg-purple-500/30' : 'hover:bg-white/20'}`}
                title="View analytics"
              >
                📊
              </button>
              
              <button
                onClick={toggleFullscreen}
                className="p-2 hover:bg-white/20 rounded-full transition-all"
                title="Exit fullscreen (Esc)"
              >
                ⛶
              </button>
            </div>
          </div>
        )}

        {/* Enhanced Header with Presentation Controls */} 
        <div className={`fixed top-0 left-0 right-0 z-50 bg-black/90 dark:bg-gray-900/95 backdrop-blur-md border-b border-white/20 dark:border-gray-700/30 no-print transition-transform duration-300 ${isFullscreen ? 'hidden' : ''} ${!isHeaderVisible ? '-translate-y-full' : 'translate-y-0'}`}> 
          {/* Navigation buttons at screen edges */}
          <div className="absolute left-0 top-0 bottom-0 flex items-center pl-4">
            <button
              onClick={() => navigateTab('prev')}
              className="p-3 text-white dark:text-white dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-600/70 rounded-lg transition-all backdrop-blur-md bg-black/40 border-2 border-white/30 dark:border-gray-500/50 shadow-lg"
              title="Previous slide (←)"
            >
              ←
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4">
            <button
              onClick={() => navigateTab('next')}
              className="p-3 text-white dark:text-white dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-600/70 rounded-lg transition-all backdrop-blur-md bg-black/40 border-2 border-white/30 dark:border-gray-500/50 shadow-lg"
              title="Next slide (→)"
            >
              →
            </button>
          </div>
          
          <Container>
            <div className="flex justify-between items-center py-3">
              {/* Left Controls */} 
              <div className="flex items-center space-x-3 ml-16">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#276EF1] rounded-lg flex items-center justify-center">
                    <span className="text-white dark:text-white dark:text-white dark:text-white font-bold text-sm">DN</span>
                  </div>
                  <div className="text-white dark:text-white dark:text-gray-50">
                    <div className="text-sm font-bold">Driver Network Inc.</div>
                    <div className="text-xs text-gray-300 dark:text-gray-400">Partnership Proposal</div>
                  </div>
                </div>
              </div>
              
              {/* Center - Slide Progress */} 
              <div className="flex-1 max-w-lg mx-8">
                <div className="text-center mb-2">
                  <div className="flex items-center justify-center space-x-4 text-sm text-white dark:text-white dark:text-gray-200">
                    <span>Slide {tabs.indexOf(activeTab) + 1} of {tabs.length}</span>
                    {presentationStartTime && (
                      <div className="flex items-center space-x-1">
                        <span>⏱</span>
                        <span>{formatTime(slideTimer)}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Progress Bar */} 
                <div className="w-full bg-white/20 dark:bg-gray-700/50 rounded-full h-1.5">
                  <div 
                    className="bg-[#276EF1] h-1.5 rounded-full transition-all duration-500 ease-out slide-progress"
                    style={{ 
                      width: `${((tabs.indexOf(activeTab) + 1) / tabs.length) * 100}%`,
                      '--progress-width': `${((tabs.indexOf(activeTab) + 1) / tabs.length) * 100}%`
                    } as React.CSSProperties}
                  />
                </div>
                
                {/* Slide Indicators */} 
                <div className="flex justify-center space-x-1 mt-2">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab}
                      onClick={() => goToSlide(tab)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 hover:scale-150 ${ 
                        activeTab === tab 
                          ? 'bg-[#276EF1] w-4 pulse-indicator' 
                          : index <= tabs.indexOf(activeTab)
                            ? 'bg-white/60 dark:bg-gray-400' 
                            : 'bg-white/30 dark:bg-gray-600'
                      }`}
                      title={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Right Controls */} 
              <div className="flex items-center space-x-2 mr-16">
                <button
                  onClick={() => setShowThumbnails(!showThumbnails)}
                  className={`p-2 rounded transition-all ${showThumbnails 
                    ? 'bg-blue-500/20 text-blue-300' 
                    : 'text-white dark:text-white dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-600/50'}`}
                  title="Toggle thumbnails (T)"
                >
                  ⊞
                </button>
                
                <button
                  onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
                  className={`p-2 rounded transition-all ${showSpeakerNotes 
                    ? 'bg-yellow-500/20 text-yellow-300' 
                    : 'text-white dark:text-white dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-600/50'}`}
                  title="Toggle speaker notes (N)"
                >
                  📝
                </button>
                
                
                <button
                  onClick={() => setShowAnalytics(!showAnalytics)}
                  className={`p-2 rounded transition-all ${showAnalytics 
                    ? 'bg-purple-500/20 text-purple-300' 
                    : 'text-white dark:text-white dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-600/50'}`}
                  title="View analytics"
                >
                  📊
                </button>
                
                <button
                  onClick={toggleFullscreen}
                  className={`p-2 rounded transition-all ${isFullscreen 
                    ? 'bg-green-500/20 text-green-300' 
                    : 'text-white dark:text-white dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-600/50'}`}
                  title="Toggle fullscreen (F11)"
                >
                  ⛶
                </button>
                
                {activeTab !== 'agenda-overview' && (
                  <button
                    onClick={() => goToSlide('agenda-overview')}
                    className="px-3 py-1.5 text-xs bg-blue-600/20 dark:bg-blue-700/30 text-blue-300 dark:text-blue-200 rounded-lg font-semibold hover:bg-blue-600/30 dark:hover:bg-blue-700/40 transition-all flex items-center border border-blue-500/30 dark:border-blue-600/40"
                    title="Back to agenda overview"
                  >
                    🏠 Overview
                  </button>
                )}
                
                <div className="relative group">
                  <button
                    className="px-3 py-1.5 text-xs bg-gray-600 dark:bg-gray-700 text-white dark:text-white rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition-all flex items-center"
                    title="Export options"
                  >
                    {isExporting ? '⏳' : '📤'} Export
                  </button>
                  <div className="absolute right-0 top-full mt-1 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="p-1">
                      <button
                        onClick={printPresentation}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded flex items-center"
                        disabled={isExporting}
                      >
                        🖨️ Print All Slides
                      </button>
                      <button
                        onClick={exportSingleSlideToPDF}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded flex items-center"
                        disabled={isExporting}
                      >
                        📄 PDF - Current Slide
                      </button>
                      <button
                        onClick={exportAllSlidesToPDF}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded flex items-center"
                        disabled={isExporting}
                      >
                        📑 PDF - Full Presentation
                      </button>
                      <button
                        onClick={exportToImages}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded flex items-center"
                        disabled={isExporting}
                      >
                        🖼️ Image - Current Slide
                      </button>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={startPresentation}
                  className="px-3 py-1.5 text-xs bg-gradient-to-r from-[#276EF1] to-blue-600 text-white dark:text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  title="Start presentation"
                >
                  ▶ Start
                </button>
              </div>
            </div>
          </Container>
        </div>


        {/* Speaker Notes Panel */} 
        {showSpeakerNotes && (
          <div className="fixed bottom-0 left-0 right-0 z-30 bg-yellow-50 dark:bg-yellow-900/20 border-t border-yellow-200 dark:border-yellow-700 max-h-40 overflow-y-auto no-print">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 flex items-center">
                  <span className="mr-2">📝</span>
                  Speaker Notes - Slide {tabs.indexOf(activeTab) + 1}
                </h3>
                <button
                  onClick={() => setShowSpeakerNotes(false)}
                  className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-200 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-1">
                {(speakerNotes[activeTab] || ['No speaker notes for this slide']).map((note, index) => (
                  <div key={index} className="flex items-start space-x-2 text-sm text-yellow-800 dark:text-yellow-200">
                    <span className="w-4 h-4 rounded-full bg-yellow-200 dark:bg-yellow-700 flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content with Slide Transitions */} 
        <main 
          className={`presentation-slide ${isFullscreen ? 'pt-8 pb-16' : 'pt-20 pb-8'} ${showSpeakerNotes && !isMobile ? 'pb-48' : showSpeakerNotes ? 'pb-32' : ''} ${showThumbnails && isMobile ? 'pb-64' : ''} slide-container ${slideTransition} ${showThumbnails && !isFullscreen && !isMobile ? 'ml-80' : ''} transition-all duration-300`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Container>
            <SlideRenderer
              activeSlideId={activeTab}
              slideTransition={slideTransition}
              onPrevious={() => navigateTab('prev')}
              onNext={() => navigateTab('next')}
              hasPrevious={tabs.indexOf(activeTab) > 0}
              hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
              currentSlide={tabs.indexOf(activeTab) + 1}
              totalSlides={tabs.length}
            >
              {activeTab === 'agenda-overview' && <AgendaOverview 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'executive-summary' && <ExecutiveSummary 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'company-evolution' && <CompanyEvolution 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'service-divisions' && <ServiceDivisions 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'performance-metrics' && <PerformanceMetrics 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'case-study-instacart' && <CaseStudyInstacart 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'case-study-tesla' && <CaseStudyTesla 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'case-study-medical' && <CaseStudyMedical 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'case-study-bmw' && <CaseStudyBmw 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'driver-excellence' && <DriverExcellence 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'technology-integration' && <TechnologyIntegration 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'client-portfolio' && <ClientPortfolio 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'rapid-deployment' && <RapidDeployment 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'geographic-coverage' && <GeographicCoverage 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'partnership-proposal' && <PartnershipProposal 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'competitive-advantage' && <CompetitiveAdvantage 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'service-integration' && <ServiceIntegration 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'roi-projection' && <RoiProjection 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
              {activeTab === 'next-steps' && <NextSteps 
                onPrevious={() => navigateTab('prev')}
                onNext={() => navigateTab('next')}
                hasPrevious={tabs.indexOf(activeTab) > 0}
                hasNext={tabs.indexOf(activeTab) < tabs.length - 1}
                currentSlide={tabs.indexOf(activeTab) + 1}
                totalSlides={tabs.length}
              />}
            </SlideRenderer>
          </Container>
        </main>

        {/* Slide Progress Dots */}
        {!isFullscreen && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 no-print">
            <div className="flex items-center space-x-3 bg-black/80 dark:bg-gray-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 dark:border-gray-600/30 shadow-lg">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => goToSlide(tab)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 ${ 
                    activeTab === tab 
                      ? 'bg-[#276EF1] w-4 scale-125' 
                      : index <= tabs.indexOf(activeTab)
                        ? 'bg-white/60 dark:bg-gray-400/60 hover:bg-white/80 dark:hover:bg-gray-300/80'
                        : 'bg-white/30 dark:bg-gray-600/60 hover:bg-white/50 dark:hover:bg-gray-500/60'
                  }`}
                  title={`Go to slide ${index + 1}`}
                />
              ))}
              <div className="ml-3 text-white/80 dark:text-gray-300 text-xs font-medium">
                {tabs.indexOf(activeTab) + 1} / {tabs.length}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Panel */} 
        {showAnalytics && (
          <div className="fixed top-0 right-0 bottom-0 z-50 bg-white dark:bg-gray-900 shadow-2xl w-96 p-6 border-l border-gray-200 dark:border-gray-700 overflow-y-auto no-print">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                <span className="mr-2">📊</span>
                Presentation Analytics
              </h3>
              <button
                onClick={() => setShowAnalytics(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Session Summary</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500 dark:text-gray-400">Duration</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{formatTime(generateAnalyticsReport().sessionSummary.sessionDuration)}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 dark:text-gray-400">Slide Views</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{generateAnalyticsReport().sessionSummary.totalSlideViews}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 dark:text-gray-400">Navigations</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{analytics.navigationActions}</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Slide Engagement</h4>
                <div className="space-y-2">
                  {generateAnalyticsReport().slideAnalytics.map(slide => (
                    <div key={slide.slideId} className="text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-800 dark:text-gray-200">{slide.slideId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                        <span className="text-gray-500 dark:text-gray-400">{slide.views} view{slide.views !== 1 ? 's' : ''}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                        <div 
                          className="bg-blue-500 h-1.5 rounded-full"
                          style={{ width: `${(slide.timeSpent / Math.max(...Object.values(analytics.timeOnSlide))) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Navigation - Spread Apart */}
        {!isFullscreen && (
          <div className="fixed bottom-6 left-0 right-0 z-50 px-6">
            <div className="flex items-center justify-between">
              {/* Previous Button */}
              <button
                onClick={() => navigateTab('prev')}
                className={`px-6 py-3 rounded-lg shadow-lg border ${
                  tabs.indexOf(activeTab) > 0
                    ? 'bg-blue-500 text-white hover:bg-blue-600 border-blue-400' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300'
                }`}
              >
                ← Previous
              </button>

              {/* Slide Counter */}
              <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg border text-sm font-semibold text-gray-700 dark:text-gray-200">
                {tabs.indexOf(activeTab) + 1} / {tabs.length}
              </div>

              {/* Next Button */}
              <button
                onClick={() => navigateTab('next')}
                className={`px-6 py-3 rounded-lg shadow-lg border ${
                  tabs.indexOf(activeTab) < tabs.length - 1
                    ? 'bg-blue-500 text-white hover:bg-blue-600 border-blue-400' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300'
                }`}
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
