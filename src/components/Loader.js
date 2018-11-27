import React from 'react';
import defaultTheme from '../themes/DefaultTheme';
import darkTheme from '../themes/DarkTheme';

class Loader extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="drui-loader__wrapper">
        <div className="drui-loader" />
        <style jsx global>{`
          .drui-loader__wrapper {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
          }

          .drui-loader {
            height: 16px;
            width: 16px;
            border: 3px solid ${defaultTheme.loader.backgroundColor};
            border-right-color: transparent !important;
            border-radius: 50%;
            animation: rotate 0.8s infinite linear;
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .theme--dark {
            .drui-loader {
              border: 3px solid ${darkTheme.loader.backgroundColor};
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Loader;
