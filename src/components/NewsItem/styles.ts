import styled from 'styled-components';

export const NewsItemContainer = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    border-bottom: 1px solid #EDEDED;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(+2px);

    }
`;


export const NewsImage = styled.img`
    width: 100%;
    max-width: 99px;
    height: 72px;
    object-fit: cover;
    margin-top: 25px;
`;

export const NewsContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const NewsTitle = styled.h2`
    font-size: 14px;
    font-weight: 800;
    color: #096FFA;
`;


export const NewsDescription = styled.p`
`;

export const NewsDate = styled.p`
    font-size: 14px;
    color: #6D787A;
    margin-bottom: 16px;
`;