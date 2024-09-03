import style from './SectionImage.module.scss'

export function SectionImage({image, styling}){
    return(
        <section className={`${style[styling]}`}>
            <img src={`../src/assets/${image}`} alt="" />
        </section>
    )
}