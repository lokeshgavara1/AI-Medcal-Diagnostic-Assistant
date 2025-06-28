import { AlertTriangle } from "lucide-react";

export default function DisclaimerBanner() {
  return (
    <div className="bg-red-600 text-white px-4 py-3 text-center">
      <div className="flex items-center justify-center space-x-2">
        <AlertTriangle className="h-4 w-4" />
        <span className="font-semibold">EDUCATIONAL USE ONLY</span>
        <span className="hidden sm:inline">- This system is for demonstration and research purposes only. Not for clinical diagnosis.</span>
      </div>
    </div>
  );
}
