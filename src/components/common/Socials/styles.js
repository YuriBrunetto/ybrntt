import styled from 'styled-components'

export const Container = styled.div`
  border-top: 1px solid $primary-color;
  display: flex;
  margin-top: 30px;

  @media (max-width: 370px) {
    flex-wrap: wrap;
  }

  .socials-a {
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: #fff;
    display: flex;
    height: 40px;
    justify-content: center;
    transition: 0.3s ease-in-out;
    width: 40px;

    &:hover {
      box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
      background-color: var(--primary-color);
      color: #fff;
    }

    &:not(:first-child) {
      margin-left: 8px;

      @media (max-width: 370px) {
        margin-left: 5px;
      }
    }
  }
`
