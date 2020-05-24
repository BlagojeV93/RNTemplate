import { StyleSheet, Platform } from 'react-native'

export const bold = Platform.OS == 'ios' ? '900' : 'bold';

export const styles = StyleSheet.create({

    // Reusable styles

    flexCenteredCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexFullWidthCont: {
        flex: 1,
        width: '100%'
    },
    flexFullWidthCenteredCont: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fullWidthCenteredCont: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fullWidthHeightCont: {
        width: '100%',
        height: '100%'
    },
    rowCenteredCont: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    fullCenteredCont: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    containedImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    coveredImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
})