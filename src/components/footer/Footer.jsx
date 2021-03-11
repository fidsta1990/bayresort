import React from "react";
import { footerLinks, social } from "./details";
import {
  FooterStyle,
  Wrapper,
  Link,
  Form,
  FormInput,
  FormBtn,
} from "./footerStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <Form>
        <FormInput type="text" placeholder="Enter Email" />
        <FormBtn>subscribe</FormBtn>
      </Form>
      <Wrapper>
        {footerLinks.map((link) => {
          const { id, title, linkOne, linkTwo, linkThree, linkFour } = link;
          return (
            <div key={id}>
              <h4>{title}</h4>
              <Link href="#">{linkOne}</Link>
              <Link href="#">{linkTwo}</Link>
              <Link href="#">{linkThree}</Link>
              <Link href="#">{linkFour}</Link>
            </div>
          );
        })}
        <div>
          <h4>Social</h4>
          {social.map((tag, index) => {
            const { icon, name } = tag;
            return (
              <Link href="#" key={index}>
                <span>{icon}</span> {name}
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </FooterStyle>
  );
};

export default Footer;
