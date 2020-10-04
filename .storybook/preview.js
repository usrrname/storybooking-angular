import docJson from "../documentation.json";
import { setCompodocJson } from "@storybook/addon-docs/angular";
setCompodocJson(docJson);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
}
