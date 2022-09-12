import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-height: 100vh;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;
export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.background};
  min-width: 20rem;
  min-height: 100vh;
  /* overflow-block: auto; */
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;
export const Main = styled.section`
  background: ${(props) => props.theme.colors.container};
  width: 100%;
  height: 130vh;
  overflow: hidden;
  padding: 40px;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;
