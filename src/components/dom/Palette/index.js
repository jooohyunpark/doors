import { useEffect, useState } from 'react'
import { roomData } from '@/data'
import styles from './index.module.scss'

const Palette = () => {
  const [on, setOn] = useState(false)

  useEffect(() => {
    document.onkeydown = (e) => {
      // show palette on shift + p
      if (e.shiftKey && e.code === 'KeyP') setOn((prev) => !prev)
    }

    return () => {}
  }, [])

  return (
    on && (
      <div className={styles.palette}>
        {roomData.map((d, i) => {
          return (
            <div key={i}>
              <div
                className={styles.panel}
                style={{
                  background: d.color
                }}></div>
              <p className={styles.label}>{d.id}</p>
            </div>
          )
        })}
      </div>
    )
  )
}

export default Palette
