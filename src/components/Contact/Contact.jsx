import css from './Contact.module.css'

export default function Contact({ name, number, id, deleteContact }) {
    return (
        <div className={css.container}>
            <p className={css.contactName}>{name}</p>
            <p className={css.contactNumber}>{number}</p>
            <button type="button"className={css.btn} onClick={()=>deleteContact(id)}>Delete</button>
        </div>
    )
    
}