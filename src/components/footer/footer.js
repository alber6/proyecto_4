import "./footer.css";
import { Button } from "../button/button";

export const Footer = () => `
<div>
<a href= https://github.com/ target="_blank">
${Button("btnEducation", "Git", "")}
</a>
<a href= "https://www.linkedin.com/in/alberto-p-g-217b44383/" target="_blank">
${Button("btnEducation", "Linkedin", "")}
<a href="mailto:albertopeinado08@gmail.com">
${Button("btnEducation", "Gmail", "")}
</a>
</div>
`;