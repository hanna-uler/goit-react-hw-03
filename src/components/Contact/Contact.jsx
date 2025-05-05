import css from './Contact.module.css'
import { FiUserMinus } from "react-icons/fi";
import { RiUserFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";

export default function Contact({ name, number, id, deleteContact }) {
    return (
        <div className={css.container}>
            <p className={css.contactName}><RiUserFill className={css.icon} size="1rem"/>{name}</p>
            <p className={css.contactNumber}><BsTelephoneFill className={css.icon} size="1rem"/>{number}</p>
            <button type="button"className={css.btn} onClick={()=>deleteContact(id)}>Delete <FiUserMinus className={css.icon}/></button>
        </div>
    )
    
}