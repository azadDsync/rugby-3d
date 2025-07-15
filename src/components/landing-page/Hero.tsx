"use client"
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  MapPin, 
  Trophy, 
  Users, 
  Star, 
  Clock, 
  Twitter, 
  Instagram, 
  Facebook 
} from 'lucide-react';

interface CountdownTimerProps {
  targetDate: string;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

interface Stat {
  label: string;
  value: string;
}

interface TimelineItem {
  year: string;
  event: string;
  icon: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center space-x-8 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-6 min-w-[100px]">
          <div className="text-4xl font-bold text-emerald-400 mb-2">{value}</div>
          <div className="text-sm text-slate-300 uppercase tracking-wider">{unit}</div>
        </div>
      ))}
    </div>
  );
};

const RugbyWorldChampionship: React.FC = () => {
  const eventDate = "2024-08-15T19:00:00";

  const testimonials: Testimonial[] = [
    {
      name: "James O'Connor",
      role: "Former International Player",
      quote: "This championship embodies the true spirit of rugby. Every tackle, every try is a testament to the heart of the game.",
      rating: 5
    },
    {
      name: "Margaret Thompson",
      role: "Rugby Fan Since '85",
      quote: "39 years following rugby, and this event brought back the raw emotion I felt watching my first match.",
      rating: 5
    },
    {
      name: "Coach David Williams",
      role: "Club Coach",
      quote: "The intensity here is unmatched. This is rugby at its finest - brotherhood, courage, and pure passion.",
      rating: 5
    }
  ];

  const stats: Stat[] = [
    { label: "Teams Competing", value: "24" },
    { label: "Days of Action", value: "7" },
    { label: "Expected Fans", value: "80K+" },
    { label: "Prize Pool", value: "$3M" }
  ];

  const timeline: TimelineItem[] = [
    { year: "1823", event: "Rugby born at Rugby School, England", icon: "🏉" },
    { year: "1871", event: "First international rugby match played", icon: "🏆" },
    { year: "1987", event: "First Rugby World Cup held", icon: "🌍" },
    { year: "2024", event: "Rugby World Championship begins", icon: "🎯" }
  ];

  return (
    <div className="font-oswald min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section 
        className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(/hero-rugby-stadium.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 via-slate-900/60 to-slate-900/90"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl">
                RUGBY WORLD
              </span>
              <br />
              <span className="text-white drop-shadow-lg">
                CHAMPIONSHIP
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Where warriors are forged and legends are made. Experience the ultimate showcase of rugby&apos;s finest with the most electrifying tournament of the year.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white border-0 px-8 py-6 text-lg min-w-[200px] transition-all duration-300 transform hover:scale-105">
              <Trophy className="mr-2 h-5 w-5" />
              Join the Battle
            </Button>
            <Button className="bg-slate-800 hover:bg-slate-700 text-white border border-emerald-500/50 hover:border-emerald-400 px-8 py-6 text-lg min-w-[200px] transition-all duration-300">
              <Calendar className="mr-2 h-5 w-5" />
              Get Tickets
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-800/40 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-6 hover:bg-slate-800/60 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-300 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="text-center">
            <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Middle Section - Rugby Story & Event Highlights */}
      <section className="middle-section py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              THE <span className="text-emerald-400">LEGACY</span> CONTINUES
            </h2>
            <div className="w-24 h-1 bg-teal-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From school fields to grand stadiums, rugby has embodied courage, honor, and brotherhood for over 200 years. Now, it&apos;s time to write the next chapter.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <Card key={index} className="bg-slate-800/60 backdrop-blur border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group hover:transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="text-2xl font-bold text-emerald-400 mb-2">
                      {item.year}
                    </div>
                    <p className="text-slate-300 text-sm">
                      {item.event}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Split Layout with Vintage Elements */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl h-96 bg-cover bg-center group"
              style={{ backgroundImage: `url(/vintage-rugby.jpg)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 transform group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-3xl font-bold text-white mb-2">
                  TRADITION MEETS POWER
                </h3>
                <p className="text-slate-200">
                  Every scrum tells a story. Every tackle echoes courage.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  Why This <span className="text-teal-400">Championship</span> Matters
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  This isn&apos;t just another tournament. It&apos;s a celebration of everything that makes rugby the sport of warriors. From rising stars to seasoned veterans, every moment defines greatness.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/60 border border-emerald-500/30 rounded-lg p-6 hover:bg-slate-800/80 hover:border-emerald-400/50 transition-all duration-300 group">
                  <Users className="text-emerald-400 w-8 h-8 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xl font-bold text-white mb-1">Brotherhood</div>
                  <p className="text-sm text-slate-400">Uniting rugby nations</p>
                </div>
                <div className="bg-slate-800/60 border border-emerald-500/30 rounded-lg p-6 hover:bg-slate-800/80 hover:border-emerald-400/50 transition-all duration-300 group">
                  <Trophy className="text-teal-400 w-8 h-8 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xl font-bold text-white mb-1">Glory</div>
                  <p className="text-sm text-slate-400">Showcasing the elite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Section - Emotional Appeal & Final CTA */}
      <section className="end-section py-20 bg-slate-900 relative overflow-hidden">
        <div 
          className="absolute right-0 top-0 w-1/3 h-full opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(/player-rugby-silhouette.jpg)` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-emerald-400">YOUR MOMENT</span>
              <br />
              <span className="text-white">IS NOW</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Don&apos;t just watch history—be part of it. Feel the thunder of the scrum, hear the roar of the crowd, 
              and witness warriors battle for glory.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-white mb-8">
              KICK-OFF IN:
            </h3>
            <CountdownTimer targetDate={eventDate} />
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              WHAT THEY&apos;RE SAYING
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-slate-800/60 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-4 italic leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div>
                      <div className="font-bold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA & Social */}
          <div className="text-center">
            <div className="mb-8">
              <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white border-0 px-8 py-6 text-lg mr-4 mb-4 transition-all duration-300 transform hover:scale-105">
                <Clock className="mr-2 h-5 w-5" />
                Secure Your Spot
              </Button>
              <Button className="bg-slate-800 hover:bg-slate-700 text-white border border-emerald-500/50 hover:border-emerald-400 px-8 py-6 text-lg mb-4 transition-all duration-300">
                <MapPin className="mr-2 h-5 w-5" />
                View Venue
              </Button>
            </div>

            <div className="flex justify-center space-x-8 mb-8">
              <a href="#" className="text-emerald-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110">
                <Twitter className="w-8 h-8" />
              </a>
              <a href="#" className="text-emerald-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="text-emerald-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110">
                <Facebook className="w-8 h-8" />
              </a>
            </div>

            <p className="text-slate-400">
              Follow us <span className="text-emerald-400 font-semibold">@RugbyWorldChampionship</span> for live updates
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RugbyWorldChampionship;