import style from "./data-display-card.module.css"

interface MyComponentProps {
  children: React.ReactNode,
  css: React.CSSProperties
}


const DataDisplayCard :React.FC<MyComponentProps>= ({children, css}) => {
  return (
    <span className={style.display_card} style={css}>{children}</span>
  )
}

export default DataDisplayCard