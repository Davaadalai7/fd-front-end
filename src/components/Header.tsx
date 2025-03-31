import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, MapPin } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image
          src="https://res.cloudinary.com/du9etdqhq/image/upload/v1743407003/food-delivery/Logo/Horizon.png"
          alt="NomNom Logo"
          width={120}
          height={40}
        />
      </div>
      <div className="flex items-center gap-3">
        {isLoggedIn ? (
          <>
            <Button variant="outline" className="flex items-center gap-1">
              <MapPin size={16} className="text-red-500" />
              Delivery address:{" "}
              <span className="text-red-500">Add Location</span>
            </Button>
            <Button variant="outline" className="rounded-full p-2">
              <ShoppingCart size={18} />
            </Button>
            <Button variant="destructive" className="rounded-full p-2">
              <User size={18} />
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline">Sign up</Button>
            <Button variant="destructive">Log in</Button>
          </>
        )}
      </div>
    </header>
  );
}
