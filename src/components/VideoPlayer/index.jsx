import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

const v1 = 'https://v16-webapp.tiktok.com/0523a5dc2a376ddd2d9b72da3ea222f6/6222e10d/video/tos/maliva/tos-maliva-ve-0068c799-us/1b2b9caa8bcc459cb1df68f2b7a3afc4/?a=1988&br=2322&bt=1161&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-307nz7ThFpLCDXq&l=20220304220313010223128050111199FB&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2o8N2c6ZmQ3OjMzZzczNEApOGg2NGdlZmQ7Nzs2PDVkOWdtL2VucjQwNXJgLS1kMS9zc2NjYWNjYGEtLWFjNmJiYDA6Yw%3D%3D&vl=&vr='

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }
  return (
    <div>

      <video
        className={styles.video}
        src={v1}
        controls={false}
        ref={video}
      />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
