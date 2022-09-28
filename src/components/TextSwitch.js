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
        this.setState({ selected: this.props.options.find(x => x.id === Number(e.target.value)) }, 
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
            <div className={classnames('text-switch', {
                [`text-switch--${labelPosition}`]: labelContent,
                ['text-switch--disabled']: disabled,
                [className]: className,
            })}>
                {
                    options.map(
                        (item, i) => {
                            return (
                                <>
                                    <input
                                        key={`tsi-${item.id}`}
                                        type="radio"
                                        id={`text-switch-${i}-${this.props.className}`}
                                        value={item.id}
                                        onChange={this.onChange}
                                        checked={this.state.selected.id === item.id}
                                    />
                                    <label htmlFor={`text-switch-${i}-${this.props.className}`}
                                        key={`tsl-${item.id}`}>
                                        {item.label}
                                    </label>
                                </>
                            );
                        }
                    )
                }

                <style jsx global>{`
        
                    .text-switch {
                        padding: 4px;
                        border: 1px solid ${defaultTheme.textSwitch.borderColor};
                        border-radius: 5px;
                        width: max-content;
                    }
                    .text-switch input {
                        position: absolute !important;
                        clip: rect(0, 0, 0, 0);
                        height: 1px;
                        width: 1px;
                        border: 0;
                        overflow: hidden;
                    }
                    .text-switch label { 
                        display: inline-block;
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
                    }
                    .text-switch label:hover {
                        cursor: pointer;
                    }
                    .text-switch input:checked + label {
                        background-color: ${defaultTheme.textSwitch.backgroundColor};
                        color: ${defaultTheme.textSwitch.textColorActive};
                    }
                    .theme--dark {
                        .text-switch {
                            border: 1px solid ${darkTheme.textSwitch.borderColor};
                        }
                        .text-switch label {
                            color: ${darkTheme.textSwitch.textColorDisabled};
                            font-family: ${defaultTheme.font.family.primary};
                            font-size: ${defaultTheme.font.size.normal};
                            font-weight: ${defaultTheme.font.weight.bold};
                        }
                        .text-switch input:checked + label {
                            background-color: ${darkTheme.textSwitch.backgroundColor};
                            color: ${darkTheme.textSwitch.textColorActive};
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
    selected() {},
    defaultOption: {},
    disabled: false,
    className: '',
    leftText: 'left',
    labelPosition: 'top',
    rightText: 'right',
    labelContent: 'Label',
    onChange() { },
};

export default TextSwitch;