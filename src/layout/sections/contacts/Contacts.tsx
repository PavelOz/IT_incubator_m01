import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <StyledField placeholder="name"/>
                <StyledField placeholder="subject"/>
                <StyledField placeholder="message" as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>


        </StyledContacts>

    )
}

const StyledContacts = styled.section `
    min-height: 50vh;
    background-color: aliceblue;
`
const StyledForm = styled.form `
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const StyledField = styled.input `
    
`