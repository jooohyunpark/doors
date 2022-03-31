import { useEffect, useState } from 'react'
import { roomData } from '@/data'
import styles from './index.module.scss'

const Palette = () => {
  const [on, setOn] = useState(false)

  useEffect(() => {
    const keypress = (e) => {
      if (e.keyCode === 80) setOn((prev) => !prev)
    }

    document.addEventListener('keypress', keypress)

    return () => {
      document.removeEventListener('keypress', keypress)
    }
  }, [])

  return on ? (
    <div className={styles.palette}>
      {roomData.map((d, i) => {
        return (
          <div key={i}>
            <div
              className={styles.panel}
              style={{
                background: d.color
              }}
            ></div>
            <p className={styles.label}>{d.id}</p>
          </div>
        )
      })}
    </div>
  ) : null
}

export default Palette
