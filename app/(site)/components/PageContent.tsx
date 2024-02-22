
"use client";
import React from 'react'
import { Song } from "@/types";
import SongItem from "@/components/SongItem";

interface PageContentProps {
    songs: Song[];
  }

const PageContent: React.FC<PageContentProps> = ({
    songs
  }) => {
  return (
    <div
    className="
        grid s
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-4 
        mt-4
      "
    >
    {songs.map((item) => (
        <SongItem 
          onClick={() => {}} 
          key={item.id} 
          data={item}
        />
      ))}
    </div>
  )
}

export default PageContent