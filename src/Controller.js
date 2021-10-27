import React from "react";
import Checkbox from "./Checkbox";
import Dates from "./Dates";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import Textarea from "./Textarea";

export default function Controller({ ele,...props }) {
  switch (ele) {
    case "Input":
      return <Input {...props} />;
    case "Textarea":
      return <Textarea{...props}/>;
    case "Select":
      return <Select {...props} />;
    case "Radio":
      return <Radio {...props} />;
    case "Checkbox":
      return <Checkbox {...props} />;
    case "Date":
      return <Dates {...props}/>;

    default:
      return null;
  }
}
