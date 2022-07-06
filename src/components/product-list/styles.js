import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  color: var(--primary);

`

export const ContentCatalogue = styled.div`

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  text-align: center;
  height: 100%;
  width: 100%;
  color: var(--primary);

  img {
    width: 110px;
    height: 200px;
  }

`
export const ContentCart = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  color: var(--primary);
  border: 1px solid blue;

  img {
    width: 110px;
    height: 200px;
  }



`