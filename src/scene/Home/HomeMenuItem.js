/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

import {Heading2} from '../../widget/Text'
import {screen, system, tool} from '../../common'

// 团购 页面顶部10个小按钮Item
export default class HomeMenuItem extends PureComponent {
    render() {
        return (
            <TouchableOpacity style={styles.container}
                              onPress={this.props.onPress}>
                <Image source={this.props.icon} resizeMode='contain' style={styles.icon}/>
                <Heading2>
                    {this.props.title}
                </Heading2>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 5,
        height: screen.width / 5,
    },
    icon: {
        width: screen.width / 9,
        height: screen.width / 9,
        margin: 5,
    }
});
