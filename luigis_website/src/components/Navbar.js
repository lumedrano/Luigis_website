// src/components/Navbar.js
import React from 'react';
import { House, User, FileText, Github } from 'lucide-react';
import { NavBar } from './tubelight-navbar';

export function Navbar() {
  const navItems = [
    { name: 'Home', url: '/', icon: House },
    { name: 'About Me', url: '/about', icon: User },
    { name: 'Resume', url: '/resume', icon: FileText },
    { name: 'GitHub', url: 'https://github.com/lumedrano', icon: Github },
  ];

  const formattedItems = navItems.map(item => ({
    ...item,
    target: item.external ? '_blank' : undefined,
    rel: item.external ? 'noopener noreferrer' : undefined,
  }));

  return <NavBar items={formattedItems} />;
}

export default Navbar;
