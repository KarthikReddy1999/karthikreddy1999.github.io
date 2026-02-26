import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@/lib/contact";

const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL ?? "your-email@example.com";

function buildMailtoUrl(data: ContactFormData): string {
  const subject = encodeURIComponent(`[Portfolio] ${data.subject}`);
  const body = encodeURIComponent(
    [
      "Hi Karthik,",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export function useCreateContactMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const validated = contactFormSchema.parse(data);
      if (CONTACT_EMAIL === "your-email@example.com") {
        throw new Error(
          "Set VITE_CONTACT_EMAIL to your email so the contact form can open the correct recipient.",
        );
      }

      const mailtoUrl = buildMailtoUrl(validated);
      window.location.href = mailtoUrl;

      return validated;
    },
    onSuccess: () => {
      toast({
        title: "Email Draft Opened",
        description: "Your mail app should open with a prefilled draft.",
        className: "bg-[#111111] border-primary/30 text-primary",
      });
    },
    onError: (error) => {
      toast({
        title: "Transmission Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred.",
        variant: "destructive",
      });
    }
  });
}
