"use client";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MusicCardSkeleton } from "@/components/MusicCardSkeleton";
import { MusicCard } from "@/components/MusicCard";
import { gql, useQuery } from "@apollo/client";
import type { SongAPIResponse } from "@/types/songs";

type Props = {
  title: string;
};

const SONG_QUERY = gql`
  query GET_SONGS {
    songs {
      data {
        id
        attributes {
          description
          title
          cover {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const ske = Array.from({ length: 3 }).map((_, i) => (
  <MusicCardSkeleton key={i} />
));

export function HorizontalMusicList({ title }: Props) {
  const { data, loading, error } = useQuery<SongAPIResponse>(SONG_QUERY);
  if (error) return <></>;
  return (
    <div className="w-full">
      <div className="mb-4">
        <span className="text-xl block mb-1 font-bold">{title}</span>
        <p>Listen now for you</p>
      </div>
      <ScrollArea className="pb-4 w-full rounded-md ">
        <div className="w-full flex  gap-4">
          {!!loading && ske}
          {!!!loading &&
            data?.songs.data.map((song) => (
              <MusicCard key={song.id} data={song} />
            ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
