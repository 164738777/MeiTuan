/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'

import color from './color'

export default class SpacingView extends PureComponent {
    render() {
        return (
            <View style={styles.container}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 14,
        backgroundColor: color.background,
    },
});
