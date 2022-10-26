import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    align-items: center;
`;

export const Logo = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    display: flex;
    align-items: center;    
`;

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 25px;
    box-sizing: border-box;
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
`;
