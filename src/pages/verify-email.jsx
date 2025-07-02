import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import logo from "@/assets/fedgen_logo.png";



export default function AccountVerified() {

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
                    </div>

                    {/* Success Content */}
                    <div className="text-center space-y-6">
                        {/* Success Icon */}
                        <div className="flex justify-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-12 h-12 text-green-600" />
                            </div>
                        </div>

                        {/* Success Message */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                Account Verified Successfully!
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Thank you for signing up! Your account has been successfully verified and is now active.
                            </p>
                            <p className="text-gray-600">
                                You can now access all features of the FEDGEN HealthEduApp DataHub.
                            </p>
                        </div>

                        {/* Action Button */}
                        <div className="pt-4">
                            <Link href="/dashboard">
                                <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                                    Continue to Dashboard
                                </Button>
                            </Link>
                        </div>

                        {/* Additional Actions */}
                        <div className="pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-500 mb-3">
                                Need help getting started?
                            </p>
                            <div className="flex flex-col space-y-2">
                                <Link href="/help" className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                                    View Help Center
                                </Link>

                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-2 text-center pt-6 border-t border-gray-100">
                        <p className="text-xs text-gray-500">
                            Welcome to FEDGEN HealthEduApp DataHub
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}