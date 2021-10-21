import React from "react";
//styles
import { Wrapper, Content, Text } from "../HeroImgae/HeroImage.styled";

const HeroImage = ({image, title, text, defi, className}) => (
    <Wrapper image={image} id={defi} className={className}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
)

export default HeroImage;