'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: 'Services',
      items: ['IT Consulting', 'Software Development', 'Digital Transformation', 'Cloud Services'],
    },
    {
      title: 'Solutions',
      items: ['Enterprise Solutions', 'Custom Software', 'Cloud Migration', 'Digital Strategy'],
    },
    {
      title: 'Industries',
      items: ['Healthcare', 'Finance', 'Manufacturing', 'Retail'],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Susams
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium">
                  <span>{item.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem}>
                      <Link href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}>
                        {subItem}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            <ThemeToggle />
            <Button variant="default">Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <div key={item.title} className="py-2">
                <h3 className="font-medium px-4 py-2">{item.title}</h3>
                {item.items.map((subItem) => (
                  <Link
                    key={subItem}
                    href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 text-sm hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {subItem}
                  </Link>
                ))}
              </div>
            ))}
            <div className="px-4 py-4">
              <Button className="w-full">Contact Us</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}