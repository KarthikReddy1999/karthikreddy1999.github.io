import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { contactFormSchema, type ContactFormData } from "@/lib/contact";

export default function Contact() {
  const { mutate, isPending, isSuccess } = useCreateContactMessage();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    mutate(data, {
      onSuccess: () => reset()
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-[#080808] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-primary font-mono text-xl font-normal">04.</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold">What's Next?</h2>
              </div>
              <h3 className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                I'm currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a href="https://github.com/KarthikReddy1999" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all glow-hover">
                <SiGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/karthikreddyereddy/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all glow-hover">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/Karthi_926" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all glow-hover">
                <SiX className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden"
          >
            {/* Terminal Window Header */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-[#1A1A1A] border-b border-[#333] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-secondary/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <div className="mx-auto text-xs text-muted-foreground font-mono">send_message.sh</div>
            </div>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-10 flex flex-col items-center justify-center py-16 text-center"
              >
                <CheckCircle2 className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">Email Draft Ready</h3>
                <p className="text-muted-foreground font-mono">Your mail app should have opened.</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-8 px-6 py-2 border border-[#333] rounded-md text-sm hover:text-primary hover:border-primary transition-colors font-mono"
                >
                  Return
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mt-10">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-xs font-mono text-primary/80 ml-1">name</label>
                    <input 
                      {...register("name")}
                      className={`w-full bg-[#111111] border ${errors.name ? 'border-destructive' : 'border-[#333]'} rounded-lg px-4 py-3 text-foreground placeholder:text-[#555] focus:outline-none focus:border-primary transition-colors font-mono`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="absolute -bottom-5 left-1 text-[10px] text-destructive font-mono">{errors.name.message}</span>}
                  </div>
                  
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-xs font-mono text-primary/80 ml-1">email</label>
                    <input 
                      {...register("email")}
                      className={`w-full bg-[#111111] border ${errors.email ? 'border-destructive' : 'border-[#333]'} rounded-lg px-4 py-3 text-foreground placeholder:text-[#555] focus:outline-none focus:border-primary transition-colors font-mono`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="absolute -bottom-5 left-1 text-[10px] text-destructive font-mono">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs font-mono text-primary/80 ml-1">subject</label>
                  <input 
                    {...register("subject")}
                    className={`w-full bg-[#111111] border ${errors.subject ? 'border-destructive' : 'border-[#333]'} rounded-lg px-4 py-3 text-foreground placeholder:text-[#555] focus:outline-none focus:border-primary transition-colors font-mono`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <span className="absolute -bottom-5 left-1 text-[10px] text-destructive font-mono">{errors.subject.message}</span>}
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs font-mono text-primary/80 ml-1">message</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className={`w-full bg-[#111111] border ${errors.message ? 'border-destructive' : 'border-[#333]'} rounded-lg px-4 py-3 text-foreground placeholder:text-[#555] focus:outline-none focus:border-primary transition-colors font-mono resize-none`}
                    placeholder="Hello Karthik, I'd like to talk about..."
                  />
                  {errors.message && <span className="absolute -bottom-5 left-1 text-[10px] text-destructive font-mono">{errors.message.message}</span>}
                </div>

                <button 
                  type="submit"
                  disabled={isPending}
                  className="mt-4 w-full bg-primary hover:bg-primary/90 text-background font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="font-mono">Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span className="font-mono">Execute ./send</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-24 pb-8 text-center text-muted-foreground/50 font-mono text-sm">
        <p>Built with React & Tailwind CSS.</p>
        <p className="mt-1">© {new Date().getFullYear()} Karthik Reddy. All rights reserved.</p>
      </div>
    </section>
  );
}
