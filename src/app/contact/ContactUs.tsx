"use client";
import { useState } from "react";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactUs() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      event.currentTarget.reset();
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container flex mx-auto px-4 py-12 ">
      <div className="max-w-2xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        <Card className="bg-transparent">
          <CardContent className="p-6">
            <MessageCircle className="w-10 h-10 text-primary mb-4 text-white" />
            <h2 className="font-semibold mb-2 text-white">Chat to sales</h2>
            <p className="text-sm text-muted-foreground mb-4 text-white">
              Speak to our friendly team.
            </p>
            <Button variant="outline" size="sm" className="bg-red-500 hover:bg-red-800 border-none text-white">
              Chat to sales
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-transparent">
          <CardContent className="p-6">
            <MessageCircle className="w-10 h-10 text-primary mb-4 text-white" />
            <h2 className="font-semibold mb-2 text-white">Chat to support</h2>
            <p className="text-sm text-muted-foreground mb-4 text-white">
              We&apos;re here to help.
            </p>
            <Button variant="outline" size="sm" className="bg-red-500 hover:bg-red-800 border-none text-white">
              Chat to support
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-transparent">
          <CardContent className="p-6">
            <MapPin className="w-10 h-10 text-primary mb-4 text-white" />
            <h2 className="font-semibold mb-2 text-white">Visit us</h2>
            <p className="text-sm text-muted-foreground mb-4 text-white">
              Visit our office HQ.
            </p>
            <Button variant="outline" size="sm" className="bg-red-500 hover:bg-red-800 border-none text-white">
              Get directions
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-transparent">
          <CardContent className="p-6">
            <Phone className="w-10 h-10 text-primary mb-4 text-white" />
            <h2 className="font-semibold mb-2 text-white">Call us</h2>
            <p className="text-sm text-muted-foreground mb-4 text-white">
              Mon-Fri from 8am to 5pm.
            </p>
            <Button variant="outline" size="sm" className="bg-red-500 hover:bg-red-800 border-none text-white">
              Call our team
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Message us</h2>
          <p className="text-muted-foreground text-white">
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2 text-white">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" name="firstName" className="text-black" required />
            </div>
            <div className="space-y-2 text-white">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" name="lastName" className="text-black" required />
            </div>
          </div>

          <div className="space-y-2 text-white">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" className="text-black" required />
          </div>

          <div className="space-y-2 text-white">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Leave us a message..."
              className="min-h-[100px] text-black"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-red-500 hover:bg-red-800" disabled={loading}>
            {loading ? "Sending..." : "Send message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
