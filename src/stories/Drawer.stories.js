import React from 'react';
import Drawer from '../Components/Drawer/Drawer';

export default {
    title: 'Example/Drawer',
    component: Drawer,
    argTypes: { handleClick: { action: "handleClick" } },
}
const Template = args => <Drawer {...args} />
export const DrawerComponents = Template.bind({});

DrawerComponents.args= {
    backgroundColor: "#F2F0FF",
    width: '375px',
    height: "667px",
    padding: '20px 20px', 
}

