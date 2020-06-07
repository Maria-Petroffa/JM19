import styled from 'styled-components';

export const CardMain = styled.div`
display: block;
margin-top: 20px;
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
border-radius: 5px;
width: 100%;
padding-top: 20px;
padding-bottom: 20px;
padding-left: 20px;
padding-right: 20px;

font-weight: 600;
`;

export const CardMainHead = styled.div`
display: flex;
justify-content: space-between;

font-weight: 600;
font-size: 24px;

color: #2196F3;
`;

export const Price = styled.div`
align-self: center;
width: 140px;
`;

export const Logo = styled.img`

`;

export const LogoWrap = styled.div`
width: 140px;
`;

export const CardData = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: nowrap;

margin-top: 10px;
`;

export const CardDataWrap = styled.div`
width: 140px;
`;

export const CardDataHeader = styled.div`
height: 20px;
font-weight: 600;
font-size: 12px;
text-transform: uppercase;
color: #A0B0B9;
margin-top: 10px;

`;

export const CardDataBody = styled.div`
height: 20px;
font-weight: 600;
font-size: 14px;
color: #4A4A4A;
`;
