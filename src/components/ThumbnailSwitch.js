import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from '../themes/DefaultTheme';
import { CheckIcon } from '../components/icons'
import darkTheme from '../themes/DarkTheme';

class ThumbnailSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: {
                id: this.props.defaultOption.id,
                label: this.props.defaultOption.label,
            },
            options: this.props.options || [],
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.log(e)
        this.setState({ selected: e },
            () => {
                this.props.selected(this.state.selected)
                this.props.onChange(this.state.selected);
            });
    };

    render() {
        const {
            options,
            selected,
            defaultOption,
            disabled,
            className,
            labelPosition,
            labelContent,
            onChange,
        } = this.props;

        return (
            <>
                <div
                    className={classnames('thumbnail-switch', {
                        [`thumbnail-switch--${labelPosition}`]: labelContent,
                        ['thumbnail-switch--disabled']: disabled,
                        [className]: className,
                    })}>
                    {
                        options.map(
                            (item, i) => {
                                return (
                                    <div key={i}
                                        className={classnames('thumbnail-switch-container', {
                                            ['active']: (this.state.selected.id === item.id),
                                            [className]: className,
                                        })}
                                        onClick={() => { this.onChange(item) }}>
                                        {item.icon && <item.icon className="drui-thumbnail__icon" />}
                                        <div className="thumbnail-switch-label">
                                            {item.label}
                                        </div>
                                        {
                                            this.state.selected.id === item.id ? <>
                                                <CheckIcon className="check-icon" />
                                            </> : <></>
                                        }
                                    </div>
                                );
                            }
                        )
                    }
                    <style jsx global>{`
                    .thumbnail-switch {
                        display: flex;
                        flex-direction: row;
                    }
                    .thumbnail-switch-container {
                        padding: 16px 24px 4px 24px;
                        border: 1px solid ${defaultTheme.thumbnailSwitch.borderColorInactive};
                        background-color: ${defaultTheme.thumbnailSwitch.backgroundColor};
                        border-radius: 5px;
                        width: max-content;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        margin: 6px;
                        transition-duration: 250ms;
                    }
                    .thumbnail-switch-container:hover {
                        border: 1px solid ${defaultTheme.thumbnailSwitch.borderColorHover};
                        cursor: pointer;
                        transition-duration: 250ms;
                    }
                    
                    .thumbnail-switch .drui-thumbnail__icon {
                        width: 28px;
                        height: 28px;
                        margin: 8px 0px 0px 0px;
                      }
                    .thumbnail-switch path {
                      fill: ${defaultTheme.thumbnailSwitch.iconColor};
                    }
                    .thumbnail-switch .check-icon path {
                      fill: ${defaultTheme.thumbnailSwitch.checkmarkColor};
                    }
                    .thumbnail-switch .thumbnail-switch-label { 
                        display: flex;
                        align-items: center;
                        min-width: 64px;
                        width: max-content;
                        margin-top: 12px;
                        margin-bottom: 12px;
                        background-color: transparent;
                        color: ${defaultTheme.thumbnailSwitch.textColor};
                        font-family: ${defaultTheme.font.family.primary};
                        font-size: ${defaultTheme.font.size.normal};
                        font-weight: ${defaultTheme.font.weight.bold};
                        text-align: center;
                        text-shadow: none;
                        border-radius: 5px;
                        transition: all 250ms ease-in-out;
                        
                    }
                    .thumbnail-switch thumbnail-switch-label:hover {
                        cursor: pointer;
                    }
                    .check-icon {
                        display: block;
                        position: absolute;
                        bottom: -10px;
                        border-radius: 50%;
                        height: 20px;
                        width: 20px;
                        background-color: ${defaultTheme.thumbnailSwitch.checkmarkBackgroundColor};
                        transition: all 250ms ease-in-out;
                    }
                    .thumbnail-switch .active  {
                        background-color: ${defaultTheme.thumbnailSwitch.backgroundColor};
                        border: 1px solid ${defaultTheme.thumbnailSwitch.borderColorActive};
                        color: ${defaultTheme.thumbnailSwitch.textColor};
                        position: relative;
                    }
                    .theme--dark {
                        .text-switch {
                            border: 1px solid ${darkTheme.thumbnailSwitch.borderColor};
                        }
                        .text-switch label {
                            color: ${darkTheme.textSwitch.textColorDisabled};
                            font-family: ${defaultTheme.font.family.primary};
                            font-size: ${defaultTheme.font.size.normal};
                            font-weight: ${defaultTheme.font.weight.bold};

                            path {
                              fill: ${darkTheme.thumbnailSwitch.iconColorDisabled};
                            }
                        }
                        .text-switch input:checked + label {
                            background-color: ${darkTheme.thumbnailSwitch.backgroundColor};
                            color: ${darkTheme.thumbnailSwitch.textColorActive};
                            path {
                              fill: ${darkTheme.thumbnailSwitch.iconColorActive};
                            }
                        }
                    }
                `}</style>
                </div>
            </>
        );
    }
}

ThumbnailSwitch.propTypes = {
    options: PropTypes.array,
    selected: PropTypes.func,
    defaultOption: PropTypes.object,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    labelContent: PropTypes.string,
    labelPosition: PropTypes.string,
    onChange: PropTypes.func,
};

ThumbnailSwitch.defaultProps = {
    options: [],
    selected() { },
    defaultOption: {},
    disabled: false,
    className: '',
    labelPosition: 'top',
    labelContent: 'Label',
    onChange() { },
};

export default ThumbnailSwitch;