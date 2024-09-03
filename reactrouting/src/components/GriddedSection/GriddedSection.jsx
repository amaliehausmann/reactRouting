import style from './GriddedSection.module.scss'

export function GriddedSection({children}){

    return(
        <section className={style.grid}>
            {children}
        </section>
    )
}