import React, { useState } from "react";
// import { Formik, Field, Form } from "formik";
import { AnyAaaaRecord } from "dns";
type PropTypes={
    firstName: String,
    lastName: String,
    email: String
}
function Experience(){
   
    return (
        <div className="App">
      <h1>Contact Us</h1>
      {/* <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="email" type="email" />
          <button type="submit">Submit</button>
        </Form> */}
      {/* </Formik> */}
    </div>
    )
}

export default Experience