"use client";
import { useState } from "react";
import { BellIcon } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Header() {
  const [notification, setNotifications] = useState<any>([
    {
      text: "This is a notification",
      date: "03-12-2025",
      read: true,
    },
    {
      text: "This is another notification",
      date: "04-12-2025",
      read: false,
    },
  ]);

  return (
    <>
      <div className="grid grid-cols-2 p-4 gap-4 border-b">
        <CommandDemo />
        <div className="flex items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="relative" variant="outline" size="icon">
                <div
                  className={`absolute -top-2 -right-1 h-3 w-3 ${
                    notification.find((x: any) => x.read === true)
                      ? "h-3 w-3 rounded-full my-1 bg-green-500"
                      : "h-3 w-3 rounded-full my-1 bg-neutral-200"
                  }`}
                ></div>
                <BellIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {notification.map((item: any, key: number) => (
                <DropdownMenuItem
                  key={key}
                  className="py-1 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
                >
                  <div
                    className={`${
                      !item.read
                        ? "h-3 w-3 rounded-full my-1 bg-green-500"
                        : "h-3 w-3 rounded-full my-1 bg-neutral-200"
                    }`}
                  ></div>
                  <div className="flex flex-col">
                    <p>{item.text}</p>
                    <p className="text-xs text-neutral-500">{item.date}</p>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
