import React from 'react'

import { TonConnectButton } from "@tonconnect/ui-react";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background justify-between">
    <section className="container flex items-center gap-4">
      <a
        href="http://localhost:3000"
        target="_blank noopener noreferrer"
        className="hover:opacity-80 transition-opacity relative mr-auto"
      >
        <img src="https://static.ston.fi/logo/full-logo.svg" alt="logo" />

      </a>

      <TonConnectButton />
  
    </section>
  </header>
  )
}

export default Header
