import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/fedgen_logo.png";

export default function ForgotPassword() {
    const [formData, setFormData] = useState({
        email: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send a password reset email
        setSubmitted(true);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-600 via-blue-700 to-cyan-600 flex items-center justify-center p-4">
            <div className="relative w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <Link to="/">
                            <div className="flex items-center justify-center space-x-3 mb-4 cursor-pointer">
                                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                                    <img src={logo} alt="Fedgen healthEduApp logo" className="w-12 h-12" />
                                </div>
            <div>
              <div className="font-bold text-primary text-xl">FEDGEN DataHub</div>
              <div className="text-xs text-muted-foreground">Health Data Platform</div>
            </div>
                            </div>
                        </Link>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Forgot your password?</h2>
                        <p className="text-gray-600">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
                    </div>

                    {/* Form or Success Message */}
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email address
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="mt-1"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary-teal to-primary-blue text-white py-2.5 px-4 rounded-lg font-semibold hover:opacity-90 transition-all"
                            >
                                Send reset link
                            </Button>
                        </form>
                    ) : (
                        <div className="text-center space-y-4 py-8">
                            <h3 className="text-lg font-semibold text-gray-900">Check your email</h3>
                            <p className="text-gray-600">
                                If an account exists for <span className="font-medium">{formData.email}</span>, you will receive an email with instructions to reset your password.
                            </p>
                            <Link href="/signin" className="text-primary-teal hover:text-primary-blue font-medium">
                                Back to login
                            </Link>
                        </div>
                    )}

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            Remembered your password?{" "}
                            <Link href="/signin" className="text-primary-teal hover:text-primary-blue font-medium">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
