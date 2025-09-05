import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "albaderinc@outlook.com",
      color: "primary",
    },
    {
      icon: "fas fa-phone",
      title: "Call",
      value: "Ready to Connect",
      color: "secondary",
      action: () => window.location.href = 'tel:03284175897'
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Lahore, Punjab, Pakistan",
      color: "accent",
    },
  ];

  const socialLinks = [
    { icon: "fab fa-linkedin", color: "primary", href: "#" },
    { icon: "fab fa-twitter", color: "secondary", href: "#" },
    { icon: "fab fa-github", color: "accent", href: "#" },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6" data-testid="contact-title">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Let's discuss how we can work together 
              to create innovative solutions that drive your business forward.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="space-y-8" data-testid="contact-info">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-6 glassmorphism p-6 rounded-lg hover-scale ${info.action ? 'cursor-pointer' : ''}`} 
                  data-testid={`contact-info-${index}`}
                  onClick={info.action}
                >
                  <div className={`bg-${info.color}/20 p-4 rounded-full`}>
                    <i className={`${info.icon} text-${info.color} text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
              
              <div className="flex space-x-4" data-testid="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className={`bg-${social.color}/20 hover:bg-${social.color}/30 p-4 rounded-full transition-colors`}
                    data-testid={`social-link-${index}`}
                  >
                    <i className={`${social.icon} text-${social.color} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="glassmorphism p-8 rounded-lg space-y-6"
                data-testid="contact-form"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-input border-border"
                            placeholder="John"
                            data-testid="input-firstName"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-input border-border"
                            placeholder="Doe"
                            data-testid="input-lastName"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="bg-input border-border"
                          placeholder="john@example.com"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-input border-border"
                          placeholder="Project Discussion"
                          data-testid="input-subject"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={5}
                          className="bg-input border-border resize-none"
                          placeholder="Tell me about your project..."
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground py-4 hover-scale glow-effect"
                  disabled={contactMutation.isPending}
                  data-testid="submit-contact"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
