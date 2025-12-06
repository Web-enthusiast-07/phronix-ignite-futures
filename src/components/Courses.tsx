import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "React Mastery",
    description: "Build modern web apps with React 18, hooks, and advanced patterns.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=240&fit=crop",
    duration: "12 weeks",
    students: "8.5k",
    rating: 4.9,
    level: "Intermediate",
    color: "from-[hsl(200,90%,50%)] to-[hsl(220,80%,60%)]",
  },
  {
    title: "Python & AI",
    description: "From Python basics to building AI/ML models with TensorFlow.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=240&fit=crop",
    duration: "16 weeks",
    students: "12.3k",
    rating: 4.8,
    level: "Beginner",
    color: "from-[hsl(45,100%,50%)] to-[hsl(25,95%,55%)]",
  },
  {
    title: "Full-Stack Dev",
    description: "Node.js, databases, APIs, and deployment. Become a complete developer.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=240&fit=crop",
    duration: "20 weeks",
    students: "6.2k",
    rating: 4.9,
    level: "Intermediate",
    color: "from-[hsl(270,70%,60%)] to-[hsl(300,70%,50%)]",
  },
  {
    title: "AI Engineering",
    description: "LLMs, RAG, fine-tuning, and building production AI applications.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop",
    duration: "14 weeks",
    students: "4.1k",
    rating: 4.9,
    level: "Advanced",
    color: "from-[hsl(160,80%,45%)] to-[hsl(180,70%,50%)]",
  },
];

export const Courses = () => {
  return (
    <section id="courses" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Industry-aligned curriculum designed by engineers from top tech companies.
            </p>
          </div>
          <Button 
            variant="ghost" 
            className="mt-4 lg:mt-0 text-primary hover:text-primary/80 group"
          >
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Courses Scroll Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex-shrink-0 w-[320px] lg:w-[360px] snap-start"
              >
                <div className="h-full rounded-3xl glass border border-border hover:border-primary/50 overflow-hidden transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    
                    {/* Level Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${course.color} text-white`}>
                      {course.level}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-accent fill-accent" />
                        {course.rating}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold rounded-xl shadow-lg shadow-accent/20">
                      Join Course
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Fade */}
          <div className="absolute right-0 top-0 bottom-4 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none hidden lg:block" />
        </div>
      </div>
    </section>
  );
};
