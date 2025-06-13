import { motion } from "framer-motion";
import {
    Shield,
    FileText,
    Eye,
    Lock,
    Users,
    Globe,
    Mail,
    Phone,
    Calendar,
    AlertCircle,
} from "lucide-react";
// Terms of Service Page Component
export const TermsOfServicePage = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
        >
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5" />
                <div className="relative max-w-4xl mx-auto text-center">
                    <motion.div
                        {...fadeInUp}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-6 mx-auto"
                    >
                        <FileText className="w-10 h-10" />
                    </motion.div>

                    <motion.h1
                        {...fadeInUp}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-slate-800 dark:text-white mb-6"
                    >
                        Terms of Service
                    </motion.h1>

                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
                    >
                        Please read these terms carefully before using our services.
                        By engaging with us, you agree to be bound by these terms.
                    </motion.p>

                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.3 }}
                        className="mt-8 p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700 inline-block"
                    >
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            <Calendar className="inline w-4 h-4 mr-2" />
                            Last updated: June 13, 2025
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                    >
                        <div className="p-8 md:p-12 space-y-12">

                            {/* Acceptance of Terms */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <AlertCircle className="w-6 h-6 text-blue-500" />
                                    <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                                        Acceptance of Terms
                                    </h2>
                                </div>
                                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <p>By accessing our website or using our event planning services, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.</p>
                                </div>
                            </div>

                            {/* Services Description */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Users className="w-6 h-6 text-blue-500" />
                                    <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                                        Our Services
                                    </h2>
                                </div>
                                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <p>Elegant Events provides comprehensive event planning and management services, including:</p>
                                    <ul className="ml-6 space-y-2">
                                        <li>• Wedding planning and coordination</li>
                                        <li>• Corporate event management</li>
                                        <li>• Private party planning</li>
                                        <li>• Venue selection and decoration</li>
                                        <li>• Vendor coordination and management</li>
                                        <li>• Event consultation and design</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Booking and Payment Terms */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <FileText className="w-6 h-6 text-blue-500" />
                                    <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                                        Booking and Payment Terms
                                    </h2>
                                </div>
                                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <p><strong>Booking Process:</strong></p>
                                    <ul className="ml-6 space-y-2">
                                        <li>• All bookings require a signed contract and deposit</li>
                                        <li>• Services are confirmed only upon receipt of initial payment</li>
                                        <li>• Event details must be finalized 30 days before the event</li>
                                    </ul>

                                    <p><strong>Payment Terms:</strong></p>
                                    <ul className="ml-6 space-y-2">
                                        <li>• 50% deposit required to secure booking</li>
                                        <li>• Remaining balance due 7 days before event</li>
                                        <li>• Additional charges may apply for last-minute changes</li>
                                        <li>• All payments are non-refundable unless otherwise specified</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Cancellation Policy */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-6 h-6 text-blue-500" />
                                    <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                                        Cancellation and Refund Policy
                                    </h2>
                                </div>
                                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <ul className="ml-6 space-y-2">
                                        <li>• Cancellations more than 90 days before event: 25% of total cost retained</li>
                                        <li>• Cancellations 60-90 days before event: 50% of total cost retained</li>
                                        <li>• Cancellations 30-60 days before event: 75% of total cost retained</li>
                                        <li>• Cancellations less than 30 days before event: No refund</li>
                                        <li>• Force majeure events will be handled on a case-by-case basis</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Client Responsibilities */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Shield className="w-6 h-6 text-blue-500" />
                                    <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                                        Client Responsibilities
                                    </h2>
                                </div>
                                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <p>Clients are responsible for:</p>
                                    <ul className="ml-6 space-y-2">
                                        <li>• Providing accurate and complete information</li>
                                        <li>• Making timely decisions and approvals</li>
                                        <li>• Ensuring payment schedules are met</li>
                                        <li>• Obtaining necessary permits and licenses</li>
                                        <li>• Communicating changes or concerns promptly</li>
                                        <li>• Treating all staff and vendors with respect</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Limitation of Liability */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Lock className="w-6 h-6 text-blue-500" />
                                    <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                                        Limitation of Liability
                                    </h2>
                                </div>
                                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <p>Elegant Events shall not be liable for:</p>
                                    <ul className="ml-6 space-y-2">
                                        <li>• Acts of God, natural disasters, or force majeure events</li>
                                        <li>• Actions or failures of third-party vendors</li>
                                        <li>• Changes in government regulations or venue policies</li>
                                        <li>• Indirect, incidental, or consequential damages</li>
                                    </ul>
                                    <p>Our liability is limited to the total amount paid for our services.</p>
                                </div>
                            </div>

                            {/* Intellectual Property */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Eye className="w-6 h-6 text-blue-500" />
                                    <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                                        Intellectual Property
                                    </h2>
                                </div>
                                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <p>All content, designs, and materials created by Elegant Events remain our intellectual property. Clients receive a license to use these materials for their event only. We reserve the right to use photos and information about events for marketing purposes unless otherwise agreed.</p>
                                </div>
                            </div>

                            {/* Governing Law */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Globe className="w-6 h-6 text-blue-500" />
                                    <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                                        Governing Law
                                    </h2>
                                </div>
                                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <p>These terms are governed by the laws of Pakistan. Any disputes will be resolved through arbitration or in the courts of Islamabad, Pakistan.</p>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                                <h3 className="text-xl font-serif font-bold text-slate-800 dark:text-white mb-4">
                                    Questions About These Terms?
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    If you have any questions about these Terms of Service, please contact us:
                                </p>
                                <div className="space-y-2 text-slate-600 dark:text-slate-300">
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        <span>info@rsmediaservices
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        <span>0345-8867786</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};