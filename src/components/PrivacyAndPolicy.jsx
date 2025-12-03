import React from "react";
import { ShieldCheck, User, Lock, Share2, Settings, Clock, Users, RefreshCw, PhoneCall, RotateCcw } from "lucide-react";

const PrivacyAndPolicy = () => {
    const sections = [
        {
            icon: <User size={28} color="#2E7D32" />,
            title: "1. Information We Collect",
            content: (
                <ul className="ps-3">
                    <li>First Name and Last Name</li>
                    <li>Mobile Number and Email Address</li>
                    <li>Profile Information (updated first name, Last name, email, profile picture)</li>
                    <li>Delivery Address and Location Information</li>
                    <li>Order History.</li>
                    <li>Payment Method Details (via secure gateways)</li>
                </ul>
            ),
        },
        {
            icon: <Settings size={28} color="#2E7D32" />,
            title: "2. How We Use Your Information",
            content: (
                <ul className="ps-3">
                    <li>Deliver 100% vegetarian meals to your location</li>
                    <li>Personalize food recommendations</li>
                    <li>Support profile management</li>
                    <li>Improve app performance and user experience</li>
                    <li>Process payments and send order updates</li>
                </ul>
            ),
        },
        {
            icon: <Lock size={28} color="#2E7D32" />,
            title: "3. How We Protect Your Data",
            content: (
                <ul className="ps-3">
                    <li>Data encryption and secure cloud storage</li>
                    <li>Trusted third-party payment systems</li>
                    <li>Strict access control</li>
                    <li>Regular security monitoring</li>
                </ul>
            ),
        },
        {
            icon: <Share2 size={28} color="#2E7D32" />,
            title: "4. Sharing Your Data",
            content: (
                <>
                    <p>We do <strong>not sell</strong> your personal information.</p>
                    <ul className="ps-3">
                        <li>Delivery partners</li>
                        <li>Payment gateways</li>
                        <li>Analytics tools</li>
                        <li>Government authorities when required</li>
                    </ul>
                </>
            ),
        },
        {
            icon: <ShieldCheck size={28} color="#2E7D32" />,
            title: "5. Your Rights & Choices",
            content: (
                <>
                    <ul className="ps-3">
                        <li>Update first name, last name, email, and profile picture</li>
                        <li>Modify saved addresses</li>
                        <li>Access order history</li>
                        <li>You can delete your Account any time.</li>
                    </ul>
                    <p>
                        Email us at:{" "}
                        <a href="mailto:support@vegiffyy.com" className="text-success fw-semibold">
                            support@vegiffyy.com
                        </a>
                    </p>
                </>
            ),
        },
        {
            icon: <Clock size={28} color="#2E7D32" />,
            title: "6. Data Retention",
            content: (
                <p>
                    Data is retained only for service operations, customer support, and legal compliance.
                    You can delete your account any time.
                </p>
            ),
        },
        {
            icon: <Users size={28} color="#2E7D32" />,
            title: "7. Children's Privacy",
            content: (
                <p>
                    Vegiffyy is intended for users aged 18+. We do not knowingly collect data from
                    children below 18 without parental consent.
                </p>
            ),
        },
        {
            icon: <RefreshCw size={28} color="#2E7D32" />,
            title: "8. Policy Changes",
            content: (
                <p>
                    We may update this policy occasionally. Continued app usage means you accept the
                    latest version.
                </p>
            ),
        },
        {
            icon: <PhoneCall size={28} color="#2E7D32" />,
            title: "9. Contact Us",
            content: (
                <p>
                    For any queries, contact:{" "}
                    <a href="mailto:support@vegiffyy.com" className="text-success fw-semibold">
                        support@vegiffyy.com
                    </a>
                </p>
            ),
        },
        {
            icon: <RotateCcw size={28} color="#2E7D32" />,
            title: "10. Refund & Cancellation Policy",
            content: (
                <ul className="ps-3">
                    <li>Users can cancel an order within <strong>1 minute</strong> after placing it.</li>
                    <li>Refunds are processed within <strong>3–4 working days</strong>.</li>
                    <li>No cancellations allowed once food preparation has started.</li>
                    <li>Refund timeline depends on the payment provider.</li>
                </ul>
            ),
        },
    ];

    const today = new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="pb-5" style={{ backgroundColor: "#F7FFF8" }}>
            {/* HEADER */}
            <div
                className="text-center py-5 mb-4"
                style={{
                    background: "linear-gradient(135deg, #2E7D32, #66BB6A)",
                    color: "#fff",
                    borderBottomLeftRadius: "40px",
                    borderBottomRightRadius: "40px",
                }}
            >
                <h1 className="fw-bold">Vegiffyy - Privacy Policy</h1>
                <p className="mt-2" style={{ opacity: 0.9 }}>
                    Your trust is our priority. We keep your data safe & secure.
                </p>
                <p className="mt-3 fw-semibold" style={{ fontSize: "15px", opacity: 0.9 }}>
                    📅 Last Updated: {today}
                </p>
            </div>

            {/* SECTIONS */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11 col-12">
                        {sections.map((sec, i) => (
                            <div
                                key={i}
                                className="p-4 mb-4 shadow-sm animate-section"
                                style={{
                                    background: "#ffffff",
                                    borderRadius: "12px",
                                    borderLeft: "6px solid #2E7D32",
                                }}
                            >
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    {sec.icon}
                                    <h4 className="fw-semibold m-0" style={{ color: "#1B5E20" }}>
                                        {sec.title}
                                    </h4>
                                </div>
                                <div style={{ color: "#2b2b2b" }}>{sec.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ANIMATION CSS */}
            <style>{`
                .animate-section {
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeInUp 0.6s ease forwards;
                }
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default PrivacyAndPolicy;
