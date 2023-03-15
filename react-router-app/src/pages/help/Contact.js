import { Form, redirect } from "react-router-dom"

export const Contact = () =>{
    return(
        <div className="contact">
            <h3>Contact</h3>
            <Form method="post" action="/Help/Contact">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message"></textarea>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

export const contactAction = async ({request}) => {

    const data = await request.formData()
    console.log(data.get("message"))
    return redirect("/")

}