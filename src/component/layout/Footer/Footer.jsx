import { Mail, MapPin, Phone, Send, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Input from "@/component/ui/Input";
import { Button } from "@/component/ui/Button";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-14 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Newsletter */}
        <div>
          <h2 className="text-4xl font-bold text-blue-400">divieight</h2>
          <p className="text-sm mt-1 opacity-75">Independent Co-ownership</p>

          <div className="mt-6 flex items-center bg-neutral-900 rounded-xl p-2">
            <Input
              placeholder="Enter Your Email Here"
              className="bg-transparent border-none text-white placeholder:text-neutral-400"
            />
            <Button size="icon" className="bg-blue-500 hover:bg-blue-600">
              <Send className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-3 mt-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-16 h-12 bg-neutral-800 rounded-md"></div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <ul className="space-y-2 opacity-80 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Property</li>
            <li>Service</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 opacity-80 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +123 456 789</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@divieight.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4" /> Sudirman Street 302, Metro,<br /> Lampung Indonesia.</li>
          </ul>
          <p className="mt-3 text-sm text-blue-400 flex items-center gap-2">→ See On Map</p>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 opacity-80 text-sm">
            <li>Contact us</li>
            <li>Help Center</li>
            <li>How It Works</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-16">
        {[Facebook, Twitter, Youtube, Instagram, Linkedin].map((Icon, i) => (
          <div
            key={i}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 cursor-pointer"
          >
            <Icon className="h-5 w-5" />
          </div>
        ))}
      </div>

      <p className="text-center text-xs opacity-60 mt-6">© Copyright. All rights reserved.</p>
    </footer>
  );
}
