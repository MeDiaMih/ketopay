import styled from 'styled-components';

export const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &.open {
        transform: translateX(0);
    }
`;

export const MenuItem = styled.div`
    font-size: 22px;
    padding: 14px 20px;
    font-weight: 700;
    cursor: pointer;
    width: 100%;

    &:hover {
        background-color: #f5f5f5;
    }
`;

export const CloseButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 1001;
`;