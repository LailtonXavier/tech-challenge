import styled from 'styled-components';

export const CenterLoading = styled.div`
  position: absolute;
  height: 178%;
  width: 100%;
  top: -50%;
  left: 0;
  z-index: 1;
  font-size: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);

  .loader {
    --color: white;
    --size-mid: 6vmin;
    --size-dot: 1.5vmin;
    --size-bar: 0.4vmin;
    --size-square: 3vmin;

    display: block;
    position: relative;
    width: 50%;
    display: grid;
    place-items: center;
  }

  .loader::before,
  .loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
  }

  /**
  loader --8
**/
  .loader.--8::before,
  .loader.--8::after {
    width: var(--size-dot);
    height: var(--size-dot);
    border-radius: 50%;
    background-color: var(--color);
  }

  .loader.--8::before {
    top: calc(50% + 4vmin);
    animation: loader-8-1 0.8s cubic-bezier(0.06, 0.01, 0.49, 1.18) infinite;
  }

  .loader.--8::after {
    opacity: 0;
    top: calc(50% - 2vmin);
    animation: loader-8-2 0.8s cubic-bezier(0.46, -0.1, 0.27, 1.07) 0.2s
      infinite;
  }

  @keyframes loader-8-1 {
    0%,
    55%,
    100% {
      opacity: 0;
    }

    0% {
      transform: scale(0.2);
    }

    22% {
      opacity: 1;
    }

    33%,
    55% {
      transform: scale(1) translateY(-6vmin);
    }
  }

  @keyframes loader-8-2 {
    0%,
    100% {
      opacity: 0;
    }

    33% {
      opacity: 0.3;
    }

    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(4);
    }
  }
`;
