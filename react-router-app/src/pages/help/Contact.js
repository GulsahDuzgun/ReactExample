import { Form, redirect, useActionData } from "react-router-dom"

export const Contact = () => {
    const contactErr = useActionData()
    return(
        <div className="contact">
            <h3>Contact</h3>
            <Form method="post" action="/Help/Contact">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" />
                    { contactErr?.emailErr && <p className="error">{contactErr.emailErr}</p> }
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message"></textarea>
                    { contactErr?.messageErr && <p className="error">{contactErr.messageErr}</p>}
                </div>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

export const contactAction = async ( {request} ) => {

    const data = await request.formData()
    //console.log(data.get("message"))
    const email = data.get("email")
    const message = data.get("message")
    const err = {}

    if(typeof email !== "string" || !email.includes("@")) {
        err.emailErr = "e-mail bilginiz hatalı!!"
    }

    if(typeof message !=="string" || message.length < 10) {
        err.messageErr = "Mesaj uzunluğu 10 karakterden az olamaz"
    }

    if(Object.keys(err).length) {
        return err ;
    }


    return redirect("/")

}