import styled from 'styled-components';

export const Section = styled.section`
margin-top: 40px;
margin-left: auto;
margin-right: auto;
width: 755px;

display: flex;
flex-wrap: nowrap;
justify-content: space-between;

@media (max-width: 767px) {
    flex-wrap: wrap;
    flex-direction: column;
    
  }

`;

export const Result = styled.div`
width: 500px;
@media (max-width: 767px) {
    margin-left: auto;
margin-right: auto;
  }
`;
