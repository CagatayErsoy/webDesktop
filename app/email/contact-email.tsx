
import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
interface ContactEmailProps {
  message: string;
  from: string;
  subject: string;
}
const ContactEmail:React.FC<Readonly<ContactEmailProps>>=({message,from,subject}:ContactEmailProps) =>{
  return <Html>
    <Head>
        <Preview>
            New Message from your portfolio
        </Preview>
     
            <Body>
                <Container>
                    <Section>
                        <Heading>
                            You received this message from {from}
                            
                        </Heading>
                   
                        <Text>Subject: {subject}</Text>
                        
                        <Text>{message}</Text>
                        <Hr/>
                        
                        </Section>
                </Container>
            </Body>
      
    </Head>
  </Html>;
}
export default ContactEmail