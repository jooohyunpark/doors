import { roomData } from '@/data'
import styles from './index.module.scss'

const Palette = () => {
  return (
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
  )
}

export default Palette
