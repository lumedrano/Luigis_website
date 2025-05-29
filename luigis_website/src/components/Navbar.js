// src/components/Navbar.js
import React from 'react';
import { House, User, FileText, Github, Contact } from 'lucide-react';
import { NavBar } from './tubelight-navbar';

export function Navbar() {
  const navItems = [
    { name: 'Home', url: '/', icon: House },
    { name: 'About Me', url: '/about', icon: User },
    { name: 'Projects', url: '/projects', icon: FileText },
    { name: 'GitHub', url: 'https://github.com/lumedrano', icon: Github },
    { name: 'Contact', url: '/contact', icon: Contact },
  ];

  // const formattedItems = navItems.map(item => ({
  //   ...item,
  //   target: item.external ? '_blank' : undefined,
  //   rel: item.external ? 'noopener noreferrer' : undefined,
  // }));

  return <NavBar items={navItems} />;
}

export default Navbar;
