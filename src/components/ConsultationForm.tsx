import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ConsultationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted!",
      description: "Our expert will contact you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "" });
    setIsLoading(false);
  };

  return (
    <div className="bg-card rounded-2xl p-6 lg:p-8 card-shadow w-full max-w-md animate-slide-in-up">
      <div className="text-center mb-6">
        <h3 className="font-display text-2xl font-bold text-card-foreground mb-2">
          Get Expert Consultation
        </h3>
        <p className="text-muted-foreground">
          Fill the form below and our team will reach out
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="pl-10 h-12 bg-secondary border-0"
            required
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="pl-10 h-12 bg-secondary border-0"
            required
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="pl-10 h-12 bg-secondary border-0"
            required
          />
        </div>

        <Button 
          type="submit" 
          variant="accent" 
          size="lg" 
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "REQUEST A CALLBACK"}
        </Button>
      </form>

      <p className="text-center text-xs text-muted-foreground mt-4">
        By submitting, you agree to our Terms of Service and Privacy Policy
      </p>
    </div>
  );
};

export default ConsultationForm;
