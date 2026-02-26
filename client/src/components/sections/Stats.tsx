import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 3, label: "Years Experience" },
  { value: 5, suffix: "+", label: "Production Systems" },
  { prefix: "$", value: 2, suffix: "M+", label: "Revenue Impact" },
  { value: 99.9, suffix: "%", label: "System Uptime", decimals: 1 },
];

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-12 border-y border-[#222222] bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-[#222222]">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center text-center ${index === 0 || index === 2 ? 'border-none' : ''} md:border-l`}
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2 flex items-center">
                {stat.prefix}
                {inView ? (
                  <CountUp 
                    end={stat.value} 
                    decimals={stat.decimals || 0} 
                    duration={2.5} 
                    useEasing 
                  />
                ) : "0"}
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
