import React from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";
import { toast } from "react-hot-toast";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <img src="/Icon1.png" alt="QuickNote Logo" className="h-14 w-auto" />
          <div className="flex items-center gap-4">
            <Link to="/create" className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
