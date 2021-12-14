import React from 'react';
import Header from '../Components/Header/Header';

export default {
    title: 'Example/Header',
    component: Header,
}
const Template = args => <Header {...args} />
export const HeaderComponents = Template.bind({});

HeaderComponents.args= {
  background: '#F2F0FF', 
}

