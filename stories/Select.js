import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from '../src/components/Select';

const options = [
  {title: "Item 1 lorem ipsum dolor" , value: 'Item 1'},
  {title: "Item 2 lorem ipsum dolor" , value: 'Item 2'},
  {title: "Item 3 lorem ipsum dolor" , value: 'Item 3'},
  {title: "Item 4 lorem ipsum dolor" , value: 'Item 4'},
]


class SelectWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currOption: this.props.options[0],
    };
    this.setOption = this.setOption.bind(this);
  }

  setOption(option){
    this.setState({currOption: option});
  }

  render() {
    const {options, labelContent, error} = this.props
    const {currOption} = this.state;
    return (
      <Select
        options={options}
        currentOption={currOption}
        setOption={this.setOption}
        labelContent={labelContent}
        error={error}
      />
    )
  }
}

storiesOf('Select', module)
  .addWithJSX('Component Select', () => (
    <>
      <SelectWrapper
        options={options}
      />
    </>
  ))
  .addWithJSX('Select with label', () => (
    <>
      <SelectWrapper
        options={options}
        labelContent="Example label"
      />
    </>
  ))
  .addWithJSX('Select error', () => (
    <>
      <SelectWrapper
        options={options}
        error="Example error"
      />
    </>
  ));
