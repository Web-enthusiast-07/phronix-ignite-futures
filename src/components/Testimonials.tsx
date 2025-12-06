import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer @ Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    quote: "Phronix transformed my career. The mentorship and project-based approach helped me land my dream job at Google within 6 months.",
  },
  {
    name: "Marcus Johnson",
    role: "Full-Stack Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote: "The 1:1 mentorship was a game-changer. My mentor helped me navigate complex topics and build a portfolio that stands out.",
  },
  {
    name: "Emily Rodriguez",
    role: "AI Engineer @ OpenAI",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote: "The AI course content is incredibly up-to-date. I went from zero to building production ML systems in just 4 months.",
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "Phronix gave me the technical skills to build my own startup. The community support and networking opportunities are invaluable.",
  },
  {
    name: "Lisa Wang",
    role: "Senior Developer @ Meta",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    quote: "The curriculum is perfectly aligned with industry needs. Every project I built during the course is now in my professional portfolio.",
  },
  {
    name: "Alex Thompson",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    quote: "Best investment I've made in my career. The live sessions and real-time feedback accelerated my learning exponentially.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our community of successful developers who've transformed their careers.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex gap-6 overflow-hidden">
            <motion.div
              className="flex gap-6 animate-marquee"
              style={{ minWidth: "max-content" }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[350px] lg:w-[400px] flex-shrink-0"
                >
                  <div className="h-full p-6 lg:p-8 rounded-3xl glass border border-border hover:border-primary/30 transition-all duration-300">
                    {/* Quote Icon */}
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />

                    {/* Quote */}
                    <p className="text-foreground leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                      />
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
