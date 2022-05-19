import React from 'react';
import styled from "styled-components";


const PhotoWrap = styled.div`
  justify-content: center;
`;

const ParaDiv = styled.div`
  justify-content: center;
  background-color: lightblue;
  border-radius: 3px;
  border: 2px solid rgb(100, 100, 100);
  width: 80%;
  margin: 0 auto;
  font-family: "Times New Roman", Times, serif;
`;

const NasaPhoto = (props => {
    return (
        <PhotoWrap>
            <h1>{props.photo.title}</h1>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl}/>
            <ParaDiv>
            <h3>Summary:</h3>
            <p>{props.photo.explanation}</p>
            </ParaDiv>
        </PhotoWrap>
    )
});

export default NasaPhoto;