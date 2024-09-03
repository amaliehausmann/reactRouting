import style from './SectionContent.module.scss'

    export function SectionContent({title, textOne, textTwo, styling}){
        
        return(
            <section className={`${style[styling]}`}>
                <h1>{title}</h1>
                <p>{textOne}</p>
                <p>{textTwo}</p>
            </section>
        )
    }