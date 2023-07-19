import {StyleSheet, View, Text} from 'react-native';

import {GlobalStyles} from '../../constants/styles';
import ExpensesList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

function ExpensesOutput({expenses, expensesPeriod, fallBackText}) {
    let content = <Text style={styles.infoText}>{fallBackText}</Text>
    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses}/>;
    }
    return (
        <View style={styles.container}>
            <ExpenseSummary expenses={expenses} periodName={expensesPeriod}/>
            {content}
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    },
});