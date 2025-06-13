import React from "react";
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
} from "lucide-react";

// Privacy Policy Page Component
export const PrivacyPolicyPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10 dark:from-rose-500/5 dark:to-pink-500/5" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white mb-6 mx-auto"
          >
            <Shield className="w-10 h-10" />
          </motion.div>

          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-slate-800 dark:text-white mb-6"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            We value your privacy and are committed to protecting your personal
            information. This policy explains how we collect, use, and safeguard
            your data.
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
              {/* Information We Collect */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Eye className="w-6 h-6 text-rose-500" />
                  <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                    Information We Collect
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    We collect information you provide directly to us, such as:
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li>• Contact information (name, email, phone number)</li>
                    <li>• Event details and preferences</li>
                    <li>• Communication records and feedback</li>
                    <li>• Payment and billing information</li>
                  </ul>
                  <p>
                    We may also automatically collect certain information when
                    you visit our website, including:
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li>• Device and browser information</li>
                    <li>• IP address and location data</li>
                    <li>• Website usage and navigation patterns</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-rose-500" />
                  <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                    How We Use Your Information
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>We use the information we collect to:</p>
                  <ul className="ml-6 space-y-2">
                    <li>• Provide and improve our event planning services</li>
                    <li>
                      • Communicate with you about your events and our services
                    </li>
                    <li>• Process payments and manage bookings</li>
                    <li>• Send marketing communications (with your consent)</li>
                    <li>• Analyze website usage and improve user experience</li>
                    <li>
                      • Comply with legal obligations and protect our rights
                    </li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-rose-500" />
                  <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                    Information Sharing
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    We may share your information in the following
                    circumstances:
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li>
                      • With trusted service providers who assist in our
                      operations
                    </li>
                    <li>
                      • With vendors and suppliers necessary for event execution
                    </li>
                    <li>
                      • When required by law or to protect our legal rights
                    </li>
                    <li>• In connection with a business transaction or sale</li>
                  </ul>
                  <p>
                    We do not sell, rent, or trade your personal information to
                    third parties for marketing purposes without your explicit
                    consent.
                  </p>
                </div>
              </div>

              {/* Data Security */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Lock className="w-6 h-6 text-rose-500" />
                  <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                    Data Security
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction.
                    However, no method of transmission over the internet is 100%
                    secure.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-rose-500" />
                  <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                    Your Rights
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>You have the right to:</p>
                  <ul className="ml-6 space-y-2">
                    <li>• Access and update your personal information</li>
                    <li>• Request deletion of your data</li>
                    <li>• Opt-out of marketing communications</li>
                    <li>• Restrict or object to certain data processing</li>
                    <li>• Data portability (where applicable)</li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                <h3 className="text-xl font-serif font-bold text-slate-800 dark:text-white mb-4">
                  Contact Us
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  If you have any questions about this Privacy Policy, please
                  contact us:
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
