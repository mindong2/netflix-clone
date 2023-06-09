import styled from "styled-components";

const Spinner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.black.veryDark};
  .loader-circle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    margin-left: -60px;
    margin-top: -60px;
  }
  .loader-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -100%);
    color: rgba(255, 255, 255, 0.8);
    font-family: Arial, sans-serif;
  }
  .loader-line-mask {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 60px;
    height: 120px;
    margin-left: -60px;
    margin-top: -60px;
    overflow: hidden;
    transform-origin: 60px 60px;
    animation: rotate 1.2s infinite linear;
  }
  .loader-line-mask .loader-line {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <Spinner>
      <div className="loader-circle">
        <p className="loader-content">LOADING</p>
        <div className="loader-line-mask">
          <div className="loader-line"></div>
        </div>
      </div>
    </Spinner>
  );
};

export default Loading;
