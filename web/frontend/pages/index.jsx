import { Page, TextField, Button } from "@shopify/polaris";
import { useNavigate, useToast } from "@shopify/app-bridge-react";
import { useForm, useField, notEmpty } from "@shopify/react-form";

export default function HomePage() {
  const navigate = useNavigate();
  const { show } = useToast();

  //function to validate email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //initialize form fields and validation rules
  const { fields, submit, reset, dirty } = useForm({
    fields: {
      name: useField({
        value: "",
        validates: [notEmpty("Please! enter your full name.")],
      }),
      email: useField({
        value: "",
        validates: (value) => {
          if (value.length == 0 || !validateEmail(value)) {
            return "Please! enter a valid email.";
          }
        },
      }),
    },

    //submission logic
    async onSubmit(form) {
      console.log(form); //log form data
      reset();
      show("Success! 🎉", {
        duration: 2000,
        onDismiss: () => console.log("👋 Toast dismissed"),
      });
      setTimeout(() => {
        navigate({ name: "Product" });
      }, 1000);
      return { status: "success" };
    },
  });

  return (
    <Page
      title="Register"
      primaryAction={{
        content: "Save",
        disabled: !dirty,
        onAction: submit,
      }}
    >
      <div>
        <TextField label="Name" type="text" {...fields.name} />
        <TextField label="Email" type="email" {...fields.email} />
      </div>
    </Page>
  );
}
