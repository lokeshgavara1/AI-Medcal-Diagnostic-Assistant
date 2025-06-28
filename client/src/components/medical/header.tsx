import { Stethoscope } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Stethoscope className="text-blue-600 h-8 w-8 mr-3" />
                <h1 className="text-xl font-bold text-slate-900">MedAI Diagnostic Assistant</h1>
              </div>
            </Link>
            <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium">DEMO</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`font-medium ${isActive("/") ? "text-blue-600" : "text-slate-600 hover:text-slate-900"}`}>
              Analysis
            </Link>
            <Link href="/documentation" className={`${isActive("/documentation") ? "text-blue-600 font-medium" : "text-slate-600 hover:text-slate-900"}`}>
              Documentation
            </Link>
            <Link href="/about" className={`${isActive("/about") ? "text-blue-600 font-medium" : "text-slate-600 hover:text-slate-900"}`}>
              About
            </Link>
            <Link href="/contact" className={`${isActive("/contact") ? "text-blue-600 font-medium" : "text-slate-600 hover:text-slate-900"}`}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
