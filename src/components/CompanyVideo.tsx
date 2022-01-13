import React, { useEffect, useRef, useState } from "react";
import "./CompanyVideo.css";
import { If, Then, Else } from "react-if";
import { observer } from "mobx-react-lite";
import { useCompaniesStore } from "../context/CompaniesContext";

const volumeMute = require("../assets/volume-mute.png");
const volumeUnmmuted = require("../assets/volume-unmute.png");

interface Props {
  src: string;
  isSelected?: boolean;
  index: number;
}

const CompanyVideo = observer(({ src, isSelected, index }: Props) => {
  const firstRenderRef = useRef(true);
  const { currentIndex } = useCompaniesStore();
  const playerRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      if (index !== 0) {
        firstRenderRef.current = false;
        if (playerRef.current) {
          setMuted(false);
          playerRef.current.muted = false;
        }
      }
    }

    if (firstRenderRef.current && index === 0 && currentIndex !== 0) {
      firstRenderRef.current = false;
      if (playerRef.current) {
        setMuted(false);
        playerRef.current.muted = false;
      }
    }
  }, [currentIndex, index]);

  useEffect(() => {
    if (isSelected) {
      if (playerRef.current) {
        playerRef.current.play();
      }
    } else {
      if (playerRef.current) {
        playerRef.current.pause();
      }
    }
  }, [isSelected]);

  const toggleMute = () => {
    if (isSelected) {
      if (playerRef.current) {
        setMuted(!muted);
        playerRef.current.muted = !muted;
      }
    }
  };

  return (
    <div className="company-video-container">
      <If condition={muted}>
        <Then>
          <button onClick={toggleMute} className="volume-button">
            <img className="volume-image" src={volumeMute} alt="volume" />
          </button>
        </Then>
        <Else>
          <button onClick={toggleMute} className="volume-button">
            <img className="volume-image" src={volumeUnmmuted} alt="volume" />
          </button>
        </Else>
      </If>

      <video ref={playerRef} className="company-video" playsInline controls muted loop>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
});

export default React.memo(CompanyVideo);
