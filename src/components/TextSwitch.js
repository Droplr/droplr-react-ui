import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from '../themes/DefaultTheme';
import darkTheme from '../themes/DarkTheme';

class TextSwitch extends React.Component {

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
        this.setState({ selected: this.props.options.find(x => x.id === Number(e.id)) },
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
            labelContent,
            onChange,
        } = this.props;

        return (
            <div >
                {
                    labelContent ? <>
                        <div className='text-switch-label'>
                            {labelContent}
                        </div>
                    </> : <></>
                }
                <div className={classnames('text-switch', {
                    ['text-switch--disabled']: disabled,
                    [className]: className,
                })}>
                    {
                        options.map(
                            (item, i) => {
                                return (
                                    <div key={i} 
                                        id={`text-switch-${i}-${this.props.className}`}
                                        className={classnames('text-switch-item', {
                                            ['active']: this.state.selected.id === item.id,
                                            [className]: className,
                                        })}
                                        onClick={() => { this.onChange(item); }}>
                                        <label>
                                            {item.icon && <item.icon className="drui-button__icon" />}
                                            {item.label}
                                        </label>
                                    </div>
                                );
                            }
                        )
                    }
                </div>

                <style jsx global>{`
                    .text-switch {
                        padding: 4px;
                        border: 1px solid ${defaultTheme.textSwitch.borderColor};
                        border-radius: 5px;
                        width: max-content;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                    }
                    .text-switch-label {
                        color: ${defaultTheme.textSwitch.textColorLabel};
                        font-family: ${defaultTheme.font.family.primary};
                        font-size: ${defaultTheme.font.size.normal};
                        font-weight: ${defaultTheme.font.weight.bold};
                        padding-bottom: 8px;
                    }
                    .text-switch input {
                        position: absolute !important;
                        clip: rect(0, 0, 0, 0);
                        height: 1px;
                        width: 1px;
                        border: 0;
                        overflow: hidden;
                    }
                    .text-switch .text-switch-item { 
                        min-width: 64px;
                        width: max-content;
                        background-color: transparent;
                        color: ${defaultTheme.textSwitch.textColorDisabled};
                        font-family: ${defaultTheme.font.family.primary};
                        font-size: ${defaultTheme.font.size.normal};
                        font-weight: ${defaultTheme.font.weight.bold};
                        text-align: center;
                        text-shadow: none;
                        padding: 8px 18px;
                        border-radius: 5px;
                        transition: all 250ms ease-in-out;

                        path {
                          fill: ${defaultTheme.textSwitch.iconColorDisabled};
                        }
                    }
                    .text-switch label {
                        display: flex;
                        align-items: center;
                    }
                    .text-switch label:hover {
                        cursor: pointer;
                    }
                    
                    .text-switch .drui-button__icon {
                        width: 18px;
                        height: 18px;
                        margin-right: 6px;
                      }

                    .text-switch .active {
                        background-color: ${defaultTheme.textSwitch.backgroundColor};
                        color: ${defaultTheme.textSwitch.textColorActive};

                        path {
                          fill: ${defaultTheme.textSwitch.iconColorActive};
                        }
                    }
                    .theme--dark {
                        .text-switch {
                            border: 1px solid ${darkTheme.textSwitch.borderColor};
                        }
                        .text-switch-label {
                            color: ${darkTheme.textSwitch.textColorLabel};
                        }
                        .text-switch label {
                            color: ${darkTheme.textSwitch.textColorDisabled};
                            font-family: ${defaultTheme.font.family.primary};
                            font-size: ${defaultTheme.font.size.normal};
                            font-weight: ${defaultTheme.font.weight.bold};

                            path {
                              fill: ${darkTheme.textSwitch.iconColorDisabled};
                            }
                        }
                        .text-switch input:checked + label {
                            background-color: ${darkTheme.textSwitch.backgroundColor};
                            color: ${darkTheme.textSwitch.textColorActive};
                            path {
                              fill: ${darkTheme.textSwitch.iconColorActive};
                            }
                        }
                    }
                `}</style>
            </div>
        );
    }
}

TextSwitch.propTypes = {
    options: PropTypes.array,
    selected: PropTypes.func,
    defaultOption: PropTypes.object,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    leftText: PropTypes.string,
    rightText: PropTypes.string,
    labelContent: PropTypes.string,
    labelPosition: PropTypes.string,
    onChange: PropTypes.func,
};

TextSwitch.defaultProps = {
    options: [],
    selected() { },
    defaultOption: {},
    disabled: false,
    className: '',
    labelContent: '',
    onChange() { },
};

export default TextSwitch;