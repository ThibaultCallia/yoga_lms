'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

import { usePathname, useRouter } from 'next/navigation';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  return (
    <Button
      variant={'sidebar'}
      size={'sidebar'}
      onClick={() => router.push(href)}
      type="button"
      className={cn(
        'flex items-center justify-start gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate300/20 ',
        isActive &&
          'text-sky-700 bg-sky-200/20 hover:bg-200/20 hover:text-sky-700'
      )}
    >
      <div className="flex items-center justify-start gap-x-2">
        <Icon
          size={22}
          className={cn('text-slate-500', isActive && 'text-sky-700')}
        />
        {label}
      </div>
      <div
        className={cn(
          'ml-auto opacity-0 transition-all border-2 border-sky-700 h-full',
          isActive && 'opacity-100'
        )}
      />
    </Button>
  );
};

export default SidebarItem;
