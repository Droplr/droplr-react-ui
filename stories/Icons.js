import React from 'react';
import { storiesOf } from '@storybook/react';
import defaultTheme from '../src/themes/DefaultTheme';
import * as icons from '../src/components/icons';

const iconsArray = Object.keys(icons).map((key) => icons[key]);

function getIcons() {
  return iconsArray.map(Icon => {
    const iconComponent = <Icon />;

    return (
      <div className="iconWrapper" key={`icon-${iconComponent.type.name}`}>
        <Icon />
        <span className="icon__title">{iconComponent.type.name}</span>
      </div>
    );
  })
}

const IconsDecorator = (storyFn) => (
  <div className="iconsWrapper">
    {storyFn()}
    <style jsx global>{`
      .storyWrapperLight,
      .storyWrapperDark {
        width: auto !important;
      }

      .iconsWrapper {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
      }

      .iconsWrapper .iconWrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 60px;

        svg {
          display: block;
          margin-bottom: 10px;
        }
      }

      .icon__title {
        font-size: ${defaultTheme.font.size.small};
        font-family: ${defaultTheme.font.family.primary};
        color: darken(#fff, 30%);
      }

      .theme--dark {
        .iconWrapper {
          svg {
            fill: darken(#fff, 30%);

            * {
              fill: darken(#fff, 30%);
            }
          }

          .icon__title {
            color: lighten(#000, 40%);
          }
        }
      }
    `}</style>
  </div>
);

storiesOf('Icons', module)
  .addDecorator(IconsDecorator)
  .addWithJSX('All icons', () => (
    <>{getIcons()}</>
  ))
