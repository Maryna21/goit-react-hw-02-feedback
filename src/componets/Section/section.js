import s from 'componets/Section/section.module.css'
export default function Section ({title, children}){
    return(
        <section className={s.section}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}