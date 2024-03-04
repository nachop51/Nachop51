import styles from './TechnologyItem.module.css'
import { type TechnologyItemType } from '@/types'

const TechnologyItem = ({ title, doubleSpan, techs }: TechnologyItemType) => {
  return (
    <article className={styles.techContainer} data-doublespan={doubleSpan}>
      <h3 className={styles.techHeader}>{title}</h3>
      <ul
        className={styles.techList} data-doublespan={doubleSpan}
      >
        {
          techs.map((tech, idx) => (
            <li
              key={idx + tech.color} className={styles.techItem} data-glow={tech?.glow} style={{
                '--bgColor': tech.color
              } as React.CSSProperties}
            >
              <div className={styles.iconWrap} data-tip={tech.name}>
                {tech.icon}
              </div>
            </li>
          ))
        }
      </ul>
    </article>
  )
}

export default TechnologyItem
