'use-client';

import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem = ({ icon, label, href }: SidebarItemProps) => {
  return <div>item</div>;
};

export default SidebarItem;
