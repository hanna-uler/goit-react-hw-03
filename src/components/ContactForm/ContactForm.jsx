import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId } from 'react'
import * as Yup from "yup";
import { LuUserRoundPlus } from "react-icons/lu";



export default function ContactForm({addContact}) {
    const contactForm = {
        name: '',
        number: '',
    }
    const nameId = useId();
    const numberId = useId();
    const ContactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
        number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required")
    });

    const handleSubmit = (values, actions) => {
        addContact({ ...values, id: Date.now() });
        actions.resetForm();
    }
    return (
        <Formik
            initialValues={contactForm }
            onSubmit={handleSubmit}
            validationSchema={ContactSchema}
        >
            <Form className={css.form}>
                <label className={css.label} htmlFor={nameId}>Name</label>
                <Field className={css.field} type="text" name="name" id={nameId} />
                <ErrorMessage className={css.error} name="name" component="span" />
                <label className={css.label} htmlFor={numberId}>Number</label>
                <Field className={css.field} type="tel" name="number" id={numberId} />
                <ErrorMessage className={css.error} name="number" component="span" />
				<button className={css.btn} type="submit">Add contact<LuUserRoundPlus className={css.icon} size="1rem"/></button>
			</Form>
        </Formik>
    )
}