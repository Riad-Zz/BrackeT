import React, { useState } from "react";
import {
    Mail,
    Phone,
    Clock,
    Copy,
    Check,
    Send,
    CheckCircle2,
    MessageSquare,
    ExternalLink,
    Shield,
    Sparkles,
} from "lucide-react";
import {
    FaFacebook,
    FaInstagramSquare,
    FaLinkedin,
    FaYoutube,
    FaGithub,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const ContactSection: React.FC = () => {
    const [copiedItem, setCopiedItem] = useState<string | null>(null);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        category: "General Inquiry",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopiedItem(label);
        setTimeout(() => setCopiedItem(null), 2500);
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Please provide your name";
        if (!formData.email.trim()) {
            newErrors.email = "Please provide your email address";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Please write a brief message or inquiry";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        // Simulate real response feedback loop
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 800);
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            category: "General Inquiry",
            message: "",
        });
        setErrors({});
        setIsSubmitted(false);
    };

    const helplines = [
        { display: "+880 1122-30881", tel: "+880112230881" },
        { display: "+88012567222111", tel: "+88012567222111" },
        { display: "01234-567890", tel: "01234567890" },
    ];

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/Riad-Zz/BrackeT",
            icon: FaGithub,
            description: "Codebase & Issue Tracker",
        },
        {
            name: "Facebook",
            url: "https://facebook.com",
            icon: FaFacebook,
            description: "Community & Announcements",
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com",
            icon: FaLinkedin,
            description: "Professional Updates",
        },
        {
            name: "Instagram",
            url: "https://instagram.com",
            icon: FaInstagramSquare,
            description: "Highlights & Media",
        },
        {
            name: "YouTube",
            url: "https://youtube.com",
            icon: FaYoutube,
            description: "Tutorials & Match Showcases",
        },
    ];

    return (
        <section aria-labelledby="contact-section-title" className="flex flex-col space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-4 py-1 text-xs font-special text-accent tracking-wider uppercase">
                    <MessageSquare className="w-3.5 h-3.5 text-accent" />
                    <span>Get in Touch & Support</span>
                </div>
                <h2 id="contact-section-title" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                    Contact Us & Connect With the Arena
                </h2>
                <p className="text-sm sm:text-base text-foreground/70">
                    Have feedback, discovered a bug during a duel, or want to explore partnership opportunities?
                    Our team is here to assist you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side: Contact Information & Channels (5 cols) */}
                <div className="lg:col-span-5 flex flex-col space-y-6">

                    {/* Email Contact Card */}
                    <div className="rounded-xl border border-border/40 bg-card/70 p-6 backdrop-blur-sm space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-primary/20 text-accent">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-base">Direct Email</h3>
                                    <p className="text-xs text-foreground/60">Official inquiries & support</p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => handleCopy("support@bracket.io", "email")}
                                className="text-xs flex items-center gap-1 text-accent hover:text-accent/80 font-special cursor-pointer px-2 py-1 rounded bg-accent/10 border border-accent/20 transition-colors"
                                title="Copy Email Address"
                            >
                                {copiedItem === "email" ? (
                                    <>
                                        <Check className="w-3.5 h-3.5 text-secondary" />
                                        <span>Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-3.5 h-3.5" />
                                        <span>Copy</span>
                                    </>
                                )}
                            </button>
                        </div>

                        <a
                            href="mailto:support@bracket.io"
                            className="inline-block text-lg font-special font-semibold text-accent hover:underline break-all"
                        >
                            support@bracket.io
                        </a>
                        <p className="text-xs text-foreground/70">
                            We aim to respond to all technical queries and platform reports within 24 business hours.
                        </p>
                    </div>

                    {/* Phone / Helplines Card */}
                    <div className="rounded-xl border border-border/40 bg-card/70 p-6 backdrop-blur-sm space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-lg bg-primary/20 text-accent">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground text-base">Helpline Numbers</h3>
                                <p className="text-xs text-foreground/60 flex items-center gap-1 mt-0.5">
                                    <Clock className="w-3 h-3 text-secondary" />
                                    Available: 10:00 AM – 5:00 PM (BST)
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2 pt-1 font-special text-sm">
                            {helplines.map((item, idx) => (
                                <div key={item.tel} className="flex items-center justify-between py-1 border-b border-border/20 last:border-b-0">
                                    <a
                                        href={`tel:${item.tel}`}
                                        className="text-foreground/90 hover:text-accent transition-colors font-medium"
                                    >
                                        {item.display}
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => handleCopy(item.display, `phone-${idx}`)}
                                        className="text-[11px] text-foreground/60 hover:text-accent cursor-pointer transition-colors"
                                        title={`Copy ${item.display}`}
                                    >
                                        {copiedItem === `phone-${idx}` ? (
                                            <span className="text-secondary flex items-center gap-1">
                                                <Check className="w-3 h-3" /> Copied
                                            </span>
                                        ) : (
                                            <Copy className="w-3 h-3" />
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Registry & Verification Details */}
                    <div className="rounded-xl border border-border/40 bg-card/70 p-6 backdrop-blur-sm space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-lg bg-primary/20 text-secondary">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground text-base">Platform Credentials</h3>
                                <p className="text-xs text-foreground/60">Registered platform information</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                            <div className="rounded-lg bg-background/50 p-2.5 border border-border/30">
                                <span className="text-foreground/60 block">Trade License</span>
                                <span className="font-special font-semibold text-accent">124154</span>
                            </div>
                            <div className="rounded-lg bg-background/50 p-2.5 border border-border/30">
                                <span className="text-foreground/60 block">Platform Build</span>
                                <span className="font-special font-semibold text-foreground">Beta v0.0.1</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media & Channels */}
                    <div className="rounded-xl border border-border/40 bg-card/70 p-6 backdrop-blur-sm space-y-4">
                        <h3 className="font-bold text-foreground text-sm uppercase tracking-wider font-special">
                            Connect on Social Channels
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {socialLinks.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <a
                                        key={s.name}
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-2.5 rounded-lg bg-background/40 border border-border/30 hover:border-accent/50 hover:bg-background/80 transition-all group cursor-pointer"
                                    >
                                        <Icon className="w-5 h-5 text-foreground/75 group-hover:text-accent group-hover:scale-110 transition-all shrink-0" />
                                        <div className="min-w-0">
                                            <span className="text-xs font-semibold text-foreground group-hover:text-accent block truncate">
                                                {s.name}
                                            </span>
                                            <span className="text-[10px] text-foreground/50 block truncate">
                                                {s.description}
                                            </span>
                                        </div>
                                        <ExternalLink className="w-3 h-3 text-foreground/40 group-hover:text-accent ml-auto shrink-0" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                </div>

                {/* Right Side: Interactive "Get in Touch" Inquiry Form (7 cols) */}
                <div className="lg:col-span-7">
                    <div className="rounded-2xl border border-border/50 bg-card/80 p-8 shadow-2xl backdrop-blur-md relative">
                        {isSubmitted ? (
                            <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-300">
                                <div className="p-4 rounded-full bg-secondary/20 text-secondary">
                                    <CheckCircle2 className="w-12 h-12" />
                                </div>
                                <h3 className="text-2xl font-bold font-special text-foreground">
                                    Message Received!
                                </h3>
                                <p className="text-sm text-foreground/75 max-w-md">
                                    Thank you, <span className="font-semibold text-accent">{formData.name}</span>.
                                    Your message regarding <span className="font-semibold text-accent">{formData.category}</span> has been dispatched to our engineering desk.
                                </p>
                                <div className="pt-4">
                                    <Button
                                        onClick={handleReset}
                                        className="rounded-full bg-accent text-background font-bold hover:bg-accent/90 px-6 cursor-pointer"
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                <div className="flex items-center justify-between border-b border-border/30 pb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">
                                            Send a Direct Inquiry
                                        </h3>
                                        <p className="text-xs text-foreground/60 mt-0.5">
                                            Fill out this form and we'll reach out to your inbox.
                                        </p>
                                    </div>
                                    <Sparkles className="w-5 h-5 text-accent opacity-80" />
                                </div>

                                {/* Name & Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="contact-name" className="text-xs font-semibold text-foreground/90 uppercase tracking-wider">
                                            Your Name <span className="text-accent">*</span>
                                        </label>
                                        <Input
                                            id="contact-name"
                                            type="text"
                                            placeholder="e.g. Alex Rivera"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="bg-background/80 border-border/60 focus-visible:ring-accent"
                                        />
                                        {errors.name && (
                                            <p className="text-xs text-destructive">{errors.name}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="contact-email" className="text-xs font-semibold text-foreground/90 uppercase tracking-wider">
                                            Email Address <span className="text-accent">*</span>
                                        </label>
                                        <Input
                                            id="contact-email"
                                            type="email"
                                            placeholder="you@domain.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="bg-background/80 border-border/60 focus-visible:ring-accent"
                                        />
                                        {errors.email && (
                                            <p className="text-xs text-destructive">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Category Selector */}
                                <div className="space-y-2">
                                    <label htmlFor="contact-category" className="text-xs font-semibold text-foreground/90 uppercase tracking-wider">
                                        Inquiry Category
                                    </label>
                                    <select
                                        id="contact-category"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full rounded-md border border-border/60 bg-background/80 px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
                                    >
                                        <option value="General Inquiry">General Inquiry & Feedback</option>
                                        <option value="Bug Report">Arena / Duel Bug Report</option>
                                        <option value="Problem Suggestion">Problem Statement Suggestion</option>
                                        <option value="Partnership">Partnership or Sponsorship</option>
                                        <option value="Account Support">Account & Authentication Support</option>
                                    </select>
                                </div>

                                {/* Message Field */}
                                <div className="space-y-2">
                                    <label htmlFor="contact-message" className="text-xs font-semibold text-foreground/90 uppercase tracking-wider">
                                        Message <span className="text-accent">*</span>
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        rows={5}
                                        placeholder="Describe your inquiry, suggestion, or test case feedback..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full rounded-md border border-border/60 bg-background/80 p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none placeholder:text-foreground/40 font-mono"
                                    />
                                    {errors.message && (
                                        <p className="text-xs text-destructive">{errors.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full rounded-md bg-accent text-background font-bold hover:bg-accent/90 h-11 transition-all cursor-pointer flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                                                <span>Sending Inquiry...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                <span>Send Message to BrackeT Team</span>
                                            </>
                                        )}
                                    </Button>
                                </div>

                                <p className="text-[11px] text-foreground/50 text-center">
                                    Your contact info is used exclusively for responding to this message.
                                    View our verified details on the left or reach out directly at <span className="text-accent">support@bracket.io</span>.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
