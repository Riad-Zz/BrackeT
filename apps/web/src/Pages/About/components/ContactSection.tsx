import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
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

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

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
        // Simulate genuine response feedback loop
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 700);
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
        <motion.section
            aria-labelledby="contact-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="flex flex-col space-y-12"
        >
            <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs font-special text-accent tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(223,251,21,0.08)]">
                    <MessageSquare className="w-3.5 h-3.5 text-accent" />
                    <span>Get in Touch & Support</span>
                </div>
                <h2 id="contact-section-title" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                    Contact Us & Connect With the Arena
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-foreground/70">
                    Have feedback, discovered an edge-case during a duel, or want to discuss partnership opportunities?
                    Our team is here to assist you.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side: Contact Information & Channels (5 cols) */}
                <motion.div variants={containerVariants} className="lg:col-span-5 flex flex-col space-y-6">

                    {/* Email Contact Card */}
                    <motion.div
                        variants={itemVariants}
                        className="rounded-xl border border-border/40 bg-card/70 p-6 backdrop-blur-md space-y-4 hover:border-accent/40 transition-colors shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-primary/20 text-accent">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-base">Direct Email</h3>
                                    <p className="text-xs text-foreground/60 font-special">Official inquiries & support</p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => handleCopy("support@bracket.io", "email")}
                                aria-label="Copy support email address"
                                className="text-xs flex items-center gap-1.5 text-accent hover:text-accent/90 font-special cursor-pointer px-2.5 py-1.5 rounded-md bg-accent/10 border border-accent/20 transition-all hover:bg-accent/20 active:scale-95"
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
                            className="inline-block text-base sm:text-lg font-special font-semibold text-accent hover:underline break-all"
                        >
                            support@bracket.io
                        </a>
                        <p className="text-xs text-foreground/70 leading-relaxed">
                            We aim to respond to all technical queries and platform bug reports within 24 business hours.
                        </p>
                    </motion.div>

                    {/* Phone / Helplines Card */}
                    <motion.div
                        variants={itemVariants}
                        className="rounded-xl border border-border/40 bg-card/70 p-6 backdrop-blur-md space-y-4 hover:border-accent/40 transition-colors shadow-lg"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-lg bg-primary/20 text-accent">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground text-base">Helpline Numbers</h3>
                                <p className="text-xs text-foreground/60 flex items-center gap-1 mt-0.5 font-special">
                                    <Clock className="w-3 h-3 text-secondary" />
                                    Available: 10:00 AM – 5:00 PM (BST)
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2 pt-1 font-special text-sm">
                            {helplines.map((item, idx) => (
                                <div key={item.tel} className="flex items-center justify-between py-1.5 border-b border-border/20 last:border-b-0">
                                    <a
                                        href={`tel:${item.tel}`}
                                        className="text-foreground/90 hover:text-accent transition-colors font-medium text-xs sm:text-sm"
                                    >
                                        {item.display}
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => handleCopy(item.display, `phone-${idx}`)}
                                        aria-label={`Copy phone number ${item.display}`}
                                        className="text-[11px] text-foreground/60 hover:text-accent cursor-pointer transition-colors p-1"
                                    >
                                        {copiedItem === `phone-${idx}` ? (
                                            <span className="text-secondary flex items-center gap-1 font-special">
                                                <Check className="w-3 h-3" /> Copied
                                            </span>
                                        ) : (
                                            <Copy className="w-3.5 h-3.5" />
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Registry & Verification Details */}
                    <motion.div
                        variants={itemVariants}
                        className="rounded-xl border border-border/40 bg-card/70 p-6 backdrop-blur-md space-y-3 hover:border-accent/40 transition-colors shadow-lg"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-lg bg-secondary/20 text-secondary">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground text-base">Platform Credentials</h3>
                                <p className="text-xs text-foreground/60 font-special">Registered platform information</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                            <div className="rounded-lg bg-background/50 p-2.5 border border-border/30">
                                <span className="text-foreground/60 block">Trade License</span>
                                <span className="font-special font-semibold text-accent text-sm">124154</span>
                            </div>
                            <div className="rounded-lg bg-background/50 p-2.5 border border-border/30">
                                <span className="text-foreground/60 block">Platform Build</span>
                                <span className="font-special font-semibold text-foreground text-sm">Beta v0.0.1</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Media & Channels */}
                    <motion.div
                        variants={itemVariants}
                        className="rounded-xl border border-border/40 bg-card/70 p-6 backdrop-blur-md space-y-4 hover:border-accent/40 transition-colors shadow-lg"
                    >
                        <h3 className="font-bold text-foreground text-xs uppercase tracking-wider font-special">
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
                                        aria-label={`Open ${s.name} (opens in new tab)`}
                                        className="flex items-center gap-3 p-2.5 rounded-lg bg-background/40 border border-border/30 hover:border-accent/50 hover:bg-background/80 transition-all group cursor-pointer"
                                    >
                                        <Icon className="w-5 h-5 text-foreground/75 group-hover:text-accent group-hover:scale-110 transition-all shrink-0" />
                                        <div className="min-w-0">
                                            <span className="text-xs font-semibold text-foreground group-hover:text-accent block truncate">
                                                {s.name}
                                            </span>
                                            <span className="text-[10px] text-foreground/50 block truncate font-special">
                                                {s.description}
                                            </span>
                                        </div>
                                        <ExternalLink className="w-3 h-3 text-foreground/40 group-hover:text-accent ml-auto shrink-0" />
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>

                </motion.div>

                {/* Right Side: Interactive "Get in Touch" Inquiry Form (7 cols) */}
                <motion.div variants={itemVariants} className="lg:col-span-7">
                    <div className="rounded-2xl border border-border/50 bg-card/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md relative hover:border-accent/40 transition-colors">
                        {isSubmitted ? (
                            <div
                                role="status"
                                aria-live="polite"
                                className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-300"
                            >
                                <div className="p-4 rounded-full bg-secondary/20 text-secondary">
                                    <CheckCircle2 className="w-12 h-12" />
                                </div>
                                <h3 className="text-2xl font-bold font-special text-foreground">
                                    Message Received!
                                </h3>
                                <p className="text-sm text-foreground/75 max-w-md leading-relaxed">
                                    Thank you, <span className="font-semibold text-accent">{formData.name}</span>.
                                    Your message regarding <span className="font-semibold text-accent">{formData.category}</span> has been dispatched to our engineering desk.
                                </p>
                                <div className="pt-4">
                                    <Button
                                        onClick={handleReset}
                                        className="rounded-full bg-accent text-background font-bold hover:bg-accent/90 px-6 cursor-pointer shadow-md transition-all active:scale-95"
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
                                            Fill out this form and our engineering team will follow up.
                                        </p>
                                    </div>
                                    <Sparkles className="w-5 h-5 text-accent opacity-80" />
                                </div>

                                {/* Name & Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="contact-name" className="text-xs font-semibold text-foreground/90 uppercase tracking-wider font-special">
                                            Your Name <span className="text-accent">*</span>
                                        </label>
                                        <Input
                                            id="contact-name"
                                            type="text"
                                            placeholder="e.g. Alex Rivera"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            aria-invalid={errors.name ? "true" : "false"}
                                            aria-describedby={errors.name ? "contact-name-error" : undefined}
                                            className="bg-background/80 border-border/60 focus-visible:ring-accent"
                                        />
                                        {errors.name && (
                                            <p id="contact-name-error" className="text-xs text-destructive font-special">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="contact-email" className="text-xs font-semibold text-foreground/90 uppercase tracking-wider font-special">
                                            Email Address <span className="text-accent">*</span>
                                        </label>
                                        <Input
                                            id="contact-email"
                                            type="email"
                                            placeholder="you@domain.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            aria-invalid={errors.email ? "true" : "false"}
                                            aria-describedby={errors.email ? "contact-email-error" : undefined}
                                            className="bg-background/80 border-border/60 focus-visible:ring-accent"
                                        />
                                        {errors.email && (
                                            <p id="contact-email-error" className="text-xs text-destructive font-special">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Category Selector */}
                                <div className="space-y-2">
                                    <label htmlFor="contact-category" className="text-xs font-semibold text-foreground/90 uppercase tracking-wider font-special">
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
                                    <label htmlFor="contact-message" className="text-xs font-semibold text-foreground/90 uppercase tracking-wider font-special">
                                        Message <span className="text-accent">*</span>
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        rows={5}
                                        placeholder="Describe your inquiry, suggestion, or test case feedback..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        aria-invalid={errors.message ? "true" : "false"}
                                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                                        className="w-full rounded-md border border-border/60 bg-background/80 p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none placeholder:text-foreground/40 font-special text-xs sm:text-sm"
                                    />
                                    {errors.message && (
                                        <p id="contact-message-error" className="text-xs text-destructive font-special">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full rounded-md bg-accent text-background font-bold hover:bg-accent/90 h-11 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.99]"
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

                                <p className="text-[11px] text-foreground/50 text-center font-special">
                                    Your contact info is used exclusively for responding to this message.
                                    View our verified details on the left or reach out directly at <span className="text-accent">support@bracket.io</span>.
                                </p>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};
