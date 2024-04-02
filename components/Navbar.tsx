import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import React from 'react';
import { ModeToggle } from './ModeToggle';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5 px-10 container">
      <div>
        <ModeToggle />
      </div>
      <div className="font-bold text-[22px]">Jessy&lsquo;s To-Do </div>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
