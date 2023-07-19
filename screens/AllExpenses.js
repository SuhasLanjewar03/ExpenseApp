import {useContext} from "react";
import {ExpensesContext} from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {View} from "react-native";

function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);
    return (
        <ExpensesOutput expenses={expensesCtx.expenses}
                        expensesPeriod="Total"
                        fallbackText="No registered expenses found!"/>
    );

}

export default AllExpenses;

// const styles=StyleSheet.create({
//    container:{
//        flex:1,
//    }
// });