import React from "react";
import TrackCard from "./TrackCard";

export default function TrackGrid({ tracks = [] }) {
  // Example: tracks would be fetched from API
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {tracks.map(track => (
        <TrackCard key={track.track_id} track={track} />
      ))}
    </div>
  );
}
