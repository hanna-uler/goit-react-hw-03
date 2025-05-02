import css from './ContactForm.module.css'
import { Formik, Form, Field } from 'formik'
import { useId } from 'react'

export default function ContactForm({addContact}) {
    const contactForm = {
        name: '',
        number: '',
    }
    const nameId = useId();
    const numberId = useId();
    const handleSubmit = (values, actions) => {
        addContact({
            ...values, 
            id: Date.now()
        });
        actions.resetForm;
    }
    return (
        <Formik initialValues={{contactForm}} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <label className={css.label} htmlFor={nameId}>Name</label>
                <Field className={css.field} type="text" name="name" id={nameId} />
                <label className={css.label} htmlFor={numberId}>Number</label>
                <Field className={css.field} type="tel" name="number" id={numberId} />
				<button className={css.btn} type="submit">Add contact</button>
			</Form>
        </Formik>
    )
}