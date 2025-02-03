import { Mail, Phone } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative isolate flex items-center gap-x-6 text-sm font-outfit overflow-hidden bg-secondary px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex flex-row items-center gap-2 text-cream">
          <Phone className=" text-cream w-4 h-4 font-bold" />
          9876541235
        </div>
        <div className="h-2 w-0.5 bg-cream max-md:hidden"></div>
        <div className="flex flex-row items-center gap-2 text-cream">
          <Mail className=" text-cream w-4 h-4 font-bold" />
          office@innovstem.com
        </div>
      </div>
    </div>
  );
};

export default Banner;
