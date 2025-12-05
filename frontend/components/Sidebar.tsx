"use client";
import { User, Inbox, CreditCard, Bell, Settings, Shield, FileText } from "lucide-react";
import UserItem from "./UserItems";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import type { ElementType } from "react";

type MenuItem = { link: string; text: string; icon: ElementType };
type MenuGroup = { group: string; items: MenuItem[] };

export default function Sidebar() {
  const menuList: MenuGroup[] = [
    {
      group: "General",
      items: [
        { link: "/", icon: User, text: "Profile" },
        { link: "/", icon: Inbox, text: "Inbox" },
        { link: "/", icon: CreditCard, text: "Billing" },
        { link: "/", icon: Bell, text: "Notification" },
      ],
    },
    {
      group: "Settings",
      items: [
        { link: "/", icon: Settings, text: "General Settings" },
        { link: "/", icon: Shield, text: "Privacy" },
        { link: "/", icon: FileText, text: "Logs" },
      ],
    },
  ];

  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: MenuGroup, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: MenuItem, optionKey: number) => {
                  const IconComponent = option.icon;
                  return (
                    <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                      <IconComponent className="w-4 h-4" />
                      {option.text}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings</div>
    </div>
  );
}
