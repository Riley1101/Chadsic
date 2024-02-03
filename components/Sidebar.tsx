import React from "react";
import {
  ListBulletIcon,
  PlayIcon,
  BarChartIcon,
  FileIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  let options = [
    { name: "listen now", icon: <PlayIcon className="mr-4 h-5 w-4" /> },
    { name: "browse", icon: <ListBulletIcon className="mr-4 h-5 w-4" /> },
    { name: "radio", icon: <BarChartIcon className="mr-4 h-5 w-4" /> },
  ];

  let playlists = [
    { name: "play lists", icon: <FileIcon className="mr-4 h-5 w-4" /> },
    { name: "songs", icon: <ListBulletIcon className="mr-4 h-5 w-4" /> },
    { name: "made for you", icon: <StarIcon className="mr-4 h-5 w-4" /> },
  ];
  return (
    <div className="p-4 border-r h-full">
      <h2 className="mb-2 font-bold">Discover</h2>
      <div className="flex flex-col gap-1">
        {options.map((i) => (
          <Button
            size="lg"
            key={i.name}
            variant={"ghost"}
            className="capitalize justify-start"
          >
            {i.icon}
            {i.name}
          </Button>
        ))}
      </div>

      <h2 className="mt-4 mb-2 font-bold">Discover</h2>
      <div className="flex flex-col gap-1">
        {playlists.map((i) => (
          <Button
            size="lg"
            key={i.name}
            variant={"ghost"}
            className="capitalize justify-start"
          >
            {i.icon}
            {i.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
