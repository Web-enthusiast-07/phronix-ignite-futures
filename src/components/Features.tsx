import { motion } from "framer-motion";
import { Video, Users, Briefcase, Zap, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live Classes",
    description: "Interactive sessions with industry experts. Ask questions in real-time and learn collaboratively.",
    gradient: "from-primary to-[hsl(270,70%,70%)]",
  },
  {
    icon: Users,
    title: "1:1 Mentorship",
    description: "Personal guidance from experienced developers who've built products at top tech companies.",
    gradient: "from-[hsl(270,70%,70%)] to-accent",
  },
  {
    icon: Briefcase,
    title: "Project-Based Learning",
    description: "Build real-world projects that become your portfolio. Ship code from day one.",
    gradient: "from-accent to-[hsl(45,100%,60%)]",
  },
  {
    icon: Zap,
    title: "AI-Powered Paths",
    description: "Personalized learning journeys adapted to your pace, goals, and preferred learning style.",
    gradient: "from-primary to-[hsl(180,70%,50%)]",
  },
  {
    icon: Shield,
    title: "Career Support",
    description: "Resume reviews, mock interviews, and direct connections to our hiring partner network.",
    gradient: "from-[hsl(180,70%,50%)] to-primary",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Join thousands of learners worldwide. Collaborate, network, and grow together.",
    gradient: "from-primary to-[hsl(270,70%,70%)]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

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
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive platform combines cutting-edge technology with 
            personalized mentorship to accelerate your learning journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="h-full p-6 lg:p-8 rounded-3xl glass border border-border hover:border-primary/50 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
