import { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BookingFormProps {
  apartmentTitle: string;
  apartmentSlug: string;
}

interface BookingFormData {
  name: string;
  email: string;
  phone?: string;
  checkIn: string;
  checkOut: string;
  message?: string;
}

export function BookingForm({ apartmentTitle, apartmentSlug }: BookingFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<BookingFormData>({
    defaultValues: {
      checkIn: format(new Date(), "yyyy-MM-dd"),
      checkOut: format(new Date(Date.now() + 86400000), "yyyy-MM-dd"),
    },
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data: BookingFormData) => {
    try {
      setError("");
      const response = await fetch("/api/booking-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          apartmentTitle,
          apartmentSlug,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry");
      }

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send inquiry. Please try again or contact us directly.");
      console.error(err);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
        <h3 className="text-gold font-semibold mb-2">✓ Inquiry Sent Successfully!</h3>
        <p className="text-sm text-muted-foreground">
          We've received your booking inquiry. We'll review your dates and contact you soon to confirm availability.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-secondary/40 rounded-2xl p-6 space-y-4">
      <h3 className="text-xs text-gold uppercase tracking-[0.2em] mb-4">Book or Inquire</h3>

      <div>
        <Label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
          Full Name *
        </Label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register("name", { required: "Name is required" })}
          className="rounded-lg"
        />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email", { 
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
          })}
          className="rounded-lg"
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="phone" className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
          Phone (Optional)
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+234 123 456 7890"
          {...register("phone")}
          className="rounded-lg"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="checkIn" className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
            Check-in Date *
          </Label>
          <Input
            id="checkIn"
            type="date"
            {...register("checkIn", { required: "Check-in date is required" })}
            className="rounded-lg"
          />
          {errors.checkIn && <p className="text-xs text-red-500 mt-1">{errors.checkIn.message}</p>}
        </div>

        <div>
          <Label htmlFor="checkOut" className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
            Check-out Date *
          </Label>
          <Input
            id="checkOut"
            type="date"
            {...register("checkOut", { required: "Check-out date is required" })}
            className="rounded-lg"
          />
          {errors.checkOut && <p className="text-xs text-red-500 mt-1">{errors.checkOut.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
          Message (Optional)
        </Label>
        <textarea
          id="message"
          placeholder="Any special requests or questions..."
          {...register("message")}
          rows={3}
          className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full shadow-gold hover:shadow-elegant hover:scale-[1.02] transition-all duration-300 text-xs uppercase tracking-[0.22em] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Calendar className="w-4 h-4" />
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
