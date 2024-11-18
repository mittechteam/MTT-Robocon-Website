'use client'

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Headphones } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function ContactForm() {
  const [interest, setInterest] = useState("");
  const { toast } = useToast();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const name = (target.elements.namedItem("name") as HTMLInputElement).value;
    const email = (target.elements.namedItem("email") as HTMLInputElement).value;
    const prn = (target.elements.namedItem("prn") as HTMLInputElement).value;
    const branch = (target.elements.namedItem("branch") as HTMLInputElement).value;
    const message = (target.elements.namedItem("message") as HTMLInputElement).value;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
          name,
          email,
          prn,
          branch,
          interest,
          message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Form submitted successfully:", result);
        toast({
          title: "Success",
          description: "Your message has been sent successfully.",
          variant: "default",
        });
        target.reset(); // Reset the form
        setInterest(""); // Reset the interest state
      } else {
        console.error("Form submission failed:", result);
        toast({
          title: "Error",
          description: "Failed to send your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto px-4 py-12 text-white">
      <div className="space-y-16">
        <div>
          <h2 className="text-4xl font-bold tracking-tight">Message Us</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Our dedicated team is always available to answer your questions and assist with your needs.
          </p>
        </div>
        <div className="flex items-start space-x-6">
          <Headphones className="w-12 h-12 text-red-500" />
          <div>
            <h3 className="text-xl font-semibold">Support</h3>
            <p className="text-muted-foreground">
              Our team is here to assist you with any inquiries or issues.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <Input id="name" name="name" placeholder="First Last" className="text-black" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@company.com"
              className="text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="prn" className="block text-sm font-medium mb-2">
              PRN
            </label>
            <Input id="prn" name="prn" placeholder="Your PRN" className="text-black" required />
          </div>
          <div>
            <label htmlFor="branch" className="block text-sm font-medium mb-2">
              Branch
            </label>
            <Input id="branch" name="branch" placeholder="Your Branch" className="text-black" required />
          </div>
          <div>
            <label htmlFor="requirement" className="block text-sm font-medium mb-2">
              Select your Interest
            </label>
            <Select
              onValueChange={(value) => setInterest(value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="What do you need help with?" />
              </SelectTrigger>
              <SelectContent className="text-black">
                <SelectItem value="control">Control</SelectItem>
                <SelectItem value="circuits">Circuits</SelectItem>
                <SelectItem value="dynamics">Dynamics</SelectItem>
                <SelectItem value="non-tech">Non-Tech</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Input
              id="message"
              name="message"
              placeholder="Your message here..."
              className="text-black"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-red-700 hover:bg-red-500">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}