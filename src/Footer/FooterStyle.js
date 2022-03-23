import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 20px;
    width: 100%;
    backdrop-filter: blur(20px);
    position:relative;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(2,auto);
    justify-content: space-evenly;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(1,auto);
    }
`;

export const Column = styled.div`
display: flex;
flex-direction: column;

@media (max-width: 1000px)
{margin-bottom: 10px;}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 20px;
font-weight: bold;

@media (max-width: 1000px) {
    font-size: 18px;
    margin-bottom: 10px;
}
`;

export const Contact = styled.p`
font-size: 14px;
color: #fff;
margin-bottom: 20px;

@media (max-width: 1000px) {
    font-size: 10px;
    margin-bottom: 10px;
}
`;
