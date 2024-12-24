import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../assets/logo.png"; // Assuming logo.png is in the assets folder
import { navItems } from "../constants"; // Correct path to constants file

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    console.log(navItems);  // Check if navItems is logged correctly

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">IntelliClass</span>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems && navItems.length > 0 ? (
                            navItems.map((item, index) => (
                                <li key={index}>
                                    {/* Using Link from react-router-dom */}
                                    <Link to={item.href} className="hover:text-gray-500">
                                        {item.label}
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li>No items found</li>
                        )}
                    </ul>

                    {/* Sign In and Create Account */}
                    <div className="hidden lg:flex justify-center space-x-12">
                        <Link to="/signin" className="py-2 px-3 border rounded-md">
                            Sign In
                        </Link>
                        <Link to="/create-account" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                            Create Account
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer Menu */}
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lh:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <Link to={item.href} className="text-white">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Sign In and Create Account */}
                        <div className="flex space-x-6">
                            <Link to="/signin" className="py-2 px-3 border rounded-md">
                                Sign In
                            </Link>
                            <Link to="/create-account" className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                                Create Account
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
