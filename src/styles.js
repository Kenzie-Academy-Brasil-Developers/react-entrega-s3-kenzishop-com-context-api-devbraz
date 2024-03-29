import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;

`

export const ContainerCatalogue = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 50%;
  color: var(--primary);
  padding-top: 10%;

  p {
    margin: 25px;
    font-size: 50px;
    color: var(--grey-2)
  }

`

export const ContainerCart = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 50%;
  color: var(--primary);
  padding-top: 10%;

  p {
    margin: 25px;
    font-size: 50px;
    color: var(--grey-2)
  }

`