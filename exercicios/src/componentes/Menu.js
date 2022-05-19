import React from 'react';
import { createDrawerNavigation } from 'react-navigation';

import Array from './Array';
import { Inverter } from './Export'

export default createDrawerNavigation ({
    Array: {
        screen: () => <Array/>,
        navigatorOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto="React Native" />
    },
    ParImpar: {
        screen: () => <ParImpar numero={36} />,
        navigatorOptions: { title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto="Flexivel" />
    }
}, { drawerWidth: 300 })