import { Text, StyleSheet, View } from 'react-native';
import { Fab } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { incrementCount, decrementCount } from '../actions/counter_action';
import { useDispatch, useSelector } from 'react-redux';


export default function Counter() {

    const dispactch = useDispatch();
    const count = useSelector((state) => state.counterReducer.count);

    const increment = () => {
        dispactch(incrementCount());
    }

    const decrement = () => {
        dispactch(decrementCount());
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.counterMainContainer}>
                <View style={styles.counterContainer}>
                    <Text style={styles.textStyle}>{count}</Text>
                </View>
            </View>

            <View>
                <Fab
                    placement="bottom-right"
                    colorScheme="blue"
                    size="lg"
                    icon={<MaterialCommunityIcons name="minus" size={26} color="white" />}
                    onPress={decrement}
                />
                <Fab
                    placement="bottom-left"
                    colorScheme="blue"
                    size="lg"
                    icon={<MaterialCommunityIcons name="plus" size={26} color="white" />}
                    onPress={increment}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignSelf: 'center'
    },

    counterMainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    counterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 100,

    },
    textStyle: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold'

    }
})
